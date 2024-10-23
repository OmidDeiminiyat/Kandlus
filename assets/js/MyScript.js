
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

async function checkUserLog() {
  try {
      const response = await fetch('../backend/users.php');  // Call the PHP file
      const data = await response.json();
      newPlan(data)
      // data.forEach(item => {
      //     newPlan(data)

      // });
             
  } catch (error) {
      console.error('Error fetching subscribe data:', error);
  }
}
checkUserLog()


async function newPlan(PhDatas){
  const sessionName = sessionStorage.getItem('Plan');
var Bios = document.getElementById('BioFirst');
var bioLinks =document.getElementById('listen-2');
var HoroFir = document.getElementById('HorosForst');
var HorLink = document.getElementById('listen');
var Tartots = document.getElementById('TarotCards');
var PersonLink =document.getElementById('listen-3');
var assenD = document.getElementById('assenTex');
var AssLin = document.getElementById('listen-4');
var Yogik = document.getElementById('YogaD');
var yogiLink = document.getElementById('listen5');
var phisicalText = document.getElementById('phisicalYogaText');
var phisicaLink = document.getElementById('physicalYogaLin');
var TablN = document.getElementById('NumTab');
var tabLink = document.getElementById('listen-7');
var Radic = document.getElementById('RadTex');
var RLink = document.getElementById('listen-8');
var personalLinks = document.getElementById('personNewLink');
var PersonNewText = document.getElementById('persoTx');
var numerologyLink = document.getElementById('IdNumerology');
var TextNumerology = document.getElementById('numerologyText');
// var tarotLink = document.getelementById('listenTarot');
var matchLink = document.getElementById('listenMatch');
var textDat = document.getElementById('dateText');

    if (!sessionName) {
      Bios.innerText = 'To use astrology services, you must log in and select one of the plans';
      HoroFir.innerHTML = 'To use astrology services, you must log in and select one of the plans';
      assenD.innerHTML = 'To use astrology services, you must log in and select one of the plans';
      Tartots.innerText = 'To use astrology services, you must log in and select one of the plans';
      Yogik.innerText = 'To use astrology services, you must log in and select one of the plans';
      phisicalText.innerText = 'To use astrology services, you must log in and select one of the plans';
      TextNumerology.innerHTML = 'To use astrology services, you must log in and select one of the plans';
      TablN.innerText = 'To use astrology services, you must log in and select one of the plans';
      Radic.innerText = 'To use astrology services, you must log in and select one of the plans';
      textDat.innerText = 'To use astrology services, you must log in and select one of the plans';
      PersonNewText.innerText = 'To use astrology services, you must log in and select one of the plans';
    } else if (sessionName === PhDatas[2].Basic) {
      Bios.innerText = 'This service is available for plans: Standard and Pro';
      HoroFir.innerHTML = 'This service is available for plans: Standard and Pro';
      assenD.innerHTML = 'This service is available for plans: Standard and Pro';
      Tartots.innerText = 'This service is available for plan: Pro';
      Yogik.innerText = 'This service is available for plans: Standard and Pro';
      phisicalText.innerText = 'This service is available for plan: Pro';
      TextNumerology.innerHTML = 'This service is available for plans: Standard and Pro';
      TablN.innerText = 'This service is available for plan: Pro';
      Radic.innerText = 'This service is available for plan: Pro';
      textDat.innerText = 'This service is available for plan: Pro';
      PersonNewText.innerText = 'This service is available for plan: Pro';
    }
    
    else if (sessionName === PhDatas[1].Standard) {
      Bios.innerHTML = 'Let calculate your birth day and time to know your biorythm circle';
      bioLinks.style.display = 'block';
      HoroFir.innerHTML = 'Daily, Weekly, Monthly Horoscopes. Annual Forecasts, Transits, Progressions, Relationship, Compatibility and more';
      HorLink.style.display = 'block';
      assenD.innerHTML = 'Know your Personality, Appearance, Behavior, Attitudes, Life Path, Identity and more';
      AssLin.style.display = 'block';
      TextNumerology.innerText = 'Get your personal day number and meaning of your personal number.';
      numerologyLink.style.display = 'block';
      Yogik.innerText = 'There are many types of Yogas in astrology, where each Yoga can result in different effects on a person life, such as prosperity, success, hardships, relationships, or spiritual growth.';
      yogiLink.style.display = 'block';
      TablN.innerText = 'This service is available for plan: Pro';
      Radic.innerText = 'This service is available for plan: Pro';
      textDat.innerText = 'This service is available for plan: Pro';
      PersonNewText.innerText = 'This service is available for plan: Pro';
      TablN.innerText = 'This service is available for plan: Pro';
      Radic.innerText = 'This service is available for plan: Pro';
      textDat.innerText = 'This service is available for plan: Pro';
      PersonNewText.innerText = 'This service is available for plan: Pro';
      phisicalText.innerText = 'This service is available for plan: Pro';
      Tartots.innerText = 'This service is available for plan: Pro';
      } else if(sessionName === PhDatas[0].Pro) {        
        Tartots.innerText = 'This service tells you your traits by considering the position of the planets and constellations at the time of your birth in that geographical location'
        PersonLink.style.display = 'block';
        Yogik.innerText = 'These yogas are formed based on the placement of planets in relation to each other and to certain houses in the natal chart'
        yogiLink.style.display = 'block';
        TablN.innerText = 'A numerology chart is created using specific numbers derived from a person’s birth date and full name. The chart provides insights into various aspects of their life.'
        tabLink.style.display = 'block';
        Radic.innerText = 'The radical number or root number, also known as the life path number, is derived from the date of birth. By having your root number, you can be aware of your life path'
        RLink.style.display = 'block';
        textDat.innerText = 'This service helps you find out if you are compatible with someone you want to marry';
        matchLink.style.display = 'block';
        phisicalText.innerText = 'This service tells you the most suitable yoga exercises according to the position of the planets at the time of your birth and can teach you yoga at the same time';
        phisicaLink.style.display = 'block';
        PersonNewText.innerText = 'This service tells you your traits by considering the position of the planets and constellations at the time of your birth in that geographical location';
        personalLinks.style.display = 'block';
        Bios.innerHTML = 'Let calculate your birth day and time to know your biorythm circle';
        bioLinks.style.display = 'block';
        HoroFir.innerHTML = 'Daily, Weekly, Monthly Horoscopes. Annual Forecasts, Transits, Progressions, Relationship, Compatibility and more';
        HorLink.style.display = 'block';
        assenD.innerHTML = 'Know your Personality, Appearance, Behavior, Attitudes, Life Path, Identity and more';
        AssLin.style.display = 'block';
        TextNumerology.innerText = 'Get your personal day number and meaning of your personal number.';
        numerologyLink.style.display = 'block';
        Yogik.innerText = 'There are many types of Yogas in astrology, where each Yoga can result in different effects on a person life, such as prosperity, success, hardships, relationships, or spiritual growth.';
        yogiLink.style.display = 'block';
      } 


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
