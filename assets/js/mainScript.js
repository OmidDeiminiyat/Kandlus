document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach(circle => {
      circle.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        
        images.forEach(img => img.classList.remove('active'));
        circles.forEach(circ => circ.classList.remove('active'));
        
        images[index].classList.add('active');
        this.classList.add('active');
      });
    });
  });
  
  
const imageContainer = document.getElementById('puImages');

let arrayImages = [
  `<div id="im1" class="carousel-image img1 active" ></div>`,
  `<div id="im2" class="carousel-image img2 active" ></div>`,
  `<div id="im3" class="carousel-image img3 active"></div>`,
  `<div id="im4" class="carousel-image img4 active"></div>`,
  `<div id="im5" class="carousel-image img5 active"></div>`,
];
let indexNumber = 0;
imageContainer.innerHTML = arrayImages[0];
setInterval(() => {
  if (indexNumber >= arrayImages.length - 1) {
    indexNumber = 0;
    
  } else {
    indexNumber = indexNumber + 1;
  }
  imageContainer.innerHTML = arrayImages[indexNumber];
},4000);


