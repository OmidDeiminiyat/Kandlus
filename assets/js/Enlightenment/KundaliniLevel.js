

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('KundaliniForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        // Get all radio buttons
        const first = form.elements['Q3'];
        const second = form.elements['O2'];
        const third = form.elements['T1'];
        const forth = form.elements['M1'];
        const fifths = form.elements['N1'];
        const sixth = form.elements['D1'];
        const seventh = form.elements['W1'];
        const Eight = form.elements['E1'];
        const ninth = form.elements['R1'];
        const tenth = form.elements['Sit1'];
        const eleven = form.elements['Ask1'];
        const Twelww = form.elements['fear'];
        const thertww = form.elements['fear'];
        const forthww = form.elements['fear'];
        const fifthww = form.elements['fear'];

        let selectedLanguage = null;
        let secondResult = null;
        let thirdResult = null;
        let forthResult = null;
        let fifthResult = null;
        let sixResault = null;
        let sevenResaulet = null;
        let eightResault = null;
        let nineResault = null;
        let tenResault = null;
        let twelResault = null;
        let thirtheenResault = null;
        let fortheenResault = null;
        let fiftheenResault = null;

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
        for (const fifther of fifths) {
            if (fifther.checked) {
                fifthResult = fifther.value;
                break;
            }
        }

        for (const sex of sixth) {
            if (sex.checked) {
                sixResault = sex.value;
                break;
            }
        }

        for (const seve of seventh) {
            if (seve.checked) {
                sevenResaulet = seve.value;
                break;
            }
        }

        for (const eig of Eight) {
            if (eig.checked) {
                eightResault = eig.value;
                break;
            }
        }

        for (const nin of ninth) {
            if (nin.checked) {
                nineResault = nin.value;
                break;
            }
        }

        for (const tener of tenth) {
            if (tener.checked) {
                tenResault = tener.value;
                break;
            }
        }

        for (const elev of eleven) {
            if (elev.checked) {
                fifthResult = elev.value;
                break;
            }
        }

        for (const twlel of Twelww) {
            if (twlel.checked) {
                twelResault = twlel.value;
                break;
            }
        }

        for (const thiree of thertww) {
            if (thiree.checked) {
                thirtheenResault = thiree.value;
                break;
            }
        }

        for (const fortheenwww of forthww) {
            if (fortheenwww.checked) {
                fortheenResault = fortheenwww.value;
                break;
            }
        }

        for (const fiftwww of fifthww) {
            if (fiftwww.checked) {
                fiftheenResault = fiftwww.value;
                break;
            }
        }
        if (selectedLanguage) {
            console.log(selectedLanguage);
            console.log(secondResult);
            console.log(thirdResult);
            console.log(forthResult);
            console.log(fifthResult);
            console.log(sixResault);
            console.log(sevenResaulet);
            console.log(eightResault);
            console.log(nineResault);
            console.log(tenResault);
            console.log(elevenResault);
            
            
            
            
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
    } else if (one === 'sixth') {
        formFive.style.display = 'none';
        formSix.style.display = 'block';
    } else if (one === 'seventh') {
        formSix.style.display = 'none';
        formSeven.style.display = 'block';
    } else if (one === 'Eighth') {
        formSeven.style.display = 'none';
        formEighth.style.display = 'block';
    } else if (one === 'ninth') {
        formEighth.style.display = 'none';
        formNine.style.display = 'block';
    } else if (one === 'thenth') {
        formNine.style.display = 'none';
        formTem.style.display = 'block';
    } else if (one === 'eleventh') {
        formTem.style.display = 'none';
        formEleven.style.display = 'block';
    } else if (one === 'twelv') {
        formEleven.style.display = 'none';
        formTwelv.style.display = 'block';
    } else if (one === 'theree') {
        formTwelv.style.display = 'none';
        formThirteen.style.display = 'block';
    } else if (one === 'forteee') {
        formThirteen.style.display = 'none';
        formFortheen.style.display = 'block';
    } else if (one === 'fitheee') {
        formFortheen.style.display = 'none';
        formFiftheen.style.display = 'block';
    }
  
   
  }
  function BackPage() {
    const formOne = document.getElementById('firstForm');
    const formTwo = document.getElementById('secondForm');
  
    formOne.style.display = 'block';
    formTwo.style.display = 'none'; 
  }
  