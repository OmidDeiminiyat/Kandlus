
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const newEmail = document.getElementById('Email').value;
    const getPass = document.getElementById('password').value;
    const passed = await hashPassword(getPass);
    const errorMessage = document.getElementById('errorMessage');
    console.log(newEmail);
    console.log(passed);
  
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
      const Emails = newEmail;
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
       if (Emails === checkEmail[0].email && passed === checkEmail[0].Password) {
        onLoginSuccess('Kandlus-users', checkEmail[0].Code, 3 )
           
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
    window.location.href = 'index.html';

  }
  
  // const users = 'Kandlus-users';
  // const code = 'omid@yahoo.com';
  // const Email = 'omid@yahoo.com';
  
  // Example usage: Set the auth token when the user logs in
  
  
  function onLoginSuccess(dataOne, DataTwo, DataThree) {
    const users = dataOne;
    const code = DataTwo;
    const Duration = DataThree;
    setCookie(users, code, Duration); // Set cookie for 3 days
  }  
  