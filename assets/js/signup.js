// main.js
document.addEventListener('DOMContentLoaded', (event) => {

  const form = document.getElementById('userForm');
  const username = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const checkPass = document.getElementById('checkPass');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const CheckBox = document.getElementById('exampleCheckbox1');
  const CheckErr = document.getElementById('checkBox-error');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      let valid = true;

      if (!validateEmail(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address.';
          valid = false;
      } else {
          emailError.textContent = ''; // Clear any previous error message
      }

      if (!validatePassword(passwordInput.value)) {
          passwordError.textContent = 'Password must be 9-12 characters long, including at least one number, one lowercase letter, and one uppercase letter.';
          valid = false;
      } else {
          passwordError.textContent = ''; // Clear any previous error message
      }
      if (passwordInput.value != checkPass.value) {
        passwordError.textContent = 'Passwords are not match. try again'
        valid = false;
      } else {
        passwordError.textContent = '';
      } 
      if (!CheckBox.checked) {
        CheckErr.textContent = 'Terms and conditions must be read and agree';
        valid = false;
      }  else {
        console.log('not checked');
      }

      if (valid) {
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
      newUser(username.value, emailInput.value, passwordInput.value);
      console.log('Email not exist');
      form.style.display = 'none';
     } else {
        // Token is invalid, delete the cookie
        console.log('Email already exist');
        emailError.textContent = 'Email is already exist.';
      }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
      
      }
  });
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


/*
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('userForm');
  
  

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
      const checkPass = document.getElementById('checkPass').value;

      console.log(name);
      newUser();
  });
});
*/


import insertIntoSubscribeTable from './controller/insertSubscribe.js';
function newUser(userN, userE, pas) {
  // Your newUser function logic here
  const letGenerate = userN.length * 21 + userE.length * 38 + pas.length / 3 * 18;
  const generated = userN + letGenerate;
  setCookie('Kandlus-users', generated, 3 )
  console.log(generated);
  const newData = {
    name: userN,
    email: userE,
    Code: generated,
    Password: pas,
    
    // Add other necessary fields here
  };
  
  insertIntoSubscribeTable(newData);

}



function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
  console.log('cookie');
  window.location.href = 'Price.html';

}

// const users = 'Kandlus-users';
// const code = 'omid@yahoo.com';
// const Email = 'omid@yahoo.com';

// Example usage: Set the auth token when the user logs in


