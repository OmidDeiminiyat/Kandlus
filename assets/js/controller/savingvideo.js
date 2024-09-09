const videoCa = document.getElementById('callsaveVideo');


const UserCode = getCookie('Kandlus-users');
videoCa.addEventListener("click", () => {
  const SendErlog = document.getElementById('changeSaves');
  const articleId = sessionStorage.getItem("ArtId");
  if (UserCode) {
    callForUpdate(UserCode, articleId)
    SendErlog.innerHTML = '<p> Article saved in your library section </p>';
  } else {
    SendErlog.innerHTML = '<p> Dear user, You must be logged in to save articles </p>';
  }
   
  });

function callForUpdate(tests, articleId) {
  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${tests}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(data => {
    makeChane(data, articleId);
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
    }
   
    function makeChane(RecivedData, ArtCode) {
         let currentvidos = RecivedData[0].savedVideos || []
       

        console.log(currentvidos);
        const newId = ArtCode;
        console.log(ArtCode);
        let testId = '0';
        if (currentvidos == '') {
             testId = newId;
        } else {
            testId = currentvidos + ', ' + newId;
        }
  
        // currentArticleIds.push(newId);

        RecivedData.forEach((items, index) => {
            const userCode = items.Code;

            
            const updatedData = {savedVideos: testId};
            if (testId != '') {
            callDatabase(userCode, updatedData)
            }
    
        })
        
    }

// updateSubscribe.js
const SUPABASE_URL = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';

async function callDatabase(Code, updatedData) {
    console.log('Code is:' + Code);
  const endpoint = `${SUPABASE_URL}/rest/v1/Subscribe?Code=eq.${Code}`;

  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${response.status} - ${errorDetails.message}`);
    }

    const responseText = await response.text(); // Read response as text
    if (responseText) {
      const data = JSON.parse(responseText); // Parse text to JSON if not empty
      console.log('Update successful:', data);
    } else {
      console.log('Update successful: No content returned');
    }
  } catch (error) {
    console.error('Error updating subscribe table:', error.message);
  }
}





