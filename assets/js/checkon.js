let KCcoins = JSON.parse(localStorage.getItem('KC'));

const userOn = getCookie('Kandlus-users');
var sessionOn = sessionStorage.getItem('Plan');
if (KCcoins) {
    IncrPoint(KCcoins)
   
    localStorage.removeItem('KC');
} else if (!userOn || sessionOn == '99etB637s') {
    window.location.href = '../price.html';
} else {
    console.log('All is ok'); }



    import TimeCheck from '../js/controller/incrP.js';

    function recordTimeSpent(Code, TimeSpend){
    
      const seo = Code;
    const updatedData = { TimeSpend: TimeSpend};
    
    TimeCheck(seo, updatedData);
    
    }



function IncrPoint(Points) {
  var userCode = getCookie('Kandlus-users');
    fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${userCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
        }
      })
      .then(response => response.json())
      .then(Datas => {
         //console.log(NewReciData); // Do something with the fetched data
         if (Datas) {
            callIncreas(userCode, Datas, Points)
            // recordTimeSpent(plan, countData[0]);
         } else {
            // Token is invalid, delete the cookie
            setCookie('Kandlus-users', '', -1);
          }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
        }

        

        function callIncreas(codes, items, NewPoint) {
           
           const NPoin = items[0].TimeSpend - NewPoint; 
            console.log('New test:' + NPoin);

            recordTimeSpent(codes, NPoin);

        }

        