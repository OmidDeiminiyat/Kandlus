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
