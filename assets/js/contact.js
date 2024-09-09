document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById('formError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formError').textContent = 'All fields are required.';
        return;
    }

    // Email validation (simple regex)
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('formError').textContent = 'Please enter a valid email address.';
        return;
    }

    // Additional validation to prevent XSS (Cross-site Scripting)
    const pattern = /<|>|script|alert|onerror|onload|eval/i;
    if (pattern.test(name) || pattern.test(message)) {
        document.getElementById('formError').textContent = 'Invalid input detected. Please avoid using special characters.';
        return;
    }

    // Prepare data to send to the server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the data to the server using fetch API
    fetch('./../../contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        document.getElementById('formSuccess').textContent = 'Thank you for the message. Your message has been sent successfully. It may take a few hours to respond to your message. You will receive the answer in your email.';
        document.getElementById('contactForm').style.display = 'none'; // Reset the form
    })
    .catch(error => {
        document.getElementById('formError').textContent = 'There was an error submitting the form. Please try again.';
    });
});

