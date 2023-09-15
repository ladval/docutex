# Define the path to the configuration file
$configFilePath = Join-Path -Path $PSScriptRoot -ChildPath "config\config.json"
# Read the module paths from a JSON configuration file
# Check if the file exists before attempting to run it
if (Test-Path -Path $configFilePath -PathType Leaf) {
    # Read and convert the JSON configuration file into a PowerShell object
    $config = Get-Content -Path $configFilePath | ConvertFrom-Json
    # Import required PowerShell modules from the configuration with error handling
    foreach ($modulePath in $config.Modules) {
        . "$(Join-Path -Path $PSScriptRoot -ChildPath $modulePath)"
    }
}
else {
    # If the configuration file doesn't exist, show an error message and exit the script
    Write-Host "Config file not found: $configFilePath" -ForegroundColor Red
    exit 1
}

try {
    # Get a list of PDF files in the specified directory
    $pdfFiles = Get-ChildItem -Path $PDF_Tesseract_PathDirectory -File -Filter "*.pdf"
    if ($pdfFiles.Count -lt 1) {
        {
            # If there are no PDF files to process, display a message and exit
            Write-Host "No files left to process"
            exit 0
        }
    }

    # Check if there are PDF files to process
    for ($i = 1; $i -le $pdfFiles.Count; $i++) {
        $index = $i
        if ($pdfFiles.count -eq 1) {
            $pdfFile = $($pdfFiles.Name)
        }
        else {
            $pdfFile = $($pdfFiles.Name)[$i]
        }
        # Parameters for converting PDF to TIFF format
        
        # Convert PDF to TIFF
        $Tiff_File = Convert-PDF_to_Tiff @{ 
            $index                            = [String]$index
            pdfFile                           = [String]$pdfFile
            Pdf2Img_PathExe                   = [String]$Pdf2Img_PathExe
            Img_Pdf2img_PathDirectory         = [String]$Img_Pdf2img_PathDirectory
            PDF_Tesseract_PathDirectory       = [String]$PDF_Tesseract_PathDirectory
            Img_Tesseract_PathDirectory       = [String]$Img_Tesseract_PathDirectory
            Processed_Tesseract_PathDirectory = [String]$Processed_Tesseract_PathDirectory
        }
        # Convert TIFF to the desired format
        ConvertFrom-Tiff_Format -pdfFile $pdfFile `
            -ImageMagic_PathExe $ImageMagic_PathExe `
            -Img_Pdf2img_PathDirectory $Img_Pdf2img_PathDirectory `
            -Img_Tesseract_PathDirectory $Img_Tesseract_PathDirectory
        
        # Extract text from the image
        Convert-Img_To_Text -tiff_file $Tiff_File `
            -Tesseract_PathExe $Tesseract_PathExe `
            -HTML_Tesseract_PathDirectory $HTML_Tesseract_PathDirectory

        # Send the interface response
        $Response = Send-InterfaceResponse -pdfFile $pdfFile `
            -HOCR_Tesseract_PathDirectory $HOCR_Tesseract_PathDirectory
        Write-Host $Response -f Yellow
        
    }
}
catch {
    # Handle any errors that occur during PDF file processing and provide error information
    Get-ErrorInfo $_
}

