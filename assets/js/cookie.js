// function to get cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;   

}
// set guest cookie if not exist
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires   
 = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";   
}

 // set new value for userCoockie
 function updateCookieExpiration(name, days) {
  var cookieValue = getCookie(name);
  if (cookieValue) {
    setCookie(name, cookieValue, days);
  }
}

async function fetchSubscribeData() {
  try {
      const response = await fetch('../backend/data.php');  // Call the PHP file
      const data = await response.json();

      const dataContainer = document.getElementById('data-container');
      const ExisCooki = getCookie('Kandlus-users');
      const filteredData = data.filter(item => item.Code === ExisCooki);
      if (filteredData != null) {
        autoLoginUser(filteredData[0]);
      } else {
        console.log('No data found or unexpected data format.');
      }  
  } catch (error) {
      console.error('Error fetching subscribe data:', error);
  }
}


const authToken = getCookie('Kandlus-users');
if (authToken) {
  fetchSubscribeData();
  updateCookieExpiration("Kandlus-users", 3);
  setCookie("user", "quest", -1);
} else {
  setCookie("user", "quest", 3);
}

const checkLogins = document.getElementById('checkLogin');
  const readPrices = document.getElementById('readPrice');
  const Users = document.getElementById('username');
  const Proof = document.getElementById('profiles');
  const showPoint = document.getElementById('currentP');
  const subPl = document.getElementById('subscriptionPlan');

  function autoLoginUser(user) {

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
    }  else if (sessionPlan == '9dyhf3Ds') {
      PlanW.innerText =  'Pro';
      showPoint.style.display = 'block';
    }

    PlanW.style.color = '#9A5C23';

  
  }


  function LogOut() {
    updateCookieExpiration("Kandlus-users", -1);
    sessionStorage.clear();   

    checkLogins.style.display= 'block';
    readPrices.style.display = 'block';
    Users.innerText = 'To use this service, you must have an account and choose a plan';
    Proof.style.display = 'none';
    // window.location.href = '../index.html';
  }

  

  