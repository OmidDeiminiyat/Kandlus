document.addEventListener('DOMContentLoaded', (event) => {
    const PersonBirthday = document.getElementById('pBirth');
    // Change date format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    PersonBirthday.value = `${year}-${month}-${day}`;
  });
  
  document.getElementById('newForm').addEventListener('submit', (event) => {
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
  
    
  
  
  function character(character, BirthTime, Lati, long) {
   
    const charUrl = 'https://api.vedicastroapi.com/v3-json/horoscope/personal-characteristics';
    const MyParams = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "dob": character,
      "tob": BirthTime,
      "lat": Lati,
      "lon": long,
      "tz": "0",
      "lang": "en"
    });
    
    fetch(`${charUrl}?${MyParams.toString()}`, {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(characterData => {
       console.log('character Data Success:', characterData);
      CharacterDataSend(characterData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }
  
  function CharacterDataSend(resivedCharacter) {
    const caption = document.getElementById('myCaption');
    const displaycap = document.getElementById('dispNum');
    const leadData = document.getElementById('NumberResault');

    caption.style.display = 'none';
    displaycap.style.display = 'flex';
    const letArray = resivedCharacter.response;
    console.log(letArray);

leadData.innerHTML=''
let insideCountiner = `<span><h4>Here is your personal characteristics</h4><br>`

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


