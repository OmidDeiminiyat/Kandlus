
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


function pages(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if (sessionName == 'Basic') {
    const showError = document.getElementById('Error');
     const no1 = document.getElementById('No-1');
     const img1 = document.getElementById('img1');
     no1.style.display = 'none';
     img1.style.display = 'none';
   showError.style.display = 'block';
  } else {
    const sendTo = "../Astrology/" + recived;
       window.location.href = sendTo;
  }
}

function pages2(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName == 'Basic' ) {
    const showError = document.getElementById('Error2');
    const no2 = document.getElementById('No-2');
    const img2 = document.getElementById('img2');
    no2.style.display = 'none';
    showError.style.display = 'block';
    img2.style.display= 'none';
      
  } else {
    const sendTo = "../Astrology/" + recived;
      window.location.href = sendTo;
  }
}

function pages3(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if (sessionName == 'Basic' ) {
    const showError = document.getElementById('Error3');
    const no3 = document.getElementById('No-3');
    const img3 = document.getElementById('img3');
    img3.style.display = 'none';
    no3.style.display = 'none';
    showError.style.display = 'block';
      
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
  } else if  (sessionName == 'Basic' || sessionName == 'Standard' ) {
    const showError = document.getElementById('Error4');
    const no4 = document.getElementById('No-4');
    const img4 = document.getElementById('img4');
    img4.style.display = 'none';
    no4.style.display = 'none';
    showError.style.display = 'block';
  } else {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}

function pages5(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName == 'Basic' || sessionName == 'Standard') {
    const showError = document.getElementById('Error5');
    const no5 = document.getElementById('No-5');
    const img5 = document.getElementById('img5');
    img5.style.display = 'none'
    no5.style.display = 'none';
    showError.style.display = 'block';
  } else {
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

function pages7(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName == 'Basic' || sessionName == 'Standard') {
    const showError = document.getElementById('Error7');
    const no7 = document.getElementById('No-7');
    const img7 = document.getElementById('img7');
    img7.style.display = 'none'
    no7.style.display = 'none';
    showError.style.display = 'block';
      
  } else {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}
function pages8(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName == 'Basic' || sessionName == 'Standard') {
    const showError = document.getElementById('Error8');
    const no8 = document.getElementById('No-8');
    const img8 = document.getElementById('img8');
    img8.style.display = 'none'
    no8.style.display = 'none';
    showError.style.display = 'block';
  } else {
    const sendTo = "../Astrology/" + recived;
    window.location.href = sendTo;
  }
}

function pages9(recived) {
  var sessionName = sessionStorage.getItem('Plan');
  var checkU = getCookie('Kandlus-users');
  if (!checkU) {
    alert('To use astrology services, you must log in and select one of the plans' );
  } else if  (sessionName == 'Basic' || sessionName == 'Standard') {
    const showError = document.getElementById('Error9');
    const no9 = document.getElementById('No-9');
    const img9 = document.getElementById('img9');
    img9.style.display = 'none'
    no9.style.display = 'none';
    showError.style.display = 'block';
  } else {
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

