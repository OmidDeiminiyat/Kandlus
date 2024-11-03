document.addEventListener('DOMContentLoaded', (event) => {
    const PersonBirthday = document.getElementById('pBirth');
    // Change date format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    PersonBirthday.value = `${year}-${month}-${day}`;
  });
  
  
  document.getElementById("zodiacForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    const PersonBirthday = document.getElementById('pBirth').value;
    const time = document.getElementById('timeBirth').value;
    const countries = document.getElementById('countries').value;
    const [year, month, day] = PersonBirthday.split('-');
    const Dates = `${day}/${month}/${year}`;
  
  
    var select = document.getElementById("countries");
    var value = select.value; // Get the selected option value
    var coordinates = value.split(','); // Split the value into an array
    var latitude = coordinates[0]; // Get the latitude
    var longitude = coordinates[1]; // Get the longitude
  

    const userData = {
      Dates: Dates,
      time: time,
      latitude: latitude,
      longitude: longitude,
    };
  
    // Send the JSON data to the backend (e.g., to control.php)
    const response = await fetch("../backend/ascendant.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // Convert the userData object to JSON format
    });
  
    // Handle the response from the server
    const result = await response.json(); // Assuming the backend sends JSON back
    console.log(result);
    CharacterDataSend(result)
    if (result.success) {
      //console.log('');
      
    } else {
      
    }
  });
  
  
  function CharacterDataSend(recivedAscendant) {
    
    const DataL = recivedAscendant.characterData.response;
    console.log(DataL);
    
  
    typewriter('First, remember that at the time and place of your birth, each of the planets was in the house of one of the zodiac signs. And since these have a direct impact on human personality, there are between 7 and 12 possibilities that together form your overall personality. In some cases, a person may have two personalities. Here are all the possibilities in order according to the presence of each planet in each house. Notice that:The most important issue in every house is the lord strength. Because it determines the degree of formation of a person personality compared to other 11 houses.', 12); 
  
  }
  
  
  
  
  function typewriter(text, speed) {
    let index = 0; 
    const IntroText = document.getElementById('introPer');
    IntroText.innerText = '';
    function type() {
        if (index < text.length) {
          IntroText.textContent += text.charAt(index); 
            index++; 
            setTimeout(type, speed); 
        }
    }
  
    type(); // Start typing
  }