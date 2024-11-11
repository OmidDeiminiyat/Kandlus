

// Function to get cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


async function fetchSubscribeData() {  
  try {
      const response = await fetch('../backend/data.php');  // Call the PHP file
      const data = await response.json();

      const ExisCooki = getCookie('Kandlus-users');
      let filteredData = null;
      filteredData = data.filter(item => item.Code === ExisCooki);
      if (filteredData != null) {

        directUser(filteredData);
        console.log(filteredData);
        
      } else {
        console.log('No data found or unexpected data format.');
      }  
  } catch (error) {
      console.error('Error fetching subscribe data:', error);
  }
}

const CheckU = getCookie('Kandlus-users');

if (CheckU) {
  fetchSubscribeData();
} else {

}

var url = window.location.search.substring(1);
var vars = url.split("=");
const id = vars[1];



if (id === '372821Dy') {
    typewriter('Type of physical yoga tells you the most suitable yoga exercises according to the position of the planets at the time of your birth and can teach you yoga at the same time. Enter your birthday information in the form. Then we will tell you the yogas that are suitable for you. Click on the read more button to read more about the recommended yoga. If you want, you can click on the start to enter the training page. Here you can click on the play button and do the exercise according to the pictures and the duration of each pose. If you want, you can activate the sound.', 12); 
    document.getElementById('VideoToturial').innerHTML = '<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1017231067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Type of Yogas"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
} else if (id === '53T936Bio33') {
  typewriter('Biorhythms suggests that human behavior is influenced by three cyclical rhythms: physical, emotional, and intellectual. These cycles are believed to start at birth and continue throughout life, influencing everything from energy levels to mood and mental acuity. By understanding your cyclical patterns, you can optimize your activities and avoid periods of low energy or negative moods. To use this service, enter the biorhythm page. Complete the biorhythm form. Then, by calculating the time and location of your birth, Kandalus will tell you your biorhythm cycle', 12);
  document.getElementById('VideoToturial').innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1017672698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Biorythem"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
} else if (id === 'Per65eS432') {
  typewriter('Personal characteristics, in the context of astrology, are often associated with a person birth chart, which is based on the positions of the planets at the exact time, date, and place of birth. Astrologers believe these planetary positions can influence a person personality traits, behaviors, and life tendencies.', 12); 
  document.getElementById('VideoToturial').innerHTML = '<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1017231067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Type of Yogas"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
} else if (id === 'A74Se0093nK3') {
  typewriter('The Ascendant, also known as the "rising sign," is a fundamental concept in astrology that plays a key role in shaping an individual personality and approach to life. While the Sun sign in astrology often takes the spotlight, the Ascendant provides unique insight into how a person presents themselves to the world, their initial reactions, and the way others perceive them. To learn how Ascendant works whatch video below.', 12);
  document.getElementById('VideoToturial').innerHTML = '';
} else if (id === 'Nu993boe4') {
  typewriter('In astrology, the concept of a "Personal Day Number" is more commonly associated with numerology than traditional astrology. Numerology assigns a number to each day of the month to give insight into the day’s energy and how it might influence you personally. This "Personal Day Number" is calculated by summing specific numbers from your birth date, current month, and year.', 12);
  document.getElementById('VideoToturial').innerHTML = '';
}
function directUser(item) {
    console.log(item[0].Plan);
    
    if (id === '372821Dy' && item[0].Plan === '9dyhf3Ds') {
        document.getElementById('link').innerHTML = `<div class="col-md-3 mt-2"> <button type="submit" class="btn btn-info btn-block"><a href="PhysicalYoga.html"> Try Yoga Now </a></button> </div>`;
    }  else if (id === '53T936Bio33' && item[0].Plan === '9dyhf3Ds' || item[0].Plan === '663idsmS98pR') {
      document.getElementById('link').innerHTML = `<div class="col-md-3 mt-2"> <button type="submit" class="btn btn-info btn-block"><a href="Biorythm.html"> Try Biorhythms Now </a></button> </div>`;
    } else if (id === 'Per65eS432' && item[0].Plan === '9dyhf3Ds' || item[0].Plan === '663idsmS98pR') {
      document.getElementById('link').innerHTML = `<div class="col-md-3 mt-2"> <button type="submit" class="btn btn-info btn-block"><a href="Characteris.html"> Try Personal Characteristics </a></button> </div>`;
    } else if (id === 'A74Se0093nK3' && item[0].Plan === '9dyhf3Ds' || item[0].Plan === '663idsmS98pR') {
      document.getElementById('link').innerHTML = `<div class="col-md-3 mt-2"> <button type="submit" class="btn btn-info btn-block"><a href="ascendant.html"> Try Ascendant </a></button> </div>`;
    } else if (id === 'Nu993boe4' && item[0].Plan === '9dyhf3Ds' || item[0].Plan === '663idsmS98pR') {
      document.getElementById('link').innerHTML = `<div class="col-md-3 mt-2"> <button type="submit" class="btn btn-info btn-block"><a href="Numerology.html"> Try Personal Day Number </a></button> </div>`;
    }  else {
      document.getElementById('link').innerHTML = `<p> To use this service, you must be sign up and subscribe to the plan: Pro or Standard. <a href="../price.html"> Sign up now </a> </p>`;
  }
} 





function typewriter(text, speed) {
    let index = 0; 
    const container = document.getElementById('paraf'); 
  
    function type() {
        if (index < text.length) {
            container.textContent += text.charAt(index); 
            index++; 
            setTimeout(type, speed); 
        }
    }
  
    type(); // Start typing
  }


// Import the Supabase library
