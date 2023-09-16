# Set the supported security protocols to TLS 1.2[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$configFilePath = Join-Path -Path $PSScriptRoot -ChildPath "config\config.json"
# Check if the configuration file exists before attempting to read it
if (Test-Path -Path $configFilePath -PathType Leaf) {   
    $config = Get-Content -Path $configFilePath | ConvertFrom-Json
    # Set various paths based on the configuration data from config.json
    [String]$Global:Img_Pdf2img_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.Pdf2img.img.Directory))
    [String]$Global:Pdf2Img_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.app.Pdf2img.Directory))
    [String]$Global:Tesseract_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.app.Tesseract.Directory))
    [String]$Global:ImageMagic_PathExe = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.app.ImageMagic.Directory))
    [String]$Global:Img_Magic_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.ImageMagic.img.Directory))
    [String]$Global:Data_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.Tesseract.data.Directory))
    [String]$Global:PDF_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.Tesseract.pdf.Directory))
    [String]$Global:HOCR_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.Tesseract.hocr.Directory))
    [String]$Global:Processed_Tesseract_PathDirectory = $(Join-Path -Path $PSScriptRoot -ChildPath $($config.data.Tesseract.prsc.Directory))
}
else {
    # If the configuration file doesn't exist, show an error message and exit the script
    Write-Host "Config file not found: $configFilePath" -ForegroundColor Red
    exit 1
}

$functions = "$(Join-Path -Path $PSScriptRoot -ChildPath "functions.ps1")"
. $functions


try {
    $PDFS = Get-ChildItem -Path $PDF_Tesseract_PathDirectory -File -Filter "*.pdf"
    if ($pdfFiles.Count -lt 1) {
        {
            exit 0
        }
    }

    foreach ($PDF in $PDFS) {
        # Convert PDF to TIFF
        Write-Host $PDF.FullName -f red
        Convert-PDF_to_Tiff -pdfFile $PDF
    }
    Move-Item -Path "$($Img_Pdf2img_PathDirectory)\*.tif" -Destination "$($Img_Magic_PathDirectory)" -Force 
    Move-Item -Path "$($PDF_Tesseract_PathDirectory)\*.pdf" -Destination "$($Processed_Tesseract_PathDirectory)\pdf" -Force 
    ConvertFrom-Tiff_Format
    Convert-Img_To_Text 
    Move-Item -Path "$($Data_PathDirectory)\*.hocr" -Destination "$($Processed_Tesseract_PathDirectory)\hocr" -Force 
    Move-Item -Path "$($Img_Magic_PathDirectory)\*.tif" -Destination "$($Processed_Tesseract_PathDirectory)\tif" -Force 



    
    Get-ChildItem -Path $([String]($HOCR_Tesseract_PathDirectory)) | ForEach-Object {
        $_
        $file_hocr = $_.FullName  # Get the full path of the current HOCR file
        $hocr_data = $(Get-Content -Path $($file_hocr) -Raw)  # Read the content of the HOCR file
        $hocr_data -replace '</body>', $('<script src="https://unpkg.com/hocrjs"></script>' + "`n" + '</body>') | Set-Content $file_hocr
        $output = @()  # Initialize an array to store output data
        # Initialize variables

        $tableRows = @()
        $row = @()
        $_ | ForEach-Object { 
            $row += @"
            <td><a target='_blank' href='OCR/data/hocr/$($_.Name)'>File name: $($_.Name)]</a><br>
            <td><a target='_blank' href='C:/xampp/htdocs/NSU/OCR/data/processed/tif/$($_.Name -replace 'hocr','tif')'><b>Ver<b><br></td>
            <td><a target='_blank' href='C:/xampp/htdocs/NSU/OCR/data/processed/pdf/$($_.Name -replace 'pdf','tif')'><b>Ver<b><br></td>
            <td><li>$_.LastWriteTime<li></td>                                                        
"@
            
            $tableRows += "<tr>$($row)</tr>"
            $row = @()
            # Create and display the HTML table
            $htmlTable = "<table>$($tableRows -join '')</table>"

            Write-Output $htmlTable 
        }
    }

    # $Response = Send-InterfaceResponse -index $($index) -pdfFile $pdfFile `
    # HOCR_Tesseract_PathDirectory $HOCR_Tesseract_PathDirectory
    # Write-Output $Response
    # Move-Item -Path $((Join-Path -Path $PSScriptRoot -ChildPath $pdfFile)) -Destination $Processed_Tesseract_PathDirectory -Force

}
catch {
    # Handle any errors that occur during PDF file processing and provide error information
    Get-ErrorInfo $_
}

