
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
    const ErrorEm = document.getElementById('errorEmail');
    fetchSubscribeData(newEmail, passed)
  });

  async function fetchSubscribeData(recivedMail, nPass) {
    try {
        const response = await fetch('backend/data.php');  // Call the PHP file
        const data = await response.json();
        const filteredData = data.filter(item => item.email === recivedMail);        
        if (filteredData != '' && filteredData[0].email === recivedMail && filteredData[0].Password === nPass) {
          onLoginSuccess('Kandlus-users', filteredData[0].Code, 3 )          
        } else {
          errorMessage.textContent = 'Invalid email or password, try again';
        } 
          
    } catch (error) {
        console.error('Error fetching subscribe data:', error);
    }
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
    window.location.href = 'index.html';

  }
    
  function onLoginSuccess(dataOne, DataTwo, DataThree) {
    const users = dataOne;
    const code = DataTwo;
    const Duration = DataThree;
    setCookie(users, code, Duration); // Set cookie for 3 days
  }  
  
  