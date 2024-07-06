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
    const timezone = document.getElementById('timezone').value;
    const [year, month, day] = PersonBirthday.split('-');
    const data = `${day}/${month}/${year}`;


    var select = document.getElementById("countries");
    var value = select.value; // Get the selected option value
    var coordinates = value.split(','); // Split the value into an array
    var latitude = coordinates[0]; // Get the latitude
    var longitude = coordinates[1]; // Get the longitude

    Yoga(data, time, latitude, longitude, timezone)
   
  });
  
    
  
  
  function Yoga(character, BirthTime, Lati, long, Tz) {
   
    const charUrl = 'https://api.vedicastroapi.com/v3-json/extended-horoscope/yoga-list';
    const MyParams = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "dob": character,
      "tob": BirthTime,
      "lat": Lati,
      "lon": long,
      "tz": Tz,
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
    .then(YugaData => {
       console.log('character Data Success:', YugaData);
      SendYogaList(YugaData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }
  
  function SendYogaList(YugaData) {
    const caption = document.getElementById('myCaption');
    const displaycap = document.getElementById('dispNum');
    const leadData = document.getElementById('NumberResault');

    caption.style.display = 'none';
    displaycap.style.display = 'flex';
    const letArray = YugaData.response.yogas_list;
    console.log(letArray);

leadData.innerHTML=''
let insideCountiner = `<span><h4>Resault for your personal yoga practice</h4><br>`

letArray.forEach((element, index) => {
    console.log(element.current_house);

     insideCountiner += `
<figcaption class="newStyle">
<div class="dividedInside">
<div> <h5>Yoga name: <span class="newColor" >${element.yoga} </span> </h5> </div> 
<div> <h5>Houses involved: <span class="newColor" >${element.houses_involved} </span> </h5> </div> 
<div><h5>Planets involved: <span class="newColor" >${element.planets_involved} </span> </h5></div>
<div><h5>Strength in percentage: <span class="newColor" >${element.strength_in_percentage} % </span> </div>
</div>
<div class="predeicted"><h5>Meaning: <span class="newColor" >${element.meaning} </span>  </div>
</figcaption><hr class="brLine">`
});
insideCountiner += `</span>`
leadData.innerHTML = insideCountiner;

    

  }


