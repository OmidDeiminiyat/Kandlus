
checkAutoLogin()

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
      console.log('second:' + dataAst);
        callForUpdate(dataAst[0]);
        sessionStorage.setItem('Plan', '99etB637s');
     } else {
        // Token is invalid, delete the cookie
        setCookie('Kandlus-users', '', -1);
        secondList()
      }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    }
  }

  import updateSubscribeTable from './controller/updateSubscribe.js';

  function callForUpdate(UserData){

    
    const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear() + 1;
const fulDate = day + '. ' + month + '. ' + year;

    const Code = UserData.Code;
  const updatedData = { Plan: '99etB637s', subscribeData: fulDate };
  
  updateSubscribeTable(Code, updatedData);

  }
  


  