# Set the supported security protocols to TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
# Check if the configuration file exists before attempting to read it
if (Test-Path -Path $configFilePath -PathType Leaf) {   
    # Set various paths based on the configuration data from config.json
    $Global:Pdf2Img_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $config.app.Pdf2img.Directory)
    $Global:Tesseract_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $config.app.Tesseract.Directory)
    $Global:ImageMagic_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $config.app.ImageMagic.Directory)
    $Global:Img_Pdf2img_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Pdf2img.img.Directory)
    $Global:Img_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Tesseract.img.Directory)
    $Global:PDF_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Tesseract.pdf.Directory)
    $Global:HTML_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Tesseract.html.Directory)
    $Global:HOCR_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Tesseract.hocr.Directory)
    $Global:Processed_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $config.data.Tesseract.prsc.Directory)
}
else {
    # If the configuration file doesn't exist, show an error message and exit the script
    Write-Host "Config file not found: $configFilePath" -ForegroundColor Red
    exit 1
}

function Convert-PDF_to_Tiff {
    param(
        [String]$index,
        [String]$pdfFile,
        [String]$Pdf2Img_PathExe,
        [String]$Img_Pdf2img_PathDirectory,
        [String]$PDF_Tesseract_PathDirectory,
        [String]$Img_Tesseract_PathDirectory,
        [String]$Processed_Tesseract_PathDirectory
    )
    
    try {
        # Generate the name for the image based on PDF file and index
        $Img_Name = "$(Split-Path -Path $Img_Pdf2img_PathDirectory -Leaf)" + "\" + [int]($index + 1)

        # Prepare the quoted path of the PDF file
        $file_quoted = "`"$("$PDF_Tesseract_PathDirectory\$pdfFile")`""

        # Define arguments for the 'pdftoppm' command
        $ArgumentList_Pdf2Img = "-f 1 -r 300 $($file_quoted) $($Img_Name) -tiff -overprint"

        # Execute 'pdftoppm' as a separate process, waiting for it to finish
        Start-Process 'pdftoppm' -ArgumentList $ArgumentList_Pdf2Img -WorkingDirectory $Pdf2Img_PathExe -Wait -NoNewWindow

        # Move the processed PDF file to a different directory
        Move-Item -Path $("$PDF_Tesseract_PathDirectory\$pdfFile") -Destination $Processed_Tesseract_PathDirectory -Force

        # Check if the destination directory for images exists
        if (Test-Path $Img_Pdf2img_PathDirectory -PathType Container) {
            # If the destination directory for OCR images doesn't exist, create it
            if (-not (Test-Path $Img_Tesseract_PathDirectory -PathType Container)) {
                New-Item -ItemType Directory -Force -Path $Img_Tesseract_PathDirectory
            }
        }
        return [string]$("$PDF_Tesseract_PathDirectory\$pdfFile")
    }
    catch {
        # Handle any errors that occur during PDF file processing and provide error information
        Get-ErrorInfo $_
    }
}


# Define a function to format TIFF images
function ConvertFrom-Tiff_Format {
    param(
        $pdfFile,
        $ImageMagic_PathExe,
        $Img_Pdf2img_PathDirectory,
        $Img_Tesseract_PathDirectory
    )
    # Remove the ".pdf" extension from the PDF file name
    $pdfFile_name = $pdfFile -replace '.pdf', ''

    # Loop through each TIFF image in the source directory
    Get-ChildItem -Path $Img_Pdf2img_PathDirectory | ForEach-Object {
        # Generate a new file name for the TIFF image based on the PDF file name and the original image name
        $tiff_file = $_.Name -replace $($_.Name), "$($pdfFile_name)_$($_.Name)"
        
        # Replace any hyphens with underscores and create the full path for the destination file
        $tiff_file = $tiff_file -replace '-', '_Pag'
        $Img_Tesseract_FileDirectory = Join-Path -Path $Img_Tesseract_PathDirectory -ChildPath $($tiff_file)
        
        # Move the TIFF image to the destination directory, overwriting if it already exists
        Move-Item -Path $_.FullName -Destination $Img_Tesseract_FileDirectory -Force 
        
        # Create a quoted path for the TIFF file for use in command arguments
        $tiff_file_Magic = "`"$("$Img_Tesseract_FileDirectory")`""
        
        # Define image processing arguments for ImageMagick
        $ArgumentList_ImageMagic = "-level 30x100% -type grayscale -depth 8 -strip -background white -alpha off -units pixelsperinch -density 300 -black-threshold 87%"
        
        # Combine the TIFF file path and ImageMagick arguments
        $ArgumentList_ImageMagic = "$tiff_file_Magic $ArgumentList_ImageMagic $tiff_file_Magic"
        
        # Start the ImageMagick 'convert' process to apply the specified transformations to the TIFF image
        Start-Process "$ImageMagic_PathExe\convert.exe" -ArgumentList $ArgumentList_ImageMagic -WorkingDirectory $ImageMagic_PathExe -Wait 
        
        return $tiff_file
    }
}



# Function to convert a TIFF image to text using Tesseract OCR
function Convert-Img_To_Text {
    param(
        [string]$tiff_file,
        [string]$Tesseract_PathExe,
        [string]$HTML_Tesseract_PathDirectory
    )
    try {
        $Img_Tesseract_FileDirectory = Join-Path -Path $Img_Tesseract_PathDirectory -ChildPath $($tiff_file)
        # Define the arguments for the 'tesseract' command
        $inputImage = "`"$("$Img_Tesseract_FileDirectory")`""  # Quoted path to the input image
        $outputHOCR = "`"$("$($HTML_Tesseract_PathDirectory)\$($tiff_file -replace '.tif','')")`""  # Quoted path to the output HOCR file
        $OCR_Options = "--oem 1 -l eng hocr"  # Tesseract OCR options
        # Combine the input image, output HOCR file, and OCR options into a single argument string
        $arguments = "$inputImage $outputHOCR $OCR_Options"
    
        # Start the 'tesseract' process with the specified arguments
        Start-Process 'tesseract' -ArgumentList $arguments -WorkingDirectory $Tesseract_PathExe -Wait
    }
    catch {
        Get-ErrorInfo $_        
    }
}


function Send-InterfaceResponse {
    param(
        [String]$index,
        [String]$pdfFile, 
        [String]$HOCR_Tesseract_PathDirectory
    )
    try {
        # Get a list of HOCR files from the "data" directory
        $horcs = $(Get-Childitem $(Join-Path -Path $PSScriptRoot -ChildPath "data") | Where-Object { $_.extension -eq ".hocr" }) 

        # Process each HOCR file
        $horcs | ForEach-Object { 
            $file_hocr = $_.FullName  # Get the full path of the current HOCR file
            $hocr_data = $(Get-Content -Path $($file_hocr) -Raw)  # Read the content of the HOCR file

            # Replace the '</body>' tag in the HOCR content with a script tag for hocrjs that transform the hocr data imto readable
            $hocr_data -replace '</body>', $('<script src="https://unpkg.com/hocrjs"></script>' + "`n" + '</body>') | Set-Content $file_hocr

            $output = @()  # Initialize an array to store output data
    
            # Process each HOCR file and emulates the html element to redirect to the extracted data files
            $_ | ForEach-Object { 
                $hocr_link = $("<a target='_blank' href='OCR/data/hocr/$($_.Name)'>$($pdfFile) [Pag. $([int]$($($horcs).($index)))]</a>")
                $output += @{
                    DocumentDate = $($_.LastWriteTime)
                    Link         = $hocr_link 
                }
                return $_ } 
            # Move the processed HOCR file to the destination directory
            # Convert the output data to HTML and select specific properties for display
            $output | ConvertTo-Html -Fragment -As Table | Select-Object -Property DocumentDate, Link
            # Prepare the output data for display
            $output = $($output | Out-String) -replace '<table>', '' -replace '</table>', ''
            Move-Item -Path $file_hocr -Destination $HOCR_Tesseract_PathDirectory -Force 
            return $output
        }

    }
    catch {
        Get-ErrorInfo $_        
    }
}



function Get-ErrorInfo {
    param(
        [Object]$e
    )
    $error_data = @{"Error message" = "$(($e.Exception.Message | Out-String).Trim())"
        "Error script"              = "$(($e.InvocationInfo.ScriptName | Out-String).Trim())"
        "Error line"                = "$(($e.InvocationInfo.ScriptLineNumber | Out-String).Trim())"
        "Error code"                = "$(($e.InvocationInfo.Line | Out-String).Trim())"
    }

    Write-Host "ERROR" -ForegroundColor Red -BackgroundColor Yellow -NoNewline
    Write-Host "`n$(($error_data | Out-String ))"  -ForegroundColor Yellow
    exit 1
}