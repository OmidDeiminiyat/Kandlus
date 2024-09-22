

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('KundaliniForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        // Get all radio buttons
        const first = form.elements['Q3'];
        const second = form.elements['O2'];
        const third = form.elements['T1'];
        const forth = form.elements['M1'];

        let selectedLanguage = null;
        let secondResult = null;

        // Loop through radio buttons to find the checked one
        for (const radio of first) {
            if (radio.checked) {
                selectedLanguage = radio.value;
                break;
            }
        }
        for (const sec of second) {
            if (sec.checked) {
                secondResult = sec.value;
                break;
            }
        }
        for (const thi of third) {
            if (thi.checked) {
                thirdResult = thi.value;
                break;
            }
        }
        for (const forO of forth) {
            if (forO.checked) {
                forthResult = forO.value;
                break;
            }
        }
        if (selectedLanguage) {
            console.log(selectedLanguage);
            console.log(secondResult);
            console.log(thirdResult);
            console.log(forthResult);
            
            
            
        } else {
            console.log('Ooops');
            
        }
    });
});





function nexPage(one) {
    const formOne = document.getElementById('firstForm');
    const formTwo = document.getElementById('secondForm');
    const thirdForm = document.getElementById('thirdForm');
    const Formfour = document.getElementById('forthForm');

    if (one === 'first') {
        formOne.style.display = 'none';
        formTwo.style.display = 'block';  
    } else if (one === 'second') {
        formTwo.style.display = 'none';  
        thirdForm.style.display = 'block';
    } else if (one === 'third') { 
        thirdForm.style.display = 'none';
        Formfour.style.display = 'block';
    }
  
   
  }
  function BackPage() {
    const formOne = document.getElementById('firstForm');
    const formTwo = document.getElementById('secondForm');
  
    formOne.style.display = 'block';
    formTwo.style.display = 'none'; 
  }
  