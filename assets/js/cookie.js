async function fetchSubscribeData() {
  try {
      const response = await fetch('./../../backend/data.php');  // Call the PHP file
      const data = await response.json();      
      const filteredData = data.filter(item => item.Code === 'Omid938xd');
      if (Array.isArray(filteredData)) {
          filteredData.forEach(item => {
             console.log('php data:' + item);
             
          });
      } else {
          dataContainer.innerHTML = '<p>No data found or unexpected data format.</p>';
      }
  } catch (error) {
      console.error('Error fetching subscribe data:', error);
  }
}

// Fetch the data on page load
fetchSubscribeData();




 
 // Function to get a cookie by name
function getCookie(Name) {
    const nameEQ = Name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
      // console.log('Cookie is:' + cookie.length);
    }
    return null;
  }
  
  function checkAutoLogin() {
    const authToken = getCookie('Kandlus-users');
   
    if (authToken) {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${authToken}`, {
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
        
        autoLoginUser(dataAst[0]);
        guestVisit()
     } else {
        // Token is invalid, delete the cookie
        setCookie('Kandlus-users', '', -1);
      }
  })
  .catch(error => {
   // console.error('Error fetching data:', error);
  });
    } 
  }
  const checkLogins = document.getElementById('checkLogin');
  const readPrices = document.getElementById('readPrice');
  const Users = document.getElementById('username');
  const Proof = document.getElementById('profiles');
  const showPoint = document.getElementById('currentP');
  const chPoints = document.getElementById('wPoint');
  const subPl = document.getElementById('subscriptionPlan');
  function autoLoginUser(user) {
    console.log('Statues is:' + user.subscribeData);
    if (user.planStatus == 'Cancel') {
      showPoint.innerText = 'Your subscription plan will be canceled on:' + ' ' + user.subscribeData;
      subPl.style.display = 'none';
    } else {
      showPoint.innerText = 'Renew plan on:' + ' ' + user.subscribeData;
    }
    
    var sessionName = user.name;
    var sessionPlan = user.Plan;
    sessionStorage.setItem('User-name', sessionName);
    sessionStorage.setItem('Plan', sessionPlan);
    
    Users.innerText = 'Welcome to Kandlus : ' + sessionName;
    const checkLogins = document.getElementById('checkLogin');
    checkLogins.style.display= 'none';
    
    readPrices.style.display = 'none';
    
    Proof.style.display = 'block';

    const PlanW = document.getElementById('Wplan');
    if (sessionPlan == '99etB637s') {
      PlanW.innerText =  'Basic';
      
    } else if (sessionPlan == '663idsmS98pR') {
      PlanW.innerText =  'Standard';
      showPoint.style.display = 'block';
      chPoints.style.display = 'none';
    }  else if (sessionPlan == '9dyhf3Ds') {
      PlanW.innerText =  'Pro';
      showPoint.style.display = 'block';
      chPoints.style.display = 'none';
    }

    PlanW.style.color = '#9A5C23';

    const first = document.getElementById('firstOffer');
   
    const mySecond = document.getElementById('seconOffer');
   showPoint.innerText = 'Current Point:' + ' ' + user.TimeSpend;
   if (user.TimeSpend > 2) {
     first.style.display = 'block';
   } if (user.TimeSpend > 3) {
    mySecond.style.display = 'block';
   }

  }
  document.addEventListener('DOMContentLoaded', checkAutoLogin);
  checkAutoLogin()



  function letCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;Secure;SameSite=Strict";
    
  }
  
  const guest = 'Kandlus-guest';
  const guestCode = '8393';
  
  // Example usage: Set the auth token when the user logs in
  
  
  function guestVisit() {
    letCookie(guest, guestCode, 3); // Set cookie for 3 days
  }  


 


  function LogOut() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
    sessionStorage.clear();   

    checkLogins.style.display= 'block';
    readPrices.style.display = 'block';
    Users.innerText = 'To use this service, you must have an account and choose a plan';
    Proof.style.display = 'none';
    // window.location.href = '../index.html';
  }

  

  