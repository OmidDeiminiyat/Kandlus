

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
        const thertww = form.elements['breath'];
        const forthww = form.elements['dream'];
        const fifthww = form.elements['Nature'];

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
        let elevenResault = null;
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
                elevenResault = elev.value;
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
            const calculatorResault = Number(selectedLanguage) + Number(secondResult) + Number(thirdResult) + Number(forthResult) + Number(fifthResult) + Number(sixResault) + Number(sevenResaulet) + Number(eightResault) + Number(nineResault) + Number(tenResault) + Number(elevenResault) + Number(twelResault) + Number(thirtheenResault) + Number(forthResult) + Number(fifthResult);
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
            console.log(twelResault);

            console.log(thirtheenResault);
            console.log(forthResult);
            console.log(fifthResult);
            console.log(calculatorResault);
            
            let SubTotal = null;
            if (calculatorResault <= '5') {
                SubTotal = 'Enlightenment path Level 1';
            } else if (calculatorResault >= '6' && calculatorResault <= '10') {
                SubTotal = 'Enlightenment path Level 2';
            } else if (calculatorResault >= '11' && calculatorResault <= '15') {
                SubTotal = 'Enlightenment path Level 3';
            }	else if (calculatorResault >= '16' && calculatorResault <= '20') {
                SubTotal = 'Enlightenment path Level 4';
            }	else if (calculatorResault >= '21' && calculatorResault <= '30') {
                SubTotal = 'Enlightenment path Level 5';
            }	else if (calculatorResault >= '31' && calculatorResault <= '40') {
                SubTotal = 'Enlightenment path Level 6';
            }	else if (calculatorResault >= '41' && calculatorResault <= '50') {
                SubTotal = 'Enlightenment path Level 7';
            }	else if (calculatorResault >= '51' && calculatorResault <= '60') {
                SubTotal = 'Enlightenment path Level 8';
            }	else if (calculatorResault >= '61' && calculatorResault <= '70') {
                SubTotal = 'Enlightenment path Level 9';
            }	else {
                SubTotal = 'Error';
            }
            console.log(SubTotal);
            
            let firstMessage = null;
            if (selectedLanguage === '1' || selectedLanguage === '0') {
                firstMessage = 'Those who are on the spiritual path and thinking of kundalini awakening should meditate everysingle day. But if for some reason you can not meditate every day, we suggest that you try to meditate more than 3 days a week for 1 hour at a time. Although your journey will be long, you will finally arrive.';
            } else if (selectedLanguage === '2' || selectedLanguage === '3' ) {
                firstMessage = 'Those who are on the spiritual path and thinking of kundalini awakening should meditate every single day. We know that you meditate more than 3 days a week and that is very good. But you will have a long way to go to reach consciousness. Therefore, we suggest that you try and meditate every day. Do not forget to walk in nature';
            }
            if (selectedLanguage != null) {
                console.log(firstMessage);
                
            }
            
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
    } else if (one === 'fitheee') {
        formFortheen.style.display = 'none';
        formFiftheen.style.display = 'block';
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
  console.log(back);
  
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
    } 
  }
  