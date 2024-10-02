

// Initialize counters for each option
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;


function submitQuiz() {
   console.log('clicked');
   
    const form = document.forms['KundaliniForm'];
    const formData = new FormData(form);

    const first = form.elements['Q3'];
    let selectedLanguage = null;
    for (const radio of first) {
        if (radio.checked) {
            selectedLanguage = radio.value;
            break;
        }
    }
    console.log('First input is:' + selectedLanguage);
    
    // Loop through each selected answer and count occurrences of A, B, C, and D
    for (let [key, value] of formData.entries()) {
        if (value === 'A') {
            countA++;
        } else if (value === 'B') {
            countB++;
        } else if (value === 'C') {
            countC++;
        } else if (value === 'D') {
            countD++;
        }
    }

    calculateMostClicked();
}

function calculateMostClicked() {
    const counts = {
        A: countA,
        B: countB,
        C: countC,
        D: countD
    };


    let mostClicked = 'A'; // Start with A as the default
    let maxCount = countA;

    if (countB > maxCount) {
        mostClicked = 'B';
        maxCount = countB;
    }
    if (countC > maxCount) {
        mostClicked = 'C';
        maxCount = countC;
    }
    if (countD > maxCount) {
        mostClicked = 'D';
        maxCount = countD;
    }

console.log('most clicked:' + mostClicked);

}


function nexPage(one) {
    const formOne = document.getElementById('firstForm');
    const formTwo = document.getElementById('secondForm');
    const thirdForm = document.getElementById('thirdForm');
    const Formfour = document.getElementById('forthForm');
    const formFive =document.getElementById('fifthForm');
    const formSix = document.getElementById('sixthForm');
    const formSeven = document.getElementById('seventhForm');
    const formEighth = document.getElementById('eighthForm');
    const formNine = document.getElementById('ninthForm');
    const formTem = document.getElementById('tenthform');
    const formEleven = document.getElementById('eleventhForm');
    const formTwelv = document.getElementById('tewelvForm');
    const formThirteen = document.getElementById('thirtheenForm');
    const formFortheen = document.getElementById('fortheenForm');
    const formFiftheen = document.getElementById('fiftheenForm');
    const formSixteen = document.getElementById('sixteenForm');
    const formSeventh = document.getElementById('sevtheenForm');
    const formEighteen = document.getElementById('EighteenForm');

console.log(one);

    if (one === 'first') {
        formOne.style.display = 'none';
        formTwo.style.display = 'block';  
    } else if (one === 'second') {
        formTwo.style.display = 'none';  
        thirdForm.style.display = 'block';
    } else if (one === 'third') { 
        thirdForm.style.display = 'none';
        Formfour.style.display = 'block';
    } else if (one === 'forth') {
        Formfour.style.display = 'none';
        formFive.style.display = 'block';
    } else if (one === 'fifth') {
        formFive.style.display = 'none';
        formSix.style.display = 'block';
    }else if (one === 'sixth') {
        formSix.style.display = 'none';
        formSeven.style.display = 'block';
    } else if (one === 'seventh') {
        formSeven.style.display = 'none';
        formEighth.style.display = 'block';
    } else if (one === 'Eighth') {
        formEighth.style.display = 'none';
        formNine.style.display = 'block';
    } else if (one === 'ninth') {
        formNine.style.display = 'none';
        formTem.style.display = 'block';
    } else if (one === 'thenth') {
        formTem.style.display = 'none';
        formEleven.style.display = 'block';
    } else if (one === 'eleventh') {
        formEleven.style.display = 'none';
        formTwelv.style.display = 'block';
    } else if (one === 'twelv') {
        formTwelv.style.display = 'none';
        formThirteen.style.display = 'block';
    } else if (one === 'theree') {
        formThirteen.style.display = 'none';
        formFortheen.style.display = 'block';
    } else if (one === 'forteee') {
        formFortheen.style.display = 'none';
        formFiftheen.style.display = 'block';
    } else if (one === 'fifteen') {
        formFiftheen.style.display = 'none';
        formSixteen.style.display = 'block';
    } else if (one === 'sixTheen') {
        formSixteen.style.display = 'none';
        formSeventh.style.display = 'block';
    } else if (one === 'seventeen') {
        formSeventh.style.display = 'none';
        formEighteen.style.display = 'block';
    } 
  
   
  }



  function BackPage(back) {
    const formOne = document.getElementById('firstForm');
    const formTwo = document.getElementById('secondForm');
    const thirdForm = document.getElementById('thirdForm');
    const Formfour = document.getElementById('forthForm');
    const formFive =document.getElementById('fifthForm');
    const formSix = document.getElementById('sixthForm');
    const formSeven = document.getElementById('seventhForm');
    const formEighth = document.getElementById('eighthForm');
    const formNine = document.getElementById('ninthForm');
    const formTem = document.getElementById('tenthform');
    const formEleven = document.getElementById('eleventhForm');
    const formTwelv = document.getElementById('tewelvForm');
    const formThirteen = document.getElementById('thirtheenForm');
    const formFortheen = document.getElementById('fortheenForm');
    const formFiftheen = document.getElementById('fiftheenForm');
    const formSixteen = document.getElementById('sixteenForm');
    const formSeventh = document.getElementById('sevtheenForm');
    const formEighteen = document.getElementById('EighteenForm');

  
    if (back === 'no2') {
        formOne.style.display = 'block';
        formTwo.style.display = 'none';  
    } else if (back === 'no4') {  
        formTwo.style.display = 'block';
        thirdForm.style.display = 'none';
    } else if (back === 'no5') {   
        thirdForm.style.display = 'block';
        Formfour.style.display = 'none';
    } else if (back === 'no6') {
        Formfour.style.display = 'block';
        formFive.style.display = 'none';
    } else if (back === 'no7') {
        formFive.style.display = 'block';
        formSix.style.display = 'none';
    }else if (back === 'no8') {
        formSix.style.display = 'block';
        formSeven.style.display = 'none';
    } else if (back === 'no9') {
        formSeven.style.display = 'block';
        formEighth.style.display = 'none';
    } else if (back === 'no10') {
        formEighth.style.display = 'block';
        formNine.style.display = 'none';
    } else if (back === 'no11') {
        formNine.style.display = 'block';
        formTem.style.display = 'none';
    } else if (back === 'no12') {
        formTem.style.display = 'block';
        formEleven.style.display = 'none';
    } else if (back === 'no13') {
        formEleven.style.display = 'block';
        formTwelv.style.display = 'none';
    } else if (back === 'no14') {
        formTwelv.style.display = 'block';
        formThirteen.style.display = 'none';

    } else if (back === 'no15') {
        formThirteen.style.display = 'block';
        formFortheen.style.display = 'none';

    } else if (back === 'no16') {
        formFortheen.style.display = 'block';
        formFiftheen.style.display = 'none';
    } else if (back === 'no17') {
        formFiftheen.style.display = 'block';
        formSixteen.style.display = 'none';
    } else if (back === 'no18') {
        formSixteen.style.display = 'block';
        formSeventh.style.display = 'none';
    } else if (back === 'no19') {
        formEighteen.style.display = 'none';
        formSeventh.style.display = 'block';
    } 
  }
  
