

  // Function to get a cookie by name
function getCookie(Name) {
    const nameEQ = Name + "=";
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
        console.log('Data Ast:' + dataAst[0]);
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
    const checkLogins = document.getElementById('checkLogin');
    checkLogins.style.display= 'none';

  }
  document.addEventListener('DOMContentLoaded', checkAutoLogin);
  checkAutoLogin()





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

 