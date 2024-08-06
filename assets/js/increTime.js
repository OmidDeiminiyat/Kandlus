import TimeCheck from '../js/controller/TimeUpdate.js';

function recordTimeSpent(Code, TimeSpend, newZ){

  const seo = Code;
const updatedData = { TimeSpend: TimeSpend, date: newZ};

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
            justtest(plan, countData)
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

      

    
// Format the time as a string
        

        function justtest(codes, items) {

          let points = items[0].TimeSpend;
          if (hours > newH) {
            points = items[0].TimeSpend - serviceAm; 
            recordTimeSpent(codes, points, hours);
            
          } 

        }