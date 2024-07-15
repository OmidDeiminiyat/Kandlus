import TimeCheck from '../js/controller/TimeUpdate.js';

function recordTimeSpent(Code, TimeSpend, newTime){

  const seo = Code;
const updatedData = { TimeSpend: TimeSpend, date: newTime};

TimeCheck(seo, updatedData);

}

var plan = getCookie('Kandlus-users');
if (plan) {
    fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${plan}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
        }
      })
      .then(response => response.json())
      .then(countData => {
         //console.log(NewReciData); // Do something with the fetched data
         if (countData) {
            justtest(plan, countData, countData[0].date)
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

        // Create a new Date object
    let currentDate = new Date();
    let hours = currentDate.getHours()+1;
    let newhours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
// Format the time as a string
   


        function justtest(codes, items, saat) {

            var currentTime = `${hours}:${minutes}:${seconds}`;
            var normalhours = `${newhours}:${minutes}:${seconds}`;

            const viewed = items[0].TimeSpend;
            const calcul = viewed + 1; 
            if (saat < normalhours) {
                recordTimeSpent(codes, calcul, currentTime);
            }   
        }