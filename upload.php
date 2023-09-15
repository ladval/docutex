<?php
$uploadDir = 'OCR/data/pdf/';
$uploadedFile = $uploadDir . basename($_FILES['fileToUpload']['name']);
$powerShellScript = 'C:\xampp\htdocs\NSU\OCR\main.ps1'; // Replace with the actual full path

if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $uploadedFile)) {
    $output = shell_exec("powershell.exe -executionpolicy bypass -File \"$powerShellScript\"");
    $response = ['success' => true, 'message' => $output];
} else {
    $response = ['success' => false, 'message' => 'Error uploading the file.'];
}

echo json_encode($response);
?>
