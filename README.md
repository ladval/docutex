# D.o.c.u.t.e.x
## Document OCR Utility for Text Extraction 

# Student Grade Extraction and Validation System

## Objective
The objective of this project was to design and implement a system for extracting and validating student grades and information from scanned PDF reports. The system utilizes Optical Character Recognition (OCR) technology to accurately extract data, followed by validation processes to ensure data integrity and correctness.

## Steps and Technologies Used

### Selecting OCR Technology
- Tesseract OCR engine was chosen for performing OCR reading of scanned PDF files.
- Transformation of PDFs into TIFF images was opted for the following reasons:
  - TIFF format is widely supported and recognized.
  - TIFF images preserve high-quality data, which is crucial for accurate OCR.
  - Tesseract OCR performs exceptionally well with TIFF images due to their clarity and high resolution.

### pdf2image Package
- The pdf2image package, a Python library, was employed to convert PDF documents into TIFF image files.
- Key features:
  - Simplified conversion process.
  - Batch processing of multiple PDF files for improved efficiency.

### Image Enhancement Using ImageMagick
- ImageMagick software with the '-K' option was used to enhance image quality:
  - Increased image resolution.
  - Adjusted contrast and brightness.
  - Sharpened images for better OCR results.
- Example ImageMagick commands provided for reference.

### Tesseract OCR for Data Extraction
- Tesseract OCR was selected as the primary OCR package due to its robust performance and reputation.
- Tesseract utilizes neural networks that continuously learn and improve, resulting in high accuracy.
- The neural network-based approach of Tesseract excels in positional extraction for precise data retrieval.

### Backend Operations with PowerShell 5
- All main backend operations, including file handling, automation, and data processing, were carried out using PowerShell 5.
- Advantages of PowerShell 5 highlighted:
  - Cross-Platform Compatibility.
  - Active Community and Support.
  - Scripting Capabilities.
  - Security Features.
  - Scalability.

### User-Friendly Interface
- A user-friendly interface was developed using PHP, JavaScript, CSS, and HTML.
- Key features of the interface include:
  - Ability to upload single or multiple PDF files.
  - Access to extracted data through a JavaScript framework.
  - Clean and intuitive design for user convenience.

### Open Source and Free Tools
- The project embraced open-source technologies, ensuring cost-effectiveness and accessibility.
- Technologies used, including Tesseract OCR, ImageMagick, pdf2image, PowerShell 5, PHP, JavaScript, CSS, and HTML, are freely available and open source.

## Conclusion
The Student Grade Extraction and Validation System showcase the capabilities of an individual developer in harnessing open-source tools and modern technologies to extract and validate student grades from scanned PDF reports. The project demonstrates the proficiency of using Tesseract OCR, ImageMagick, and PowerShell 5 to create a precise, usable, and cost-effective solution.

