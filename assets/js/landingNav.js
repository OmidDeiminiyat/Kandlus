
function openIt() {
    const openIt = document.getElementById('open');
const closeIt = document.getElementById('close');
const MobileView = document.getElementById('MobileNav');

const headerDesign = document.getElementById('headerDesign');
if (headerDesign) {
    headerDesign.style.display ='none';
}

openIt.style.display = 'none';
closeIt.style.display = 'block';
MobileView.style.display = 'grid';
}

function closeIt() {
    const openIt = document.getElementById('open');
const closeIt = document.getElementById('close');
const MobileView = document.getElementById('MobileNav');

const headerDesign = document.getElementById('headerDesign');
if (headerDesign) {
    headerDesign.style.display ='none';
}
    openIt.style.display = 'block';
    closeIt.style.display = 'none';
    MobileView.style.display = 'none';
    }


