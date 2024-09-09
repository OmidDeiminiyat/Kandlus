
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  
  
  document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = document.getElementById('userForm');
    const emailInput = document.getElementById('email');
    const chepa = document.getElementById('password').value;
    
    const ChPEr = document.getElementById('checkPass').value;
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmErr = document.getElementById('con-Err');
  
  
        let valid = true;
  
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = ''; // Clear any previous error message
        }
  
        if (!validatePassword(chepa)) {
            passwordError.textContent = 'Password must be 9-12 characters long, including at least one number, one lowercase letter, and one uppercase letter.';
            valid = false;
        } else {
            passwordError.textContent = ''; // Clear any previous error message
        }
        if (chepa != ChPEr) {
          confirmErr.textContent = 'Passwords are not match. try again'
          valid = false;
        } else {
          confirmErr.textContent = '';
        } 

        if (valid) {
          const passwordInput = await hashPassword(chepa);
          const checkPass = await hashPassword(ChPEr);
          const Emails = emailInput.value;
          console.log(Emails);
  
  
          fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?email=eq.${Emails}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
      }
    })
    .then(response => response.json())
    .then(dataAst => {
      console.log(dataAst.length);
       //console.log(NewReciData); // Do something with the fetched data
       if (dataAst.length === 0) {
        emailError.textContent = 'Sorry we cannot find your email.';
       } else {
          // Token is invalid, delete the cookie
          newUser(emailInput.value, passwordInput);
          form.style.display = 'none';
          const info = document.getElementById('AllInfo');
          info.innerText = 'Your password has been successfully changed.';
          const ChangedAllr = document.getElementById('changeds');
        ChangedAllr.innerText = 'Password Changed';
          const logsLink = document.getElementById('linkToLog');
          logsLink.innerHTML = `<div class="text-muted text-center">You have to log in with your new password <a href="login.html">log in now</a></div>`
        }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
        
        }
    });
  
  
  function validateEmail(email) {
    // Regular expression for validating an Email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePassword(password) {
    // Regular expression for validating a Password
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,12}$/;
    return re.test(password);
  }
  
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('userForm');
    
    
  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const checkPass = document.getElementById('checkPass').value;
  
        console.log(email, pass);
    });
  });
  
  
  
  import updateuserPass from './controller/updatePass.js';
  function newUser(userE, pas) {
    // Your newUser function logic here
    const newData = {
      Password: pas
      // Add other necessary fields here
    };
    
    updateuserPass(userE, newData);
  
  }
  
  
  
  // const users = 'Kandlus-users';
  // const code = 'omid@yahoo.com';
  // const Email = 'omid@yahoo.com';
  
  // Example usage: Set the auth token when the user logs in
  
  
  


  
