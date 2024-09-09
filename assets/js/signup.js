function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  
  return crypto.subtle.digest('SHA-256', data).then(function(hashBuffer) {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  });
}

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = document.getElementById('userForm');
  const username = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const chepa = document.getElementById('password').value;
  const ChPEr = document.getElementById('checkPass').value;

  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const CheckBox = document.getElementById('exampleCheckbox1');
  const CheckErr = document.getElementById('checkBox-error');
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

  if (chepa !== ChPEr) {
    confirmErr.textContent = 'Passwords do not match. Try again.';
    valid = false;
  } else {
    confirmErr.textContent = '';
  }

  if (!CheckBox.checked) {
    CheckErr.textContent = 'Terms and conditions must be read and agreed to.';
    valid = false;
  } else {
    console.log('Checkbox checked');
  }

  if (valid) {
    // Chain the hashPassword function using Promises
    hashPassword(chepa).then(function(passwordInput) {
      return hashPassword(ChPEr).then(function(checkPass) {
        const Emails = emailInput.value;
        console.log(Emails);

        // Fetch to Supabase
        return fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?email=eq.${Emails}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
          }
        }).then(function(response) {
          return response.json();
        }).then(function(dataAst) {
          console.log(dataAst.length);
          if (dataAst.length === 0) {
            newUser(username.value, emailInput.value, passwordInput);
            console.log('Email not exist');
            form.style.display = 'none';
          } else {
            console.log(dataAst);
            
            console.log('Email already exists' + emailInput.value);
            emailError.textContent = 'Email is already in use.';
          }
        }).catch(function(error) {
          console.error('Error fetching data:', error);
        });
      });
    }).catch(function(error) {
      console.error('Error hashing password:', error);
    });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,12}$/;
  return re.test(password);
}

document.addEventListener('DOMContentLoaded', function(event) {
  const form = document.getElementById('userForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const checkPass = document.getElementById('checkPass').value;
    
    console.log(name);
    newUser();
  });
});

import insertIntoSubscribeTable from './controller/insertSubscribe.js';
function newUser(userN, userE, pas) {
  const letGenerate = userN.length * 21 + userE.length * 38 + pas.length / 3 * 18;
  const generated = userN + letGenerate;
  setCookie('Kandlus-users', generated, 3);
  console.log(generated);
  const newData = {
    name: userN,
    email: userE,
    Code: generated,
    Password: pas,
  };
  
  insertIntoSubscribeTable(newData);
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
  console.log('cookie set');
  // window.location.href = 'price.html';
}
