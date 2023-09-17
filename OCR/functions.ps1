
 
function Convert-PDF_to_Tiff {
    param(
        [String]$pdfFile    
    )
    
    $Tesseract_PDF = "$($PDF_Tesseract_PathDirectory)\$($pdfFile)"
    # Generate the name for the image based on PDF file and index
    $pdfFile_name = $pdfFile -replace '.pdf', ''
    $Img_Name = "$(Split-Path -Path $Img_Pdf2img_PathDirectory -Leaf)" + "\$($pdfFile_name)" 

    # Prepare the quoted path of the PDF file
    $pdf_quoted = "`"$("$Tesseract_PDF")`""
    $img_quoted = "`"$("$Img_Name")`""
 
    # Define arguments for the 'pdftoppm' command
    $ArgumentList_Pdf2Img = "-f 1 -r 300 $($pdf_quoted) $($img_quoted) -tiff -overprint"
    
    # Execute 'pdftoppm' as a separate process, waiting for it to finish
    
    Start-Process 'pdftoppm' -ArgumentList $ArgumentList_Pdf2Img -WorkingDirectory $Pdf2Img_PathExe -Wait
    
}


# Define a function to format TIFF images
function ConvertFrom-Tiff_Format {
    # Loop through each TIFF image in the source directory
    Get-ChildItem -Path $([String]$($Img_Magic_PathDirectory)) |  ForEach-Object {
        # Create a quoted path for the TIFF file for use in command arguments
        $tiff_file_Magic = "`"$("$($_.FullName)")`""
        # Define image processing arguments for ImageMagick
        $ArgumentList_ImageMagic = "-level 30x100% -type grayscale -depth 8 -strip -background white -alpha off -units pixelsperinch -density 300 -black-threshold 87%"
        # Combine the TIFF file path and ImageMagick arguments
        $ArgumentList_ImageMagic = "$tiff_file_Magic $ArgumentList_ImageMagic $tiff_file_Magic"
        # Start the ImageMagick 'convert' process to apply the specified transformations to the TIFF image
        Start-Process "$ImageMagic_PathExe\convert.exe" -ArgumentList $ArgumentList_ImageMagic -WorkingDirectory $ImageMagic_PathExe -Wait 
    }
}



# Function to convert a TIFF image to text using Tesseract OCR
function Convert-Img_To_Text {
    Get-ChildItem -Path $([String]($Img_Magic_PathDirectory)) | ForEach-Object {
        # Define the arguments for the 'tesseract' command
        $inputImage = "`"$("$($_.FullName)")`""  # Quoted path to the input image
        $outputHOCR = "`"$("$("$($HOCR_Tesseract_PathDirectory)\$(($_.Name -replace '.tif',''))")")`""  # Quoted path to the output HOCR file
        $OCR_Options = "--oem 1 -l eng hocr"  # Tesseract OCR options
        # Combine the input image, output HOCR file, and OCR options into a single argument string
        [String]$arguments = "$inputImage $outputHOCR $OCR_Options"
        # Start the 'tesseract' process with the specified arguments
        Start-Process 'tesseract' -ArgumentList $($arguments) -WorkingDirectory $($Tesseract_PathExe) -Wait
    }
}


function Send-InterfaceResponse {
    $tableRows = @()
    Get-ChildItem -Path $([String]($HOCR_Tesseract_PathDirectory)) | ForEach-Object {
        $file_hocr = $_.FullName  # Get the full path of the current HOCR file
        $hocr_data = $(Get-Content -Path $($file_hocr) -Raw)  # Read the content of the HOCR file
        $hocr_data -replace '</body>', $('<script src="https://unpkg.com/hocrjs"></script>' + "`n" + '</body>') | Set-Content $file_hocr
        $row = @()
        $_ | ForEach-Object { 
            $row += @"
                <td><a target='_blank' href='OCR/data/hocr/$($_.Name)'>$($($_.Name) -replace '.hocr','')</a><br>
                <td><a target='_blank' href='OCR/data/processed/tif/$($($_.Name) -replace '.hocr','.tif')'>$($($_.Name) -replace '.hocr','')</a><br>
                
                <td>$($_.LastWriteTime)</td>                                                        
"@
            $tableRows += "<tr>$($row)</tr>"
            $row = @()
            # Create and display the HTML table
        }
    }
    $htmlTable = "<tr><th>Extracted information</th><th>Image file</th><th>Datetime</th></tr>$($tableRows -join '')"
    return "<pre>$htmlTable</pre>"
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