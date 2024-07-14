
// Current date and time
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(); // Gets the date in the local format
    const time = now.toLocaleTimeString(); // Gets the time in the local format

     document.getElementById('date').innerHTML = `Current Date: ${date}`;
     document.getElementById('times').innerHTML = `Current Time: ${time}`;
  }
  
  // Call the function to display the date and time when the page loads
  getCurrentDateTime();
  
  // Optional: Update the date and time every second
  setInterval(getCurrentDateTime, 1000);
  
  