function uploadFile() {
    const fileInput = document.getElementById('fileToUpload');
    const formData = new FormData();
    formData.append('fileToUpload', fileInput.files[0]);

    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'block'; // Show loading animation

    fetch('upload.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = data.message;
        resultDiv.style.display = 'block';

        loadingDiv.style.display = 'none'; // Hide loading animation
    })
    .catch(error => {
        console.error(error);
        loadingDiv.style.display = 'none'; // Hide loading animation on error
    });
}
