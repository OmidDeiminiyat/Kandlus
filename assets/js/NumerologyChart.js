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
    
    const name = document.getElementById('name').value;
    const PersonBirthday = document.getElementById('pBirth').value;
    const time = document.getElementById('timeBirth').value;
    const countries = document.getElementById('countries').value;
    const timeZone = document.getElementById('timezone').value;
    const [year, month, day] = PersonBirthday.split('-');
    const data = `${day}/${month}/${year}`;


    var select = document.getElementById("countries");
    var value = select.value; // Get the selected option value
    var coordinates = value.split(','); // Split the value into an array
    var latitude = coordinates[0]; // Get the latitude
    var longitude = coordinates[1]; // Get the longitude

    character(data, time, latitude, longitude, timeZone, name)
   
  });
  
    
  
  
  function character(character, BirthTime, Lati, long, Tz, name) {
   
    const charUrl = 'https://api.vedicastroapi.com/v3-json/extended-horoscope/numero-table';
    const MyParams = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "name": name,
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
    .then(characterData => {
       console.log('table Data Success:', characterData);
      tableData(characterData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }

  function tableData(RecivedData) {
    const mynum = document.getElementById('dispNum');
    const reo = document.getElementById('displayNumber');
  
    reo.style.display = 'none';
    mynum.style.display = 'grid';
    const resRac = document.getElementById('NumberResault');
  
    const LetData = RecivedData;
    console.log(LetData.response);
    
    resRac.innerHTML = ''
    let insideElement = `<h4>Here is your numerology resault</h4><br>
    <figcaption class="letBeCaption">
    <div> <h5> Date Considered:<span class="circleDay" >${LetData.response.date_considered} </span> </h5></div>
    <div><h3> Radical ruler: <h5><span class="circleDay" >${LetData.response.radical_ruler} </span></h3> </h5></div> 
    <div><h3>Radical Number: <span class="circleDay" >${LetData.response.radical_number} </span> </h3></div>
    <div><h3>Neutral Number: <span class="circleDay" >${LetData.response.neutral_num} </span> </h3></div>
    <div><h3>Name Number: <span class="circleDay" >${LetData.response.name_number} </span> </h3></div>
    <div><h3>Friendly Number: <span class="circleDay" >${LetData.response.friendly_num} </span> </h3></div>
    <div><h3>Favorite Sttone: <span class="circleDay" >${LetData.response.fav_stone} </span> </h3></div>
    <div><h3>Favorite Substone: <span class="circleDay" >${LetData.response.fav_substone} </span> </h3></div>
    <div><h3>Favorite Metal: <span class="circleDay" >${LetData.response.fav_metal} </span> </h3></div>
    <div><h3>Favorite Day: <span class="circleDay" >${LetData.response.fav_day} </span> </h3></div>
    <div><h3>Favorite Mantra: <span class="circleDay" >${LetData.response.fav_mantra} </span> </h3></div>
    <div><h3>Favorite Color: <span class="circleDay" >${LetData.response.fav_color} </span> </h3></div>
    <div><h3>Evil Number: <span class="circleDay" >${LetData.response.evil_num} </span> </h3></div>
    <div><h3>Destiny Number: <span class="circleDay" >${LetData.response.destiny} </span> </h3></div>
    <div><h3>Your Characteristics(General): <span class="circleDay" >${LetData.response.characteristics} </span> </h3></div>
    </figcaption> <hr>`

    resRac.innerHTML = insideElement;



  }
  