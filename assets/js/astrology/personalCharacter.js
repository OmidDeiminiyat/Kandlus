function calculateInfo() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    if (!birthDate.getTime()) {
        alert('Please select a valid birth date!');
        return;
    }

    // Calculate zodiac sign based on the birthday
    const zodiacSign = getZodiacSign(birthDate);
    document.getElementById('zodiacSign').textContent = `Your Zodiac Sign: ${zodiacSign}`;

    // Calculate planetary positions based on the birth date
    const planetPositions = getPlanetaryPositions(birthDate);
    displayPlanetPositions(planetPositions);

    // Draw the solar system
    drawSolarSystem(planetPositions);
}

function getZodiacSign(date) {
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
}

function getPlanetaryPositions(birthDate) {
    // Use a simple formula based on the birth date for demonstration
    const basePositions = {
        Mercury: 0,
        Venus: 72,
        Earth: 144,
        Mars: 216,
        Jupiter: 288,
        Saturn: 360,
        Uranus: 432,
        Neptune: 504
    };

    // Calculate positions based on birth date (this is a simplified model)
    const daysSinceEpoch = Math.floor((birthDate - new Date(1970, 0, 1)) / (1000 * 60 * 60 * 24));
    
    const positions = {};
    for (const [planet, angle] of Object.entries(basePositions)) {
        positions[planet] = (angle + daysSinceEpoch * 0.1) % 360; // Modulus to wrap around 360°
    }

    return positions;
}

function displayPlanetPositions(positions) {
    const planetPositionsList = document.getElementById('planetPositions');
    planetPositionsList.innerHTML = ''; // Clear previous results

    for (const [planet, position] of Object.entries(positions)) {
        const li = document.createElement('li');
        li.textContent = `${planet}: ${position.toFixed(2)}°`;
        planetPositionsList.appendChild(li);
    }
}

function drawSolarSystem(positions) {
    const canvas = document.getElementById('solarCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2); // Move origin to center

    // Draw the Sun
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

    // Draw each planet
    const scale = 0.5; // Scaling factor for the orbits
    const planetColors = {
        Mercury: 'gray',
        Venus: 'orange',
        Earth: 'blue',
        Mars: 'red',
        Jupiter: 'brown',
        Saturn: 'gold',
        Uranus: 'lightblue',
        Neptune: 'darkblue'
    };

    for (const [planet, angle] of Object.entries(positions)) {
        const radius = (Object.keys(positions).indexOf(planet) + 1) * 40; // Adjusting radius for each planet
        const x = radius * Math.cos(angle * (Math.PI / 180)) * scale; // X position
        const y = radius * Math.sin(angle * (Math.PI / 180)) * scale; // Y position

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = planetColors[planet];
        ctx.fill();
        ctx.stroke();
    }
}



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


