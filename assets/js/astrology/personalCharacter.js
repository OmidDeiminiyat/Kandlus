document.addEventListener('DOMContentLoaded', (event) => {
  const PersonBirthday = document.getElementById('pBirth');
  // Change date format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  
  PersonBirthday.value = `${year}-${month}-${day}`;
});

/*
document.getElementById('zodiacForm').addEventListener('submit', (event) => {
  event.preventDefault(); 

  const PersonBirthday = document.getElementById('pBirth').value;
  const time = document.getElementById('timeBirth').value;
  const countries = document.getElementById('countries').value;
  const [year, month, day] = PersonBirthday.split('-');
  const data = `${day}/${month}/${year}`;


  var select = document.getElementById("countries");
  var value = select.value; // Get the selected option value
  var coordinates = value.split(','); // Split the value into an array
  var latitude = coordinates[0]; // Get the latitude
  var longitude = coordinates[1]; // Get the longitude

character(data, time, latitude, longitude)
 
});
*/


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

  // Create the JSON object
  const userData = {
    Dates: Dates,
    time: time,
    latitude: latitude,
    longitude: longitude

  };

  // Send the JSON data to the backend (e.g., to control.php)
  const response = await fetch("../backend/astrology.php", {
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
    alert("Data submitted successfully!");
  } else {
    alert("There was an error submitting the data.");
  }
});


function CharacterDataSend(resivedCharacter) {
  const caption = document.getElementById('myCaption');
  const displaycap = document.getElementById('dispNum');
  const leadData = document.getElementById('NumberResault');

  caption.style.display = 'none';
  displaycap.style.display = 'flex';
  const letArray = resivedCharacter.response;
  console.log(letArray);

leadData.innerHTML=''
let insideCountiner = `<span><h4>Resault for your personal characteristics</h4><br>`

letArray.forEach((element, index) => {
  console.log(element.current_house);

   insideCountiner += `
<figcaption class="newStyle">
<div class="dividedInside">
<div> <h5>Current house is: <span class="newColor" >${element.current_house} </span> </h5> </div> 
<div><h5>Current zodiac is: <span class="newColor" >${element.current_zodiac} </span> </h5></div>
<div><h5>Location of the lord's house: <span class="newColor" >${element.lord_house_location} </span> </div>
<div><h5>Lord of the zodiac: <span class="newColor" >${element.lord_of_zodiac} </span>  </div>
<div><h5>The strength of lord: <span class="newColor" >${element.lord_strength} </span>  </div>
<div><h5>Lord zodiac location: <span class="newColor" >${element.lord_zodiac_location} </span>  </div>
<div><h5>Verbal location: <span class="newColor" >${element.verbal_location} </span>  </div>
</div>
<div class="predeicted"><h5>Personalised prediction: <span class="newColor" >${element.personalised_prediction} </span>  </div>
</figcaption><hr class="brLine">`
});
insideCountiner += `</span>`
leadData.innerHTML = insideCountiner;

  

}


