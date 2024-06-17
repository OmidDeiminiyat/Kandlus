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

    ascend(data, time, latitude, longitude)
   
  });
  
    
  
  
  function ascend(character, BirthTime, Lati, long) {
   
    const charUrl = 'https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report';
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
    .then(ascendData => {
       console.log('character Data Success:', ascendData);
      ascendantData(ascendData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }
  
  function ascendantData(recivedAsce) {
    const caption = document.getElementById('myCaption');
    const displaycap = document.getElementById('ascend');
    const insiPut = document.getElementById('insidAscend');

    caption.style.display = 'none';
    displaycap.style.display = 'flex';
    const letArray = recivedAsce.response;
    console.log(letArray);

insiPut.innerHTML=''
let insideCountiner = `<span><h4>Here is your ascendant</h4><br>`

letArray.forEach((element, index) => {
    console.log(element.ascendant);

     insideCountiner += `
<figcaption class="newStyle">
<div class="dividedInside">
<div> <h5>Ascendant: <span class="newColor" >${element.ascendant} </span> </h5> </div> 
<div><h5>Ascendant lord: <span class="newColor" >${element.ascendant_lord} </span> </h5></div>
<div><h5>Ascendant lord house location: <span class="newColor" >${element.ascendant_lord_house_location} </span> </div>
<div><h5>Ascendant lord location: <span class="newColor" >${element.ascendant_lord_location} </span>  </div>
<div><h5>Ascendant lord astrength: <span class="newColor" >${element.ascendant_lord_strength} </span>  </div>
<div><h5>Bad qualities: <span class="newColor" >${element.bad_qualities} </span>  </div>
<div><h5>Day for fasting: <span class="newColor" >${element.day_for_fasting} </span>  </div>
<div><h5>Lucky gem: <span class="newColor" >${element.lucky_gem} </span>  </div>
<div><h5>Symbol: <span class="newColor" >${element.symbol} </span>  </div>
<div><h5>Zodiac characteristics: <span class="newColor" >${element.zodiac_characteristics} </span>  </div>
</div>
<div class="Verbal location"><h5>Personalised prediction: <span class="newColor" >${element.verbal_location} </span>  </div>
<div class="Flagship qualities"><h5>Personalised prediction: <span class="newColor" >${element.flagship_qualities} </span>  </div>
<div class="gayatri_mantra"><h5>Personalised prediction: <span class="newColor" >${element.gayatri_mantra} </span>  </div>
<div class="General prediction"><h5>Personalised prediction: <span class="newColor" >${element.general_prediction} </span>  </div>
<div class="personalised_prediction"><h5>Personalised prediction: <span class="newColor" >${element.personalised_prediction} </span>  </div>
<div class="spirituality_advice"><h5>Personalised prediction: <span class="newColor" >${element.spirituality_advice} </span>  </div>
</figcaption><hr>`
});
insideCountiner += `</span>`
insiPut.innerHTML = insideCountiner;

    

  }


