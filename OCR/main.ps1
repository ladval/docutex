


# Set the supported security protocols to TLS 1.2[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$configFilePath = Join-Path -Path $PSScriptRoot -ChildPath "config\config.json"
$Global:config = Get-Content -Path $configFilePath | ConvertFrom-Json 

# Check if the configuration file exists before attempting to read it
if (Test-Path -Path $configFilePath -PathType Leaf) {   
    $Global:config = Get-Content -Path $configFilePath | ConvertFrom-Json
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

$PDFS = Get-ChildItem -Path $PDF_Tesseract_PathDirectory -File -Filter "*.pdf"
if ($PDFS.Count -lt 1) {
    Write-Host "<pre>No files were found</pre>" -f red
    exit 0
}
foreach ($PDF in $PDFS) {
    # Convert PDF to TIFF
    Convert-PDF_to_Tiff -pdfFile "$($PDF)"
}
Move-Item -Path "$($Img_Pdf2img_PathDirectory)\*.tif" -Destination "$($Img_Magic_PathDirectory)" -Force 
ConvertFrom-Tiff_Format
Move-Item -Path "$($PDF_Tesseract_PathDirectory)\*.pdf" -Destination "$($Processed_Tesseract_PathDirectory)\pdf" -Force 
Convert-Img_To_Text 
Move-Item -Path "$($Data_PathDirectory)\*.hocr" -Destination "$($Processed_Tesseract_PathDirectory)\hocr" -Force 
Move-Item -Path "$($Img_Magic_PathDirectory)\*.tif" -Destination "$($Processed_Tesseract_PathDirectory)\tif" -Force 
Write-Host $(Send-InterfaceResponse)



