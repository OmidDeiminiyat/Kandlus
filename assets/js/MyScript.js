
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
  const sendTo = "../Astrology/" + recived;
window.location.href = sendTo;
}

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