
//  search box 
const searchOpen = document.getElementById('openSearch');
const searchClose = document.getElementById('closeSearch');
const searchBox = document.getElementById('search');
function openSearch() {
    searchOpen.style.display = 'none';
    searchClose.style.display = 'block';
    searchBox.style.display = 'flex';
}

function closeSearch() {
    searchOpen.style.display = 'block';
    searchClose.style.display = 'none';
    searchBox.style.display = 'none';
}


/*
 function openLayouts() {
     const layousBar = document.getElementById('layoutBar');
     layousBar.style.display = 'flex';
 }
*/
/*
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const data = [  // Replace with your actual data array
  { name: "Item 1 just fior the test how it works" },
  { name: "Item 2 with p just fior the test how it works" },
  { name: "Item 3, just fior the test how it works" },
];

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredResults = data.filter(item => item.name.toLowerCase().includes(searchTerm));

  searchResults.innerHTML = ''; // Clear previous results
  if (filteredResults.length > 0) {
    // Display search results
    let resultsHtml = '';
    filteredResults.forEach(item => {
      resultsHtml += `<a href=""><p>${item.name}</p></a>`;
    });
    searchResults.innerHTML = resultsHtml;
  } else {
    searchResults.innerHTML = '<p>No results found.</p>';
  }
});



var coll = document.getElementsByClassName("collapsible");
var layoutsBar = document.getElementById("layoutBar");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = layoutsBar;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}
*/

var sessionName = sessionStorage.getItem('Plan');
console.log(sessionName);
var Bios = document.getElementById('BioFirst');
var bioLinks =document.getElementById('listen-2');
var HoroFir = document.getElementById('HorosForst');
var HorLink = document.getElementById('listen');
var Person = document.getElementById('PersonTex');
var PersonLink =document.getElementById('listen-3');
var assenD = document.getElementById('assenTex');
var AssLin = document.getElementById('listen-4');
var Yogik = document.getElementById('YogaD');
var yogiLink = document.getElementById('listen-5');
var TablN = document.getElementById('NumTab');
var tabLink = document.getElementById('listen-7');
var Radic = document.getElementById('RadTex');
var RLink = document.getElementById('listen-8');
var tarotLink = document.getelementById('listenTarot');


if (!sessionName || sessionName == '99etB637s') {
  Bios.innerText =  'This service is available for Standard and Pro plans';
  HoroFir.innerHTML = 'This service is available for Standard and Pro plans'
  assenD.innerHTML = 'This service is available for Standard and Pro plans'
  bioLinks.style.display = 'none';
  HorLink.style.display = 'none';
  AssLin.style.display = 'none';
} else {
  Bios.innerHTML = 'Let calculate your birth day and time to know your biorythm circle';
  bioLinks.style.display = 'block';
  HoroFir.innerHTML = 'Daily, Weekly, Monthly Horoscopes. Annual Forecasts, Transits, Progressions, Relationship, Compatibility and more';
  HorLink.style.display = 'block';
  assenD.innerHTML = 'Know your Personality, Appearance, Behavior, Attitudes, Life Path, Identity and more';
  AssLin.style.display = 'block';
}

if(!sessionName || sessionName == '99etB637s' || sessionName == '663idsmS98pR') {
Person.innerText = 'This service is available for plan Pro'
PersonLink.style.display = 'none';
Yogik.innerText = 'This service is available for plan Pro'
yogiLink.style.display = 'none';
TablN.innerText = 'This service is available for plan Pro'
tabLink.style.display = 'none';
Radic.innerText = 'This service is available for plan Pro'
RLink.style.display = 'none';
} else {
Person.innerText = 'This service tells you your traits by considering the position of the planets and constellations at the time of your birth in that geographical location'
PersonLink.style.display = 'block';
Yogik.innerText = 'These yogas are formed based on the placement of planets in relation to each other and to certain houses in the natal chart'
yogiLink.style.display = 'block';
TablN.innerText = 'A numerology chart is created using specific numbers derived from a person’s birth date and full name. The chart provides insights into various aspects of their life.'
tabLink.style.display = 'block';
Radic.innerText = 'The radical number or root number, also known as the life path number, is derived from the date of birth. By having your root number, you can be aware of your life path'
RLink.style.display = 'block';
}



function pages(recived) {
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else {
    const sendTo = "../Astrology/" + recived;
       window.location.href = sendTo;
  }
}

function pages2(recived) {
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  }  else {
    const sendTo = "../Astrology/" + recived;
      window.location.href = sendTo;
  }
}

function pages3(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else {
    const sendTo = "../Astrology/" + recived;
      window.location.href = sendTo;
  }
}
function pages4(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}

function pages5(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}

function pages6(recived) {
  var sessionName = sessionStorage.getItem('User-name');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName != null ) {
      const sendTo = "../Astrology/" + recived;
      window.location.href = sendTo;
  } else {
    const showError = document.getElementById('Error6');
    const no6 = document.getElementById('No-6');
    no6.style.display = 'none';
    showError.style.display = 'block';
  }
}

const Basic = '99etB637s';
function pages7(recived) {
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}
function pages8(recived) {
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}

function pages9(recived) {
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
      window.location.href = sendTo;
  }
}

function tarots(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else  {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}



    // const no2 = document.getElementById('No-2');
    // const no3 = document.getElementById('No-3');
    // const no4 = document.getElementById('No-4');
    // const no5 = document.getElementById('No-5');
    // const no6 = document.getElementById('No-6');
    // const no7 = document.getElementById('No-7');
    // const no8 = document.getElementById('No-8');
    // const no9 = document.getElementById('No-9');
    // const no10 = document.getElementById('No-10');
    // const no11 = document.getElementById('No-11');
    // const no12 = document.getElementById('No-12');

// 

function firstHideParaf(){
  const first_hidddenP = document.getElementById('hidden_p');
  const first_arrow = document.getElementById('first-arrow');
  const secondArrow = document.getElementById('second-arrow');
  if (first_hidddenP.style.display === 'none') {
    first_hidddenP.style.display = 'block';
  } else {
    first_hidddenP.style.display = 'none';
  }
  if (first_arrow.style.display === 'none') {
    first_arrow.style.display = 'block';
    secondArrow.style.display = 'none';
  } else {
    first_arrow.style.display = 'none';
    secondArrow.style.display = 'block';
  }
  
}



function mantraPage(){
  const nature = document.getElementById('nature');
  const Mantra = document.getElementById('MantraP');
  const SolfeggioP = document.getElementById('SolfegP');
  const SolfCard = document.getElementById('SolfegCard');
  const MantraCard = document.getElementById('MantraCard');
  Mantra.style.display = 'block';
  SolfeggioP.style.display = 'none';
  nature.style.display = 'none';
  SolfCard.style.display = 'block';
  MantraCard.style.display = 'none'

}

function SolfegCard(){
  const nature = document.getElementById('nature');
  const Mantra = document.getElementById('MantraP');
  const SolfeggioP = document.getElementById('SolfegP');
  Mantra.style.display = 'none';
  SolfeggioP.style.display = 'block';
  nature.style.display = 'none';
  const SolfCard = document.getElementById('SolfegCard');
  const MantraCard = document.getElementById('MantraCard');
   SolfCard.style.display = 'none';
  MantraCard.style.display = 'block'
}

function Nature(){
  const nature = document.getElementById('nature');
  const Mantra = document.getElementById('MantraP');
  const SolfeggioP = document.getElementById('SolfegP');
  Mantra.style.display = 'none';
  SolfeggioP.style.display = 'none';
  nature.style.display = 'block';
}
function Podcast() {
  window.location.href = 'Podcast.html';
}

function goHoroscope() {
  window.location.href = 'Horoscope.html';
}
function goBiorythm() {
  window.location.href = 'Biorythm.html';
}
function goPersonal() {
  window.location.href = 'Characteris.html';
}
