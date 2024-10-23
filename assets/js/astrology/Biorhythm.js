
function calculateBiorhythm(birthDate, currentDate, cycle) {
    const birthTime = birthDate.getTime();
    const currentTime = currentDate.getTime();
    const diffInDays = Math.floor((currentTime - birthTime) / (1000 * 60 * 60 * 24));
    const cyclePosition = Math.sin(2 * Math.PI * (diffInDays % cycle) / cycle);
    return cyclePosition;
}

document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if (dob == "Invalid Date") {
        alert("Please enter a valid date.");
        return;
    }
    document.getElementById('zodiacForm').style.display= 'none';
    // Calculate biorhythms
    const physical = calculateBiorhythm(dob, today, 23);
    const emotional = calculateBiorhythm(dob, today, 28);
    const intellectual = calculateBiorhythm(dob, today, 33);

    let physicalText = 'null';
    if (physical.toFixed(2) === '1.00') {
        physicalText = 'This means you are at the peak of your physical condition. At this time you may feel energetic, strong and full of vitality.';
    } else if (physical.toFixed(2) > 0 && physical.toFixed(2) < 1) {
        physicalText = 'Since your physical rhythm is close to the peak, you may feel energized, strong, and full of vitality. However, you are in good point now.';
    } else if (physical.toFixed(2) === '0.00') {
        physicalText = 'Your physical rhythm is at a transition point. This means: Your energy level is neutral - neither high nor low';
    } else if (physical.toFixed(2) > -1 && physical.toFixed(2) < 0) {
        physicalText = 'Your physical rhythm is at a is close to the low end, it means your physical energy is currently quite low, and it might be a good idea to rest, avoid strenuous activities, or simply be mindful of your energy levels.';
    } else if (physical.toFixed(2) === '-1.00') {
        physicalText = 'Low physical condition. You may feel fatigued, weak, or less physically capable than usual';
    } else {
        physicalText = 'There is a Error to fetch data. please contact us to report problem. Error no: 111'
    }
    let EmotionText = 'null';
    if (emotional.toFixed(2) === '1.00') {
        EmotionText = 'You are at peak emotional state. You are likely to be emotionally strong, positive, creative, and emotionally flexible. Note that now is a great time for social interactions, relationships, and artistic or creative work.';
    } else if (emotional.toFixed(2) > 0 && emotional.toFixed(2) < 1) {
        EmotionText = 'Since you are close to peak emotional state, you are likely to be emotionally strong, positive, creative, and emotionally flexible. Note that now is a great time for social interactions, relationships, and artistic or creative work';
    } else if (emotional.toFixed(2) === '0.00') {
        EmotionText = 'You are at  Transition point. This is a neutral phase where you are neither highly emotional nor low. It is a balanced state where your emotions are stable. Now is a good time to approach emotional or personal decisions with a clear head.';
    } else if (emotional.toFixed(2) > -1 && emotional.toFixed(2) < 0) {
        EmotionText = 'Since You are close to low emotional state. This suggests that you are in a somewhat low emotional phase, indicating you might be more sensitive or moody than usual, but not at the lowest point. It is a good idea to avoid emotionally charged situations or take extra care of your mental and emotional health.';
    } else if (emotional.toFixed(2) === '-1.00') {
        EmotionText = 'You are at low emotional state. You may feel emotionally drained, moody, sensitive, or less emotionally resilient. It could be a time of lower emotional stability or mood swings. During this phase, it’s best to be mindful of your emotional well-being, avoid stressful situations, and focus on self-care.';
    } else {
        EmotionText = 'There is a Error to fetch data. please contact us to report problem. Error no: 112'
    }
    let intelegText = 'null';
    if (intellectual.toFixed(2) === 'ß') {
        intelegText = 'You are at peak intellectual state. You are likely to experience heightened mental clarity, sharpness, problem-solving abilities, and focus. This is an excellent time for activities that require analysis, learning, strategizing, and decision-making.';
    } else if (intellectual.toFixed(2) > 0 && intellectual.toFixed(2) < 1) {
        intelegText = 'Since you are close to peak intellectual state, you are likely to experience heightened mental clarity, sharpness, problem-solving abilities, and focus. This is an excellent time for activities that require analysis, learning, strategizing, and decision-making';
    } else if (intellectual.toFixed(2) === '0.00') {
        intelegText = 'You are at transition point. This is a neutral intellectual phase where your cognitive abilities are balanced, neither particularly high nor low. It’s a good time for routine mental tasks that don’t require extreme focus or problem-solving skills.';
    } else if (intellectual.toFixed(2) > -1 && intellectual.toFixed(2) < 0) {
        intelegText = 'Since You are close to low intellectual state. This value suggests that you are currently in a low intellectual phase, meaning that your mental sharpness, memory, and problem-solving abilities may be somewhat reduced. You might find tasks requiring concentration more challenging than usual. It’s a good time to focus on routine or less cognitively demanding work.';
    } else if (intellectual.toFixed(2) === '-1.00') {
        intelegText = 'You are at low intellectual state. During this phase, you might find it harder to concentrate, think critically, or process complex information. It may be beneficial to avoid mentally demanding tasks or make important decisions. Instead, focus on less intellectually intensive activities, allowing your mind to rest.';
    } else {
        intelegText = 'There is a Error to fetch data. please contact us to report problem. Error no: 113'
    }
    // Display the results
    const resultText = `
     <div>
                    <article>
                        <h3>
                            Physical ryhthm
                        </h3>
                        <footer class="card-footer" >
                            <p>Your Physical Biorhythm is: <span style='color:orange'>${physical.toFixed(2)}</span> . <br> ${physicalText} </p>
                        </footer>
                    </article>
                    <article>
                        <h3>
                            Emotional Biorhythm
                        </h3>
                        <footer class="card-footer" >
                            <p>Emotional Biorhythm: <span style='color:green'> ${emotional.toFixed(2)}</span>. <br> ${EmotionText} </p>
                        </footer>    
                    </article>
                    <article>
                        <h3>
                            Intellectual Biorhythm
                        </h3>
                        <footer class="card-footer" >
                            <p>Intellectual Biorhythm: <span style='color:pink'> ${intellectual.toFixed(2)}</span>. <br> ${intelegText} </p>
                        </footer>                           
                    </article>
                </div>`;
    
    document.getElementById('BioCards').innerHTML = resultText;
    chart(physical.toFixed(2), emotional.toFixed(2), intellectual.toFixed(2) )
});



function chart(one, two, three) {
document.getElementById('newChart').style.display = 'block';

const xValues = [0,16.5,33];

new Chart("newChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: [0,one,0],
        borderColor: "orange",
        fill: false
      }, { 
          data: [0,two,0],
        borderColor: "green",
        fill: false
      }, { 
          data: [0,three,0],
        borderColor: "pink",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });
  
}
  