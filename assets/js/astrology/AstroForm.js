function submitForm(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
 
   
    const Bname = document.getElementById("bName");
    const dateB = document.getElementById("bDate").value;
    const tiB = document.getElementById("bTime");
    const CounB = document.getElementById("bCountry");
    const ZoneB = document.getElementById("bZone");
    const NGit = document.getElementById("girlName");
    const datGir = document.getElementById("girlDate").value;
    const tiG = document.getElementById("girlTime");
    const CounG = document.getElementById("girlCountry");
    const ZonG = document.getElementById("girlZone");
    

    const [year, month, day] = dateB.split('-');
    const Bdate = `${day}/${month}/${year}`;

    const [yearGirl, monthGirl, dayGirl] = datGir.split('-');
    const Girldate = `${dayGirl}/${monthGirl}/${yearGirl}`;

    const BMontBoZod = `${month}`;
    const BDayZod = `${day}`;

    const GMZod = `${monthGirl}`;
    const GDZod = `${dayGirl}`;

  const name = Bname.value;
  const Btime = tiB.value;
  const Bcountry = CounB.value;
  const Bzone = ZoneB.value;
  const Girlname = NGit.value;
  const Girltime = tiG.value;
  const Girlcountry = CounG.value;
  const Girlzone = ZonG.value
    

  
  var coordinates = Bcountry.split(','); 
  var BoyLat = coordinates[0]; 
  var Boylong = coordinates[1]; 

  var girCordinant = Girlcountry.split(','); 
  var GirlLang = girCordinant[0]; 
  var GkirlLong = girCordinant[1]; 



    if (name) {
       callForZodiac(BMontBoZod, BDayZod, GMZod, GDZod);
        fetchTwoHoroscopeData(name, Bdate, Btime, BoyLat, Boylong, Bzone, Girlname, Girldate, Girltime, GkirlLong, GirlLang, Girlzone);
    } else {
        alert("Please select a zodiac sign.");
    }
}





async function fetchTwoHoroscopeData(boyN, boyD, boyT, LangB, LongB, boyZone, girlN, girlDate, girlT, LangGirl, LongGirl, girlZ) {
  console.log(boyD);
  
  const charUrl1 = 'https://api.vedicastroapi.com/v3-json/extended-horoscope/numero-table';
  const MyParams1 = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "name": boyN,
    "dob": boyD,
    "tob": boyT,
    "lat": LangB,
    "lon": LongB,
    "tz": boyZone,
    "lang": "en"
  });

  const charUrl2 = 'https://api.vedicastroapi.com/v3-json/extended-horoscope/numero-table';
  const MyParams2 = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "name": girlN,
    "dob": girlDate,
    "tob": girlT,
    "lat": LangGirl,
    "lon": LongGirl,
    "tz": girlZ,
    "lang": "en"
  });

  try {
 
    const [response1, response2] = await Promise.all([
      fetch(`${charUrl1}?${MyParams1}`),
      fetch(`${charUrl2}?${MyParams2}`)
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);

    Dating(data1, data2, boyN, girlN)
    // Return or use the data as needed
    return { data1, data2 };

  } catch (error) {
    console.error('Error fetching data from APIs:', error);
  }
}

function Dating(item1, item2, name1, name2) {
  const ZodicF = document.getElementById('zodiacForm');
  const showAnswer = document.getElementById('typenswer');
  showAnswer.style.display = 'block';
  ZodicF.style.display = 'none';
  console.log(item1.response.characteristics);
  const charac = item1.response.characteristics;
  const chracTwo = item2.response.characteristics;

  const destiny = item1.response.evil_num;
  const griddestiny = item2.response.destiny;

  const friendly = item1.response.friendly_num;
  const GirlFriendly = item1.response.friendly_num;


const values1 = Object.values(friendly); 
const values2 = Object.values(GirlFriendly); 

// Find common numbers
const commonNumbers = values1.filter(value => values2.includes(value));
const friendCalculate = commonNumbers.length * 100 / values1.length;

console.log('Friend calculate: ' + friendCalculate + ' %');

if (friendCalculate >= '40') {
  friendType(`Your friendly numbers are ${friendCalculate} % match. It represents the deepest desires and motivations. It can increase the level of emotional connection and understanding between you on the path of life.`, 13);
} else { friendType(`Your friendly numbers are ${friendCalculate} % even. This is not a good sign to choose to be a companion on a long journey.`, 9);

}

 const boyName = item1.response.name_number;
 const girlName = item1.response.name_number;
 let HollyN = '';
 let GirlH = '';
 let MatrixBoy = '';
 let MatrixGirl = '';
 if (boyName === 3 || boyName === 6 || boyName === 9) {
  HollyN = 'Holy';
 } 
 if (girlName === 3 || girlName === 6 || girlName === 9) {
  GirlH = 'Holy';
 }

 if (boyName === 1 || boyName === 2 || boyName === 4 || boyName === 5 || boyName === 7 || boyName === 8) {
  MatrixBoy = 'Matrix';
 } 
 if (girlName === 1 || girlName === 2 || girlName === 4 || girlName === 5 || girlName === 7 || girlName === 8) {
  MatrixGirl = 'Matrix';
 } 

 
 if (HollyN === GirlH) {
  console.log('they are holly');
  HollyWrite(`Numerologically, your names ${name1} and ${name2} are paired with each other. When you call each other by your birth name, your brain reacts positively to the received frequencies and the hormone that is released increases the love and affection between you.`, 14);
  
 } else if (MatrixBoy === MatrixGirl) {
  console.log('they are Matrix');
  HollyWrite(`Numerologically, your names ${name1} and ${name2} are paired with each other. When you call each other by your birth name, your brain reacts positively to the received frequencies and the hormone that is released increases the love and affection between you.`, 14);

 } else {
  console.log('they are not');
  HollyWrite(`Numerologically, your names ${name1} and ${name2} are not paired with each other. Therefore, I suggest you to choose a nickname for yourself and call each other by nicknames in your life. the reason is: when you call each other by your birth name, your brain reacts negative to the received frequencies and the hormone that is released decrease the love and affection between you.`, 16);
 }
  const hasNumberThree = Object.values(destiny).includes(griddestiny);
  
  
if (hasNumberThree === true) {
  console.log('its ' + hasNumberThree);
  NumberType('From the point of view of your life path, you are not a match. This indicates that you may fall into trouble many times in life, but it does not mean that you cannot be fortunate. Therefore, self-sacrifice plays an important role in your success.', 15);
  
} else {
  console.log('it is: ' + hasNumberThree);
  NumberType('From the point of view of your life path, you are match with each other. Therefore, you will be accompanied on the path of life and you will experience the sweets of life.', 12);
}

  console.log(item1.response.characteristics.length);
  
  const commonItems = charac.filter(item => chracTwo.includes(item));
  const characCalcu = commonItems.length * 100 / item1.response.characteristics.length;

  console.log(commonItems.length); 
  if (characCalcu >= '1') {
    typewriter(`In terms of personality, you are ${characCalcu}% match. You are ${commonItems} compatible.`, 12);
  } else {
    typewriter(`In terms of personality, you are a not match`, 6);
  }
}


function typewriter(text, speed) {
  let index = 0; 
  const container = document.getElementById('paraf'); 
  container.innerHTML = '';

  function type() {
      if (index < text.length) {
          container.textContent += text.charAt(index); 
          index++; 
          setTimeout(type, speed); 
      }
  }

  type(); // Start typing
}

function NumberType(text, speed) {
  let index = 0; 
  const lifePath = document.getElementById('LifePath');

  function type() {
      if (index < text.length) {
        lifePath.textContent += text.charAt(index); 
          index++; 
          setTimeout(type, speed); 
      }
  }

  setTimeout(type, 4000); // Start typing
}

function friendType(text, speed) {
  let index = 0; 
  const Friends = document.getElementById('FriendTyper');

  function type() {
      if (index < text.length) {
        Friends.textContent += text.charAt(index); 
          index++; 
          setTimeout(type, speed); 
      }
  }

  setTimeout(type, 6000); 
}

function HollyWrite(text, speed) {
  let index = 0; 
  const Holly = document.getElementById('Hollycheck');

  function type() {
      if (index < text.length) {
        Holly.textContent += text.charAt(index); 
          index++; 
          setTimeout(type, speed); 
      }
  }

  setTimeout(type, 9000); 
}



function callForZodiac(birthMonth, birthDay, girkMonth, GirlDay){
  console.log('day Z:' + birthMonth);
  
  let boyZodiac = '';
  if ((birthMonth === 1 && birthDay >= 20) || (birthMonth === 2 && birthDay <= 18)) {
    boyZodiac = "11";
  } else if ((birthMonth === 2 && birthDay >= 19) || (birthMonth === 3 && birthDay <= 20)) {
    boyZodiac = "12";
  } else if ((birthMonth === 3 && birthDay >= 21) || (birthMonth === 4 && birthDay <= 19)) {
    boyZodiac = "1";
  } else if ((birthMonth === 4 && birthDay >= 20) || (birthMonth === 5 && birthDay <= 20)) {
    boyZodiac = "2";
  } else if ((birthMonth === 5 && birthDay >= 21) || (birthMonth === 6 && birthDay <= 20)) {
    boyZodiac = "3";
  } else if ((birthMonth === 6 && birthDay >= 21) || (birthMonth === 7 && birthDay <= 22)) {
    boyZodiac = "4";
  } else if ((birthMonth === 7 && birthDay >= 23) || (birthMonth === 8 && birthDay <= 22)) {
    boyZodiac = "5";
  } else if ((birthMonth === 8 && birthDay >= 23) || (birthMonth === 9 && birthDay <= 22)) {
    boyZodiac = "6";
  } else if ((birthMonth === 9 && birthDay >= 23) || (birthMonth === 10 && birthDay <= 22)) {
    boyZodiac = "7";
  } else if ((birthMonth === 10 && birthDay >= 23) || (birthMonth === 11 && birthDay <= 21)) {
    boyZodiac = "8";
  } else if ((birthMonth === 11 && birthDay >= 22) || (birthMonth === 12 && birthDay <= 21)) {
    boyZodiac = "9";
  } else {
    boyZodiac = "10";
  }

  let girlZodiac = '';
  if ((girkMonth === 1 && GirlDay >= 20) || (girkMonth === 2 && GirlDay <= 18)) {
    girlZodiac = "11";
  } else if ((girkMonth === 2 && GirlDay >= 19) || (girkMonth === 3 && GirlDay <= 20)) {
    girlZodiac = "12";
  } else if ((girkMonth === 3 && GirlDay >= 21) || (girkMonth === 4 && GirlDay <= 19)) {
    girlZodiac = "1";
  } else if ((girkMonth === 4 && GirlDay >= 20) || (girkMonth === 5 && GirlDay <= 20)) {
    girlZodiac = "2";
  } else if ((girkMonth === 5 && GirlDay >= 21) || (girkMonth === 6 && GirlDay <= 20)) {
    girlZodiac = "3";
  } else if ((girkMonth === 6 && GirlDay >= 21) || (girkMonth === 7 && GirlDay <= 22)) {
    girlZodiac = "4";
  } else if ((girkMonth === 7 && GirlDay >= 23) || (girkMonth === 8 && GirlDay <= 22)) {
    girlZodiac = "5";
  } else if ((girkMonth === 8 && GirlDay >= 23) || (girkMonth === 9 && GirlDay <= 22)) {
    girlZodiac = "6";
  } else if ((girkMonth === 9 && GirlDay >= 23) || (girkMonth === 10 && GirlDay <= 22)) {
    girlZodiac = "7";
  } else if ((girkMonth === 10 && GirlDay >= 23) || (girkMonth === 11 && GirlDay  <= 21)) {
    girlZodiac = "8";
  } else if ((girkMonth === 11 && GirlDay >= 22) || (girkMonth === 12 && GirlDay <= 21)) {
    girlZodiac = "9";
  } else {
    girlZodiac = "10";
  }
  ZodiacDate(boyZodiac, girlZodiac)
  console.log(boyZodiac); 
  console.log(girlZodiac);
  
}



    function ZodiacDate(Boys, Girls){
const newUrl = 'https://api.vedicastroapi.com/v3-json/matching/western-match';
    const params = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "boy_sign": Boys,
      "girl_sign": Girls,
      "lang": "en"
    });
    
    fetch(`${newUrl}?${params.toString()}`, {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(matchData => {
       console.log('match data is:', matchData);
      matchDatas(matchData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

function matchDatas(items) {
const ZodiacSig = document.getElementById('WhatZ');
ZodiacSig.innerHTML = `<p> Zodiac signs are, boy: <span> ${items.response.boy_sign} </span> and girl: <span> ${items.response.girl_sign} </span> </p>`;
 const res = items.response.bot_response;
 resaultType(`In general, according to the above, based on numerology and the position of the stars and planets at the time of your birth, it can be concluded that: ${res}`, 21);

}

function resaultType(text, speed) {
  let index = 0; 
  const Matchresult = document.getElementById('result');

  function type() {
      if (index < text.length) {
        Matchresult.textContent += text.charAt(index); 
          index++; 
          setTimeout(type, speed); 
      }
  }

  setTimeout(type, 12000); 
}



function nexPage() {
  const formOne = document.getElementById('firstForm');
  const formTwo = document.getElementById('secondForm');

  formOne.style.display = 'none';
  formTwo.style.display = 'block';  
}
function BackPage() {
  const formOne = document.getElementById('firstForm');
  const formTwo = document.getElementById('secondForm');

  formOne.style.display = 'block';
  formTwo.style.display = 'none'; 
}