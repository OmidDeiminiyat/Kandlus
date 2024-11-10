document.addEventListener('DOMContentLoaded', (event) => {
    const PersonBirthday = document.getElementById('pBirth');
    // Change date format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    PersonBirthday.value = `${year}-${month}-${day}`;
  });
  
  
  document.getElementById("zodiacForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const AscenForm = document.getElementById('zodiacForm');
    AscenForm.style.display = 'none';
    const loadDote = document.getElementById('loading');
    loadDote.style.display= 'flex';
    const mainCard = document.getElementById('newAscendant');
    mainCard.style.display = 'flex';
   

    const PersonBirthday = document.getElementById('pBirth').value;
    const time = document.getElementById('timeBirth').value;
    const countries = document.getElementById('countries').value;
    const [year, month, day] = PersonBirthday.split('-');
    const Dates = `${day}/${month}/${year}`;
  
  
    var select = document.getElementById("countries");
    var value = select.value; // Get the selected option value
    var coordinates = value.split(','); // Split the value into an array
    var latitude = coordinates[0]; // Get the latitude
    var longitude = coordinates[1]; // Get the longitude
  

    const userData = {
      Dates: Dates,
      time: time,
      latitude: latitude,
      longitude: longitude,
    };
  
    // Send the JSON data to the backend (e.g., to control.php)
    const response = await fetch("../backend/ascendant.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // Convert the userData object to JSON format
    });
  
    // Handle the response from the server
    const result = await response.json(); // Assuming the backend sends JSON back
    console.log(result);
    CharacterDataSend(result)
    if (result.success) {
      //console.log('');
      
    } else {
      
    }
  });
  
  
  function CharacterDataSend(recivedAscendant) {
    
    const mainCard = document.getElementById('newAscendant');

    const asseLoading = document.getElementById('loading');
    asseLoading.style.display = 'none';

    mainCard.innerHTML = '';
    const DataL = recivedAscendant.characterData.response;
    console.log(DataL);
    asseLoading.style.display = 'none';
    let insideMainCard = `<div class="AsFiDiv">
                            <h3>General Prediction</h3>
                            <p>${DataL[0].general_prediction}</p>
                            <h3>Personalised Prediction</h3>
                            <p>${DataL[0].personalised_prediction}</p>
                            <div class="wheel-container">
                                <img src="./../assets/images/Astrology/Ascendant/Zodiac-Wheel.png" alt="Zodiac Wheel" class="wheel-image">
                            </div>
                        </div>
                        <div class="AsSecDiv" >
                            <h1>${DataL[0].ascendant}</h1>
                            <section class="inAsSecDiv">
                                <div class="firstInD" >
                                    <figure>
                                        <img src="./../assets/images/Astrology/ZodiacSigns/${DataL[0].ascendant}.png" alt="">
                                    </figure>
                                    <div class="ThreeLowerColum">
                                        <article>
                                            <span class="material-symbols-outlined"> sentiment_satisfied </span>
                                            <p><span> Good qualities: </span> ${DataL[0].good_qualities}</p>
                                        </article>
                                        <article>
                                            <span class="material-symbols-outlined"> sentiment_dissatisfied </span>
                                            <p><span> Bad qualities: </span>${DataL[0].bad_qualities}</p>
                                        </article>
                                        <article>
                                            <span class="material-symbols-outlined"> comedy_mask </span>
                                            <p><span> Zodiac characteristics </span> ${DataL[0].zodiac_characteristics}</p>
                                        </article>
                                    </div>
                                    <div class="secondInD">
                                        <article>
                                        <span class="material-symbols-outlined"> emoji_people </span>
                                            <p><span> Flagship qualities </span> ${DataL[0].flagship_qualities} </p>
                                        </article>
                                        <article>
                                            <span class="material-symbols-outlined"> self_improvement </span>
                                            <p><span> Your mantra: </span> ${DataL[0].gayatri_mantra} </p>
                                        </article>
                                    </div>
                                </div>
    
                                <div class="secondDivBig">
                                    <figure>
                                        <div class="mars"></div>
                                        <img src="./../assets/images/Astrology/planets/${DataL[0].ascendant_lord}.png" alt="">
                                    </figure>
                                    <article>
                                        <h4>Ascendant lord: ${DataL[0].ascendant_lord} </h4>
                                        <p>The ruling planet (${DataL[0].ascendant_lord}), lord of the Ascendant is located in the ${DataL[0].ascendant_lord_house_location} house (${DataL[0].ascendant_lord_location}) in this particular chart. </p>
                                    </article>
                                    <article>
                                        <h5>Ascendant lord strength:</h5>
                                        <p>${DataL[0].ascendant_lord_strength}</p>
                                         <h5>Lucky gem: </h5>
                                        <p>${DataL[0].lucky_gem}</p>
                                        <h5>Day for fasting: </h5>
                                        <p>${DataL[0].day_for_fasting}</p>
                                    </article>
                                </div>
                            </section>
                          
                        </div>`
      
  mainCard.innerHTML = insideMainCard;
    typewriter('First, remember that at the time and place of your birth, each of the planets was in the house of one of the zodiac signs. And since these have a direct impact on human personality, there are between 7 and 12 possibilities that together form your overall personality. In some cases, a person may have two personalities. Here are all the possibilities in order according to the presence of each planet in each house. Notice that:The most important issue in every house is the lord strength. Because it determines the degree of formation of a person personality compared to other 11 houses.', 12); 
  
  }
  
  
  
  
  function typewriter(text, speed) {
    let index = 0; 
    const IntroText = document.getElementById('introPer');
    IntroText.innerText = '';
    function type() {
        if (index < text.length) {
          IntroText.textContent += text.charAt(index); 
            index++; 
            setTimeout(type, speed); 
        }
    }
  
    type(); // Start typing
  }