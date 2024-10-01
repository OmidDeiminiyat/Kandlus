

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
        const sixThw = form.elements['SpentTime'];
        const letType = document.getElementById('typenswer');

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
        let sixtheenResault = null;

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
        for(const sixthwwwn of sixThw) {
            if (sixthwwwn.checked) {
                sixtheenResault = sixthwwwn.value;
                break;
            }
        }
        if (selectedLanguage) {
            form.style.display = 'none';

            const calculatorResault = Number(selectedLanguage) + Number(secondResult) + Number(thirdResult) + Number(forthResult) + Number(fifthResult) + Number(sixResault) + Number(sevenResaulet) + Number(eightResault) + Number(nineResault) + Number(tenResault) + Number(elevenResault) + Number(twelResault) + Number(thirtheenResault) + Number(forthResult) + Number(fifthResult) + Number(sixtheenResault);

            
            if (calculatorResault <= '5') {
                document.getElementById('WhatZ').innerHTML = `<h5> The level of your spiritual path is 1 </h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p> Kandlus after analysing your answers to the questions concluded that you are in the first level of spiritual awakening. So you should do meditations that prepare you for kundalini awakening practice. I suggest begin with short sessions, even just 3-5 minutes a day. As you get more comfortable, gradually increase the duration. Starting small helps build consistency without feeling overwhelmed. Then after a month do the test again, and If the level changes, I will give you new tips. </p>`;
            } else if (calculatorResault >= '6' && calculatorResault <= '10') {
                 document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 2 </h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the second level of spiritual awakening. So you have to do meditations that prepare you for kundalini awakening exercises. We suggest you meditations such as "Movement Meditation or Walking Meditations, Breathing Meditations and Focus Meditations ”  that are suitable for the second level. But make sure that before you start meditating and on the path of your spiritual awakening, you observe the following tips. If you do the said meditations every day, do our test again after a month, and If the level changes, we will give you new tips. Do the breathing meditation as follows: Breathe gently through the hole in the right side of the nose, then close it with your ring finger. Take a moment and then exhale through the left nostril. Repeat this 5 to 10 times in each nostril. Research shows that 15 to 18 minutes of intermittent breathing through the nostrils is ideal. If you wish, we suggest that you do relaxation meditation in addition to the essential meditations mentioned earlier. This meditation is a relaxation technique that helps you release the tension in your body and feel more relaxed. Do this meditation like this: Work through the body, contract one muscle group at a time, and then release the tension and notice the opposite feeling of relaxation.</p>`;
            } else if (calculatorResault >= '11' && calculatorResault <= '15') {
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the third level of spiritual awakening. So you are not ready to do kundalini meditation yet, and you have to do meditations that prepare you for kundalini awakening exercises. We suggest you meditations such as " Mantra Meditations, Breathing Meditations and Focus Meditations ”  that are suitable for the third level. But make sure that before you start meditating and on the path of your spiritual awakening, you observe the following tips. If you do the said meditations every day, you can do our test again after a month and we will give you new tips if your level changes. If you wish, we suggest that you do relaxation meditation in addition to the essential meditations mentioned earlier. This meditation is a relaxation technique that helps you release the tension in your body and feel more relaxed. Do this meditation like this: Work through the body, contract one muscle group at a time, and then release the tension and notice the opposite feeling of relaxation.</p>`;
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 3</h5>`;
            }	else if (calculatorResault >= '16' && calculatorResault <= '20') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 4</h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the forth level of spiritual awakening. So you are not ready to do kundalini meditation yet, and you have to do meditations that prepare you for kundalini awakening exercises. We suggest you meditations such as " Buddhist Meditations such as Loving Kindness , Mantra Meditations and Breathing Meditations ”  that are suitable for the forth level. Please hold your breath for 30 seconds. If you can not do this, we suggest that you do Breathing Meditations twice a day.  But make sure that before you start meditating and on the path of your spiritual awakening, you observe the following tips. If you do the said meditations every day, you can do our test again after a month and we will give you new tips if your level changes.</p>`;
            }	else if (calculatorResault >= '21' && calculatorResault <= '30') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 5</h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the fifth level of spiritual awakening. So you are not ready to do kundalini meditation yet, and you have to do meditations that prepare you for kundalini awakening exercises. We suggest you meditations such as " Transcendental Meditations and Breathing Meditations(Shamatha Meditation) ”  that are suitable for the fifth level. Transcendental Meditations promotes a state of calm awareness, stress relief, and access to higher states of consciousness as well as physiological benefits such as reduced risk of heart disease and high blood pressure. Please hold your breath for 90 seconds. If you can not do this, we suggest that you do Breathing Meditations twice a day.  But make sure that before you start meditating and on the path of your spiritual awakening, you observe the following tips. If you do the said meditations every day, you can do our test again after three month and we will give you new tips if your level changes.</p>`;
            }	else if (calculatorResault >= '31' && calculatorResault <= '40') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 6</h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the sixth level of spiritual awakening. So you are ready to do kundalini meditation. Please read our article called Kundalini Awakening for more information</p>`;
            }	else if (calculatorResault >= '41' && calculatorResault <= '50') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 7</h5>`;
                document.getElementById('calcuTypLev').innerHTML = `<p>Kandlus after analysing your answers to the questions concluded that you are in the seventh  level of spiritual awakening. So you are ready to do kundalini meditation. Please read our article called Kundalini Awakening for more information</p>`;
            }	else if (calculatorResault >= '51' && calculatorResault <= '60') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 8</h5>`;
            }	else if (calculatorResault >= '61' && calculatorResault <= '70') {
                document.getElementById('WhatZ').innerHTML = `<h5>The level of your spiritual path is 9</h5>`;
            }	else {
                document.getElementById('WhatZ').innerHTML = `<h5>Error`;
            }
                       
            let firstMessage = null;
            if (selectedLanguage === '1' || selectedLanguage === '0') {
               document.getElementById('paraf').innerHtml =`<p>Those who are on the spiritual path and thinking of kundalini awakening should meditate every single day. I suggest that you listen to the solfeggio 258 for more than an hour specially during the meditation</p>`;
            } else if (selectedLanguage === '2' || selectedLanguage === '3' ) {
                document.getElementById('paraf').innerHtml =`<p>Those who are on the spiritual path and thinking of kundalini awakening should meditate every single day. We know that you meditate more than 3 days a week and that is very good. But you will have a long way to go to reach consciousness. Therefore, we suggest that you try and meditate every day. Do not forget to walk in nature.</p>`;
            } 
            let secondMessage = null;
            if (secondResult <= '1') {
                document.getElementById('LifePath').innerHtml = `<p>It is true that with the onset of kundalini awakening meditation, your desire to eat healthier foods will increase. But from now on, try and replace healthy foods with healthy ones. Because another important thing for spiritual awakening is to cleanse the body of negative energies. When you eat meat, the negative energies in the meat cells inadvertently enter your body and eventually form your cells. In this case, the process of your spiritual awakening will be extremely slow. Therefore, we suggest that you reduce meat consumption to a minimum from now on.</p>`;
            } else if (secondResult >= '2') {
                document.getElementById('LifePath').innerHtml = `<p>As you know, when you eat meat, the negative energies of the meat cells inadvertently enter your body and eventually form your cells. But you avoid these negative energies because you avoid eating meat, so the only thing that can affect your frequency and energy is other people, as well as your own actions. In general, you are on the right path and kundalini meditation will help you more.</p>`;
            }
            let thirdMesssage = null;
            if (thirdResult === '0') {
                document.getElementById('FriendTyper').innerHtml = `<p> You live in an apartment. This means that you have less chance of connecting to the earth. So you should go to nature more than once a week. Just walking is not enough. Sit on the floor. Caress the flowers and hold the soil in your fist. I suggest that you listen to the solfeggios 174 and 963 for more than an hour during the day<p>`;
            } 
            let forthMessage = null;
            if (forthResult === '4') {
                document.getElementById('Hollycheck').innerHTML = `<p>You have to keep in mind that when others show a strong desire to communicate with you, it means that your true self is more awake than others, and this is what their consciousness receives and they are drawn to you like a magnet. They get your energy and it makes them feel good. In this case, you should show a greater desire to be in the crowd. I suggest that you listen to the solfeggios 417 for more than an hour during the day </p>`;
            }
            let fifthMessage = null;
            if (fifthResult >= '3') {
                document.getElementById('result').innerHTML = `<p>You see repeating numbers. This is a strong sign that your consciousness is at a higher level than an ordinary human being. So do more meditation to be able to control your mind. Carefully monitor recurring numbers and use their guidance in your life and spiritual awakening process. By searching these numbers on our website you can understand the meaning of repeating numbers. I suggest that you listen to the solfeggios 963 and 528 for more than an hour during the day</p>`;
            } else if (fifthResult === '2') {
                document.getElementById('result').innerHTML = `<p>You see the number 0606 over and over again, it is a strong sign that your awareness is at a higher level than an ordinary human being. But it shows that you are too dependent on someone or something. And this is while you are ignoring the force within you. Now you have to balance your life again. The number 0606 indicates that you are overly concerned about material things right now, while you need to think more about your path to consciousness. In this case, your material needs will be met. The number 0606 here also tells you that if you let go of everything and know yourself and love others, all paths will be smooth for you. This is where your bad habits go away. We suggest that you practice Focus Meditations more than any other meditation.</p>`;
            }
            let sixthMessage = null;
            if (sixResault >= '3') {
                document.getElementById('sexTh').innerHTML = `<p>We believe that man is stuck in this life cycle, and comes back to life again and again. So the question is, can a person remember his past life? The fact is that if you move towards spiritual awakening, the domination of the material world and the material body over you will become less and less. And far more and more your true power grows. So in simple terms, the dreams you have are not ordinary and are somehow tied to your past. The past that may tell the future. So focus more on your spiritual practice so you can get the message clearer. Meditating and listening to pleasant music before going to bed will help you a lot. I suggest that you listen to the solfeggio 741 for more than an hour during the day</p>`;
            }
            let seventhMessage = null;
            if (sevenResaulet === '-2') {
                document.getElementById('numberseven').innerHTML = `<p>We suggest that you wake up early in the morning (Brahma Muhurta time) and do a few minutes of meditation before starting your daily routine. This is the best time to meditate, learn and understand. I suggest you to play solfeggio 852 durring Brahma Muhurta</p>`;
            } else if (sevenResaulet === '2') {
                document.getElementById('numberseven').innerHTML = `<p>We realized that you are very interested in the material world, and we also realized that you are more awake than you think. Now is the time to make a change in your life. Do not forget to wake up early in the morning and focus more on the Sacral Chakra while meditating.</p>`;
            }
            let tenMessage = null;
            if (tenResault <= '0') {
                document.getElementById('numberEight').innerHTML = `<p>Another thing you are weak at is controlling your mind. So you need to do more meditation on mind control and focus. focused attention meditation(FAM) may be a good starting point for you.</p>`;
            }
            let twelvMessage = null;
            if (twelResault >= '0') {
                document.getElementById('numberNine').innerHTML = `<p>We also suggest that you do Courage Meditation for 3 weeks, every day because it trains the mind to let go of fear and gives you the power to pursue things that are important to you.</p>`;
            }
            let sixtheenMessage = null;
            if (sixtheenResault === '-1') {
                document.getElementById('numberTen').innerHTML = `<p>We noticed that you spend little time in nature. This means that you have less chance of connecting to the earth. The natural environment is rich in prana, or the primordial life force that sustains all life. And this life force is one of our most important weapons for spiritual awakening. So you should go to nature more than once a week. Do not forget: just walking is not enough. Sit on the floor. Caress the flowers and hold the soil in your fist.</p>`;
            }
            
            letType.style.display = 'block';
            
        } else {
            typewriter('You missing some answers. You must answer all the questions'); 
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
    const formSixteen = document.getElementById('sixteenForm');

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
    } 
  }
  
