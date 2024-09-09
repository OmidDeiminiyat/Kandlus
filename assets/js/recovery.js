document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const formData = new FormData(this);

    // Send the data to the PHP script
    fetch('./../../ReCover.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
        document.getElementById('response').innerText = data; // Display the response
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
