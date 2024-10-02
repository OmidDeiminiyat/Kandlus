

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
    form.style.display = 'none';
    document.getElementById('ForType').style.display = 'none';
    document.getElementById('typenswer').style.display = 'block';
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
if (mostClicked === 'A') {
    document.getElementById('WhatZ').innerHTML = `<p>After reviewing your answers, Kandlus came to the conclusion that you have excellent sleep habits, with minimal disruptions. So there is nothing I can suggest to improve your sleep quality. </p>`;
} else if (mostClicked === 'B') {
    document.getElementById('WhatZ').innerHTML = `<p> After reviewing your answers, Kandlus came to the conclusion that your sleep quality is good, but there may be occasional disruptions. I would suggest the following recommendations to maintain and improve sleep quality:</p>`;
    document.getElementById('paraf').innerHTML = `<li> Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body’s internal clock and can improve sleep quality over time. </li>
    <li> Ensure your bedroom is cool, quiet, and dark. These conditions are ideal for quality sleep. </li> <li>Avoid consuming caffeine (coffee, tea, energy drinks) or nicotine in the late afternoon or evening, as they can interfere with your ability to fall asleep and stay asleep.</li><li>Try relaxation techniques such as deep breathing, meditation, or gentle yoga before bed to help you wind down. <a href="https://kandlus.net/Astrology/Radical_number.html"> Click Here </a> to find out what meditation and yoga is right for you </li>
    <li>Regular physical activity can promote better sleep, but try not to exercise within a few hours of bedtime, as it can leave you feeling too energized to fall asleep.</li> <li>Avoid large meals, heavy or spicy foods, and alcohol close to bedtime. These can cause indigestion or discomfort that may disrupt sleep.</li>
    <li>Light snacks, like a small serving of nuts or a banana, may help if you're feeling hungry before bed. </li> <li>If disruptions occur frequently, it’s important to identify their cause (e.g., stress, health conditions, lifestyle habits). You may want to monitor your sleep patterns with a sleep journal or consider consulting a healthcare provider if the disruptions persist.</li>
    <li>Establish a calming pre-sleep routine that signals to your body it's time to sleep. This could include activities like reading, listening to calming music, or taking a warm bath.</li>`;
} else if (mostClicked === 'C') {
    document.getElementById('WhatZ').innerHTML = `<p>After reviewing your answers, Kandlus came to the conclusion that you experience moderate issues with sleep, and could benefit from improving sleep hygiene or routines. I would suggest the following recommendations to maintain and improve sleep quality:</p>`;
    document.getElementById('paraf').innerHTML = `<li>Go to bed and wake up at the same time every day, even on weekends. Irregular sleep patterns can confuse your body's internal clock, making it harder to fall asleep or wake up feeling refreshed. </li><li>Long naps, especially in the afternoon, can interfere with nighttime sleep. If you need to nap, keep it under 20-30 minutes and avoid napping late in the day.
 </li> <li> Keep your bedroom quiet, dark, and cool. Consider blackout curtains, earplugs, or a white noise machine to block out any disturbances. Do not forget that use your bed only for sleep and relaxation (not for working, watching TV, or using your phone)</li><li>The blue light emitted by phones, tablets, and computers interferes with melatonin production, a hormone that regulates sleep. Turn off screens at least 30-60 minutes before bed.</li>
 <li>Avoid engaging in stressful conversations or stimulating activities before bed. </li> <li>Avoid caffeine, nicotine, and alcohol in the evening. Caffeine and nicotine are stimulants that can delay your sleep onset. While alcohol may make you feel sleepy initially, it disrupts sleep later in the night. </li><li>Exercise is great for promoting deep sleep, but avoid vigorous exercise within 2-3 hours of bedtime. Aim for moderate exercise like walking or stretching earlier in the day. </li>
 <li>Avoid large meals, spicy or acidic foods, and heavy snacks right before bed, as they can cause indigestion and disrupt your sleep. Instead, opt for a light snack if you’re hungry before sleep. </li><li>Practice stress management techniques such as deep breathing exercises, progressive muscle relaxation, or journaling before bed to help calm your mind. </li>
 <li> Keep a sleep journal to track your sleep habits, what you did before bed, and how rested you feel. This can help you identify patterns or specific issues causing your sleep disruptions. </li><li> If sleep issues persist despite lifestyle changes, consult a healthcare provider. Sleep disorders like insomnia, sleep apnea, or restless legs syndrome may require treatment or intervention.</li>
 <li>Stimulants like caffeine (in coffee, tea, soda, and chocolate) and nicotine can keep you awake. Try to avoid these for at least 4-6 hours before bedtime. </li> <li>Techniques such as guided meditation, deep breathing, or progressive muscle relaxation can calm the mind and body, making it easier to fall asleep. </li> <li> Limit Fluid Intake Before Bed: Reduce how much you drink in the evening to prevent waking up in the middle of the night to go to the bathroom. </li> `
} else if (mostClicked === D) {
    document.getElementById('WhatZ').innerHTML = `<p>After reviewing your answers, Kandlus came to the conclusion that your sleep quality is poor, and you may benefit from consulting a healthcare professional or making significant lifestyle changes. I would suggest the following recommendations to maintain and improve sleep quality: </p>`
    document.getElementById('paraf').innerHTML = `<li>Since your sleep quality is significantly affected, the first priority should be consulting a healthcare professional. Chronic sleep issues may indicate underlying conditions such as insomnia, sleep apnea, restless legs syndrome, or mental health conditions like anxiety or depression. </li> <li> onditions like sleep apnea, where breathing repeatedly stops and starts during sleep, or chronic insomnia may require medical evaluation. If snoring, gasping for breath during sleep, or daytime fatigue are present, a sleep study may help diagnose underlying issues.</li>
    <li>Establish a regular sleep schedule: Go to bed and wake up at the same time every day, even on weekends, to help regulate your internal clock. Improve your sleep environment: Ensure your bedroom is dark, quiet, and cool. Consider blackout curtains, earplugs, or white noise machines to minimize disturbances.</li> <li> Poor sleep quality is often linked to stress, anxiety, and other mental health concerns. Managing stress through therapy, meditation, or relaxation techniques is critical. </li>
    <li>Avoid caffeine, nicotine, and alcohol in the afternoon and evening. Caffeine and nicotine are stimulants that can keep you awake, while alcohol may help you fall asleep initially but disrupts the quality of sleep. Cut back on heavy meals, spicy foods, and large amounts of fluid before bedtime to avoid indigestion and minimize bathroom trips during the night. </li> <li>Developing a wind-down routine before bed helps signal to your body that it’s time for sleep. Engage in calming activities like reading, light stretching, or deep breathing. Avoid screens and stressful activities before bed. Meditation, mindfulness exercises, or progressive muscle relaxation can help reduce mental tension before sleep. </li>
    <li>Ensure your bed is comfortable and supportive. If your mattress or pillows are old or uncomfortable, consider replacing them. </li> <li>Regular physical activity can help improve sleep quality. However, avoid vigorous exercise close to bedtime, as it can make it harder to fall asleep. Gentle exercises like yoga or stretching in the evening can promote relaxation. <a href="https://kandlus.net/Astrology/Radical_number.html"> Click Here </a> to find out what meditation and yoga is right for you </li> <li>Your sleep position can affect the quality of your rest, especially if you experience discomfort or snoring. Sleeping on your back or side with proper pillow support may help with breathing and spinal alignment. </li>
    <li> If you're struggling with sleep at night, avoid long daytime naps. Short naps (15-30 minutes) earlier in the day can be refreshing, but long or late naps may interfere with nighttime sleep. </li><li>Blue light from phones, computers, and TVs can interfere with melatonin production, making it harder to fall asleep. Limit screen time at least 1-2 hours before bed, or use blue-light blocking glasses or apps that adjust the screen's light settings. </li> <li>Avoid relying on over-the-counter or prescription sleep medications unless recommended by a healthcare provider. While they may help in the short term, long-term use can cause dependency and worsen sleep issues. </li> <li>Keep a sleep journal to track your sleep habits, patterns, and how you feel during the day. This can help identify problem areas and provide useful information if you seek medical help. </li>`
}
}

typewriter('A Sleep Quality Quiz is a tool or assessment designed to evaluate various aspects of your sleep patterns, habits, and overall quality of sleep. It typically includes questions that focus on factors such as: Sleep Duration, Sleep Onset, Sleep Interruptions, Sleep Environment, Daytime Sleepiness and so on. In short, a Sleep Quality Quiz offers valuable insights into how well you sleep and provides actionable steps to improve your sleep health, which in turn impacts overall well-being.', 20);

function typewriter(text, speed) {
    let index = 0; 
    const container = document.getElementById('ForType'); 

    function type() {
        if (index < text.length) {
            container.textContent += text.charAt(index); 
            index++; 
            setTimeout(type, speed); 
        }
    }

    type(); // Start typing
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
  
