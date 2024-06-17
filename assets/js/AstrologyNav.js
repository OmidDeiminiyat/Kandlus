


function openIt() {
    const openIt = document.getElementById('open');
const closeIt = document.getElementById('close');
const MobileView = document.getElementById('MobileNav');
const title = document.getElementById('title');
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

    openIt.style.display = 'block';
    closeIt.style.display = 'none';
    MobileView.style.display = 'none';
    title.style.display='block';
    }


