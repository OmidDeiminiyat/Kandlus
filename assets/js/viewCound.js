
 
var url = window.location.search.substring(1);
var vars = url.split("=");
const currentID = vars[1];
if (!currentID) {
    console.error("ID is null or empty. Make sure the 'id' parameter is provided in the URL.");
    // Optionally, you can add code here to handle this case, such as displaying an error message to the user
  } else {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?seo=eq.${currentID}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(currentData => {
console.log("my counter is:" + currentData[0].score);
myCounter(currentData)
})
.catch(error => {
  console.error('Error fetching data:', error);
});

  }

// Function to increment the page view count in Supabase
async function myCounter(newDa) {
    const currentCount = newDa[0].score;
    console.log('count is:' + currentCount);
    const newCount = currentCount + 1;
    callForUpdate(newDa[0].seo, newCount)
}

import counterLoad from '../js/controller/pageViewCount.js';

function callForUpdate(linked, counted){
 console.log('linked is:' + linked);
  const seo = linked;
const updatedData = { score: counted };

counterLoad(seo, updatedData);

}



