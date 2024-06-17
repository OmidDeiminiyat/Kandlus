  // personal day number
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

  const [year, month, day] = PersonBirthday.split('-');
  const dayFetched = `${day}/${month}/${year}`;
  console.log('Formatted Date:', dayFetched);
  newSubmit(dayFetched)
 
});

  


function newSubmit(dayFetched) {
 
  const myUrl = 'https://api.vedicastroapi.com/v3-json/prediction/day-number';
  const MyParams = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "dob": dayFetched,
    "lang": "en"
  });
  
  fetch(`${myUrl}?${MyParams.toString()}`, {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(BioData => {
     console.log('Bio Data Success:', BioData);
    bioData(BioData)
  
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

function bioData(numData) {
  const dispNum = document.getElementById('dispNum');
  const Number = document.getElementById('displayNumber');

  Number.style.display = 'none';
  dispNum.style.display = 'grid';

  const DayNumber = document.getElementById('NumberResault');

const AllNumberDay = numData;
console.log(AllNumberDay.response.number);

DayNumber.innerHTML = ''
let newNums = `<h4>Here is your personal day number</h4><br>
<figcaption class="numCaption">
<div> <h5>Your personal number of today is: <span class="circleDay" >${AllNumberDay.response.number} </span> </h5></div> 
<div><h3>Master: <span class="circleDay" >${AllNumberDay.response.master} </span> </h3></div>
<div><h6>Meaning of your personal number:</h6> <p>${AllNumberDay.response.meaning} </p> </div>
</figcaption>`

DayNumber.innerHTML = newNums;
}



// Numerology start here

function Numerology() {
  const numero = document.getElementById('Numero');
  const dispNum = document.getElementById('dispNum');
  const Number = document.getElementById('displayNumber');


  dispNum.style.display= 'none';
  Number.style.display= 'none';
  numero.style.display= 'grid';

  console.log('Numerology start');

}

document.addEventListener('DOMContentLoaded', (event) => {
  const NumerologyGetTime = document.getElementById('NumeoData');
  // Change date format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  
  NumerologyGetTime.value = `${year}-${month}-${day}`;
});

document.getElementById('NumerologyForm').addEventListener('submit', (event) => {
  event.preventDefault(); 

  const NumerologyGetTime = document.getElementById('NumeoData').value;
  const Name = document.getElementById('Name').value;

  const [year, month, day] = NumerologyGetTime.split('-');
  const NemurologyFetchDate = `${day}/${month}/${year}`;
  console.log('Numerology Date:', NemurologyFetchDate);
  numerologyData(NemurologyFetchDate, Name)

});





function numerologyData(RecivedNumerology, TheName) {
  console.log(TheName);
  const newUrl = 'https://api.vedicastroapi.com/v3-json/prediction/numerology';
  const params = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "date": RecivedNumerology,
    "name": TheName,
    "lang": "en"
  });
  
  fetch(`${newUrl}?${params.toString()}`, {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(NuDa => {
     console.log('Numerology Success:', NuDa);
    NumeroDat(NuDa)
  
  })
  .catch(error => {
    console.error('Error:', error);
  });

}


function NumeroDat(justPass) {
  const mynum = document.getElementById('NumeroDip');
  const reo = document.getElementById('Numero');

  reo.style.display = 'none';
  mynum.style.display = 'grid';
  const resRac = document.getElementById('NumerologyRes');

  const LetData = justPass;
  console.log(LetData.response.agenda);
  
  resRac.innerHTML = ''
  let letBe = `<h4>Here is your numerology resault</h4><br>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.agenda.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.agenda.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.agenda.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.agenda.number}:</h6> <p>${LetData.response.agenda.meaning} </p> </div>
  </figcaption> <hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.attitude.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.attitude.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.attitude.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.attitude.number}:</h6> <p>${LetData.response.attitude.meaning} </p> </div>
  </figcaption><hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.character.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.character.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.character.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.character.number}:</h6> <p>${LetData.response.character.meaning} </p> </div>
  </figcaption><hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.destiny.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.destiny.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.destiny.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.destiny.number}:</h6> <p>${LetData.response.destiny.meaning} </p> </div>
  </figcaption><hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.personality.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.personality.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.personality.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.personality.number}:</h6> <p>${LetData.response.personality.meaning} </p> </div>
  </figcaption><hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.purpose.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.purpose.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.purpose.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.purpose.number}:</h6> <p>${LetData.response.purpose.meaning} </p> </div>
  </figcaption><hr>
  <figcaption class="letBeCaption">
  <div> <h5><span class="circleDay" >${LetData.response.soul.title} </span> </h5></div> 
  <div><h3>Number: <span class="circleDay" >${LetData.response.soul.number} </span> </h3></div>
  <div><h3>Master: <span class="circleDay" >${LetData.response.soul.master} </span> </h3></div>
  <div><h6>Meaning of your number ${LetData.response.soul.number}:</h6> <p>${LetData.response.soul.meaning} </p> </div>
  </figcaption><hr>`
  
  resRac.innerHTML = letBe;
}
