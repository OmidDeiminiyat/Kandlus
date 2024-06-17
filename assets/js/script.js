// li open in navigation
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.CateList');
    const toggleDiv = document.querySelector('.secondList');

    toggleButton.addEventListener('click', () => {
        if (toggleDiv.style.display === 'none' || toggleDiv.style.display === '') {
            toggleDiv.style.display = 'block';
        } else {
            toggleDiv.style.display = 'none';
        }
    });
});
// for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const mobButton = document.querySelector('.mobCate');
    const mobDiv = document.querySelector('.mobList');

    mobButton.addEventListener('click', () => {
        if (mobDiv.style.display === 'none' || mobDiv.style.display === '') {
            mobDiv.style.display = 'block';
        } else {
            mobDiv.style.display = 'none';

        }
    });
});

// open Navbar for mobile


function openIt() {
    const openIt = document.getElementById('open');
const closeIt = document.getElementById('close');
const MobileView = document.getElementById('MobileNav');
const title = document.getElementById('title');
const headerDesign = document.getElementById('headerDesign');
headerDesign.style.display ='none';
openIt.style.display = 'none';
closeIt.style.display = 'block';
MobileView.style.display = 'grid';
title.style.display='none';
}

function closeIt() {
    const openIt = document.getElementById('open');
const closeIt = document.getElementById('close');
const MobileView = document.getElementById('MobileNav');
const title = document.getElementById('title');
const headerDesign = document.getElementById('headerDesign');
headerDesign.style.display ='grid';
    openIt.style.display = 'block';
    closeIt.style.display = 'none';
    MobileView.style.display = 'none';
    title.style.display='block';
    }


    // Open pages by mobile navigation 
    const categoryPage = document.getElementById('CetegoriesPage');
    const allInOne = document.getElementById('allInOne');
    const searchPage = document.getElementById('searchPage');
    function CategoriesPage(){
        categoryPage.style.display = 'grid';
        allInOne.style.display ='none';
        searchPage.style.display = 'none';
    }

    function GoHome(){
        categoryPage.style.display = 'none';
        allInOne.style.display ='block';
        searchPage.style.display = 'none';
    }

    function SearchPage(){
        categoryPage.style.display = 'none';
        allInOne.style.display ='none';
        searchPage.style.display = 'block';
    }


    // Search for mobile
    const searchBar = document.getElementById("search-bar");
    const resultsList = document.getElementById("results");

    function filterData(searchTerm) {
     
      const data = ["Apple is good fruit", "After life is nothing matbe i dont know", "Apple and Banana has a red color, maybe orange", "Orange is now a esphire bu what? ", "Mango is not a movie name, Django was a movie name", "Grape, i dont know what you talked about"];
    
  
      const filteredResults = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
      resultsList.innerHTML = "";
    
      if (filteredResults.length > 0) {
        let linkStyle = `<ul>`
        filteredResults.forEach((item, index) => {
            linkStyle += `<li><a href=""><span class="material-symbols-outlined"> movie </span> ${item}</a><li><hr class="WidthHr>`
        });
        linkStyle += `</ul>`
        resultsList.innerHTML = linkStyle;
      
      } else {
        // Display "No results found" message
        const noResults = document.createElement("li");
        noResults.textContent = "No results found";
        resultsList.appendChild(noResults);
      }
    }
    
    searchBar.addEventListener("input", (event) => {
      const searchTerm = event.target.value;
      filterData(searchTerm);
    });


   


let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startAutoSlide();

    const slider = document.getElementById('slider');
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
});


