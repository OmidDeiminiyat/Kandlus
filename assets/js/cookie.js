


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userEmail = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Sample credentials for demonstration purposes

  fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(NewReciData => {
    const Emails = userEmail;
    const checkEmail = NewReciData.filter(item => item.email === Emails);
    checkEmail.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
     console.log('Email is:' + checkEmail[0].email); // Do something with the fetched data
     if (Emails === checkEmail[0].email && password === checkEmail[0].Password) {
      onLoginSuccess()
         
      alert('Login successful!');
      // Redirect to another page or perform other actions here
  } else {
      errorMessage.textContent = 'Invalid username or password';
  }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
  console.log('cookie');
}

const users = 'Kandlus-users';
const code = 'omid@yahoo.com';
const Email = 'omid@yahoo.com';

// Example usage: Set the auth token when the user logs in


function onLoginSuccess(authToken) {
  setCookie(users, code, 3); // Set cookie for 3 days
}  


  // Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
      console.log('Cookie is:' + cookie.length);
    }
    return null;
  }
  
  function checkAutoLogin() {
    const authToken = getCookie('Kandlus-users');
    
    if (authToken) {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?email=eq.${authToken}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(dataAst => {
     //console.log(NewReciData); // Do something with the fetched data
     if (dataAst) {
        console.log(dataAst[0]);
        autoLoginUser(dataAst[0]);
     } else {
        // Token is invalid, delete the cookie
        setCookie('Kandlus-users', '', -1);
      }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    }
  }

  function autoLoginUser(user) {
    // Perform actions to log in the user, such as updating UI, storing user info in state, etc.
    console.log('User auto-logged in:', user.name);
    var sessionName = user.name;
    sessionStorage.setItem('User-name', sessionName);
    console.log('welcome:' + sessionName);
    const username = document.getElementById('username');
    username.innerText = 'Welcome: ' + sessionName;
    //const userExist = document.getElementById('right-s');
    // userExist.style.display = 'block';
 
  }
  document.addEventListener('DOMContentLoaded', checkAutoLogin);







  function letCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
    console.log('cookie');
  }
  
  const guest = 'Kandlus-guest';
  const guestCode = '8393';
  
  // Example usage: Set the auth token when the user logs in
  
  
  function guestVisit() {
    letCookie(guest, guestCode, 3); // Set cookie for 3 days
  }  


  guestVisit()

 