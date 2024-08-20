
function openTable(tableData) {
  const careerTable = document.getElementById('Career');
  const EducationTable = document.getElementById('Education');
  const FinancesTable = document.getElementById('Finance');
  const FriendsTable = document.getElementById('Friends');
  const HealthTable = document.getElementById('Health');
  const RelationshipTable = document.getElementById('Relationship');
  const TravelTable = document.getElementById('Travel');
  const StatusTable = document.getElementById('Status');
  const FamilyTable = document.getElementById('Family');
  const generalCard = document.getElementById('GivGeneral');
console.log(tableData);
  if (tableData == 'Career') {
    careerTable.style.display = 'block';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
    tableData = '';
  } else if(tableData == 'Education') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'block';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';  console.log('Education');
  tableData = '';
  } else if(tableData == 'Family') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'block';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
  
  tableData = '';
  }  else if(tableData == 'Finances') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'block';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
  tableData = '';
  }  else if(tableData == 'Friends') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'block';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
  tableData = '';
  } else if(tableData == 'Health') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'block';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
  tableData = '';
  } else if(tableData == 'Relationship') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'block';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'none';
  tableData = '';
  } else if(tableData == 'Travel') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'block';
    StatusTable.style.display = 'none';
  tableData = '';
  }  else if(tableData == 'Status') {
    careerTable.style.display = 'none';
    generalCard.style.display = 'none';
    EducationTable.style.display = 'none';
    FamilyTable.style.display = 'none';
    FinancesTable.style.display = 'none';
    FriendsTable.style.display = 'none';
    HealthTable.style.display = 'none';
    RelationshipTable.style.display = 'none';
    TravelTable.style.display = 'none';
    StatusTable.style.display = 'block';
  tableData = '';
  } 

} 


const url = 'https://api.vedicastroapi.com/v3-json/prediction/daily-sun';

function zodiacSign(GetZodiac) {
const getMain = document.getElementById('main-section');
const HorosPage = document.getElementById('HorosResult');
HorosPage.style.display = 'grid';
getMain.style.display = 'none';
const Zodiac = GetZodiac;
localStorage.setItem('Zodiac', Zodiac);
const today = new Date();
const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
const day = String(tomorrow.getDate()).padStart(2, '0');
const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
const year = tomorrow.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate);
const params = new URLSearchParams({
  "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
  "date": formattedDate,
  "zodiac": Zodiac,
  "type": "small",
  "lang": "en"
});

fetch(`${url}?${params.toString()}`, {
  method: 'GET'
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => {
 // console.log('Success:', data);
  horoscope(data)
  cartWorker(data)
})
.catch(error => {
  console.error('Error:', error);
});

}


function horoscope(recivedData) {
   // console.log(recivedData);
    const apeared = recivedData;
    const displayeAll = document.getElementById('newHoros');
   
    const today = new Date();
const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
const day = String(tomorrow.getDate()).padStart(2, '0');
const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
const year = tomorrow.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
    
let images = '';
if (apeared.response.zodiac == 'Aries') {
  images = '../assets/images/Astrology/Horoscope/Aries.png';
} else if (apeared.response.zodiac == 'Taurus') {
  images = '../assets/images/Astrology/Horoscope/Taurus.png'
} else if (apeared.response.zodiac == 'Gemini') {
  images = '../assets/images/Astrology/Horoscope/Gemini.png'
} else if (apeared.response.zodiac == 'Aquarius') {
  images = '../assets/images/Astrology/Horoscope/Aquarius.png'
} else if (apeared.response.zodiac == 'Cancer') {
  images = '../assets/images/Astrology/Horoscope/Cancer.png'
} else if (apeared.response.zodiac == 'Capricorn') {
  images = '../assets/images/Astrology/Horoscope/Capricorn.png'
} else if (apeared.response.zodiac == 'Leo') {
  images = '../assets/images/Astrology/Horoscope/Leo.png'
} else if (apeared.response.zodiac == 'Libra') {
  images = '../assets/images/Astrology/Horoscope/Libra.png'
} else if (apeared.response.zodiac == 'Picess') {
  images = '../assets/images/Astrology/Horoscope/Picess.png'
} else if (apeared.response.zodiac == 'Sagitarius') {
  images = '../assets/images/Astrology/Horoscope/Sagitarius.png'
}else if (apeared.response.zodiac == 'Scorpio') {
  images = '../assets/images/Astrology/Horoscope/Scorpio.png'
}else if (apeared.response.zodiac == 'Virgo') {
  images = '../assets/images/Astrology/Horoscope/Virgo.png'
}
    displayeAll.innerHTML = ''

       
       let mySection = `<div class="HorosCard">
       <div>
           <span>
               <h1>${apeared.response.zodiac}</h1>
               <h4>Mar 21 - Apr 19</h4>
           </span>
           <img src="${images}" alt="">
       </div>
       <h5>Your horoscope for: ${formattedDate}</h5>
       <p> ${apeared.response.bot_response} </p>
       <div class="elements">
           <ul>
               <li>Lukky number: ${apeared.response.lucky_number}</li>
               <li>Color: ${apeared.response.lucky_color} </li>
                <li> Your color code is: ${apeared.response.lucky_color_code}, &nbsp &nbsp &nbsp <span style="border: 6px solid ${apeared.response.lucky_color_code}; display: inline-block; width: 21px; height: 21px; border-radius: 50%; background-color: ${apeared.response.lucky_color_code}; "></span>  </li>
               </ul>
       </div>
   </div>`
      displayeAll.innerHTML += mySection
}


// fetch data by select week
function WeekChange(weekData) {
  var newValue = weekData;
 
  const storageZodiac = localStorage.getItem('Zodiac');


  const newUrl = 'https://api.vedicastroapi.com/v3-json/prediction/weekly-sun';
  const params = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "zodiac": storageZodiac,
    "week": newValue,
    "type": "small",
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
  .then(weekData => {
    // console.log('Success:', weekData);

    HorosByWeek(weekData, newValue)
    cartWorker(weekData)
   
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  }

function HorosByWeek(weekly, getStrong) {
  let myWeek = '';
  console.log(getStrong);
  if (getStrong == 'thisweek') {
    myWeek = 'This week';
  } else {
    myWeek = 'Next week';
  }
  const displayeAll = document.getElementById('newHoros');
  const secondArticle = document.getElementById('Second-article');
  const yaerses = document.getElementById('myYearly');
  const careerTable = document.getElementById('Career');
  const EducationTable = document.getElementById('Education');
  const FinancesTable = document.getElementById('Finance');
  const FriendsTable = document.getElementById('Friends');
  const HealthTable = document.getElementById('Health');
  const RelationshipTable = document.getElementById('Relationship');
  const TravelTable = document.getElementById('Travel');
  const StatusTable = document.getElementById('Status');
  const FamilyTable = document.getElementById('Family');
  const generalCard = document.getElementById('GivGeneral');
  const yearlyPredict = document.getElementById('myYearly');
  const Buttons = document.getElementById('butts');

  if (yearlyPredict.style.display == 'block' ) {
    careerTable.style.display = 'none';
  generalCard.style.display = 'none';
  EducationTable.style.display = 'none';
  FamilyTable.style.display = 'none';
  FinancesTable.style.display = 'none';
  FriendsTable.style.display = 'none';
  HealthTable.style.display = 'none';
  RelationshipTable.style.display = 'none';
  TravelTable.style.display = 'none';
  StatusTable.style.display = 'none';
  Buttons.style.display = 'none';
  }
  yaerses.style.dispaly = 'none';
  secondArticle.style.display = 'block';
  displayeAll.style.display = 'none';

  let images = '';
if (weekly.response.zodiac == 'Aries') {
  images = '../assets/images/Astrology/Horoscope/Aries.png';
} else if (weekly.response.zodiac == 'Taurus') {
  images = '../assets/images/Astrology/Horoscope/Taurus.png'
} else if (weekly.response.zodiac == 'Gemini') {
  images = '../assets/images/Astrology/Horoscope/Gemini.png'
} else if (weekly.response.zodiac == 'Aquarius') {
  images = '../assets/images/Astrology/Horoscope/Aquarius.png'
} else if (weekly.response.zodiac == 'Cancer') {
  images = '../assets/images/Astrology/Horoscope/Cancer.png'
} else if (weekly.response.zodiac == 'Capricorn') {
  images = '../assets/images/Astrology/Horoscope/Capricorn.png'
} else if (weekly.response.zodiac == 'Leo') {
  images = '../assets/images/Astrology/Horoscope/Leo.png'
} else if (weekly.response.zodiac == 'Libra') {
  images = '../assets/images/Astrology/Horoscope/Libra.png'
} else if (weekly.response.zodiac == 'Picess') {
  images = '../assets/images/Astrology/Horoscope/Picess.png'
} else if (weekly.response.zodiac == 'Sagitarius') {
  images = '../assets/images/Astrology/Horoscope/Sagitarius.png'
}else if (weekly.response.zodiac == 'Scorpio') {
  images = '../assets/images/Astrology/Horoscope/Scorpio.png'
}else if (weekly.response.zodiac == 'Virgo') {
  images = '../assets/images/Astrology/Horoscope/Virgo.png'
}

  secondArticle.innerHTML = ''

       
  let mySection = `<div class="HorosCard">
  <div>
      <span>
          <h1>${weekly.response.zodiac}</h1>
          <h4>Mar 21 - Apr 19</h4>
      </span>
      <img src="${images}" alt="">
  </div>
  <h5>Your horoscope for: ${myWeek}</h5>
  <p> ${weekly.response.bot_response} </p>
  <div class="elements">
      <ul>
          <li>Lukky number: ${weekly.response.lucky_number}</li>
          <li>Color: ${weekly.response.lucky_color} </li>
           <li> Your color code is: ${weekly.response.lucky_color_code}, &nbsp &nbsp &nbsp <span style="border: 6px solid ${weekly.response.lucky_color_code}; display: inline-block; width: 21px; height: 21px; border-radius: 50%; background-color: ${weekly.response.lucky_color_code}; "></span>  </li>
          </ul>
  </div>
</div>`
secondArticle.innerHTML += mySection

}

// fetch data by year

// fetch data by select week
function yearly(Yearly, season) {
  var yearValue = Yearly;
  var seasons = season;
  console.log(seasons);
  const storageZodiac = localStorage.getItem('Zodiac');
 // console.log(newValue);
 // console.log(storageZodiac);

  const newUrl = 'https://api.vedicastroapi.com/v3-json/prediction/yearly';
  const params = new URLSearchParams({
    "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
    "year": yearValue,
    "zodiac": storageZodiac,
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
  .then(yearData => {
    // console.log('Success:', yearData);
  yearlyData(yearData, seasons)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  }

function yearlyData(yearDataRecived, SeasonRecived) {
  const displayeAll = document.getElementById('newHoros');
  const AllCharts = document.getElementById('charts');
  const yearlyPredict = document.getElementById('myYearly');
  const secondArts = document.getElementById('Second-article');
  const Buttons = document.getElementById('butts');
  yearlyPredict.style.display = 'block';
  if (secondArts.style.dispaly == 'block') {
    secondArts.style.dispaly == 'none'
    console.log('its block');
  } else {
    console.log('its not block');
  }
  secondArts.style.display = 'none';
  displayeAll.style.display = 'none';
  Buttons.style.display = 'block';

  



  AllCharts.innerHTML = ''

console.log('seconds');


  const GetNewSeasons = SeasonRecived;
  if (GetNewSeasons == 'phase_1') {
    var valuesArray = yearDataRecived.response.phase_1;
  } else if (GetNewSeasons == 'phase_2') {
    var valuesArray = yearDataRecived.response.phase_2;
  } else if (GetNewSeasons == 'phase_3') {
    var valuesArray = yearDataRecived.response.phase_3;
  } else if (GetNewSeasons == 'phase_4') {
    var valuesArray = yearDataRecived.response.phase_4;
  } 
  // const valuesArray = Object.values(DataByYear); // convert object to array



  console.log(valuesArray);
 
  yearlyPredict.innerHTML = ''

    //newData = item.SeasonRecived;
   let innerYear = `<div id='GivGeneral' class="HorosCard">
                        <div>
                        <span>
                            <h1>General</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.score} <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.score}; max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                    <div id='Career' class="HorosCard">
                        <div>
                        <span>
                            <h1>Career</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.career.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.career.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.career.score};  max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                    <div id='Family' class="HorosCard">
                        <div>
                        <span>
                            <h1>Family</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.family.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.family.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.family.score};  max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                    <div id='Finance' class="HorosCard">
                        <div>
                        <span>
                            <h1>Finance</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.finances.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.finances.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.finances.score};  max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                    <div id='Friends' class="HorosCard">
                        <div>
                        <span>
                            <h1>Friends</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.friends.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.friends.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.friends.score};  max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                    <div id='Health' class="HorosCard">
                        <div>
                        <span>
                            <h1>Health</h1>
                            <h4>${valuesArray.period}</h4>
                        </span>
                        <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                          </div>
                          <p>${valuesArray.health.prediction} </p>
                          <div class="elements">
                          <h4>First three month: ${valuesArray.health.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.health.score};  max-width: 100%; " ></aside> </h4>
                          </div>
                    </div>

                  <div id='Relationship' class="HorosCard">
                    <div>
                    <span>
                        <h1>Relationship</h1>
                        <h4>${valuesArray.period}</h4>
                    </span>
                    <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                      </div>
                      <p>${valuesArray.relationship.prediction} </p>
                      <div class="elements">
                      <h4>First three month: ${valuesArray.relationship.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.relationship.score};  max-width: 100%; " ></aside> </h4>
                      </div>
                  </div>

                  <div id='Education' class="HorosCard">
                    <div>
                    <span>
                        <h1>Education</h1>
                        <h4>${valuesArray.period}</h4>
                    </span>
                    <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                      </div>
                      <p>${valuesArray.education.prediction} </p>
                      <div class="elements">
                      <h4>First three month: ${valuesArray.education.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.education.score};  max-width: 100%; " ></aside> </h4>
                      </div>
                  </div>

                  <div id='Status' class="HorosCard">
                    <div>
                    <span>
                        <h1>Status</h1>
                        <h4>${valuesArray.period}</h4>
                    </span>
                    <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                      </div>
                      <p>${valuesArray.status.prediction} </p>
                      <div class="elements">
                      <h4>First three month: ${valuesArray.status.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.status.score};  max-width: 100%; " ></aside> </h4>
                      </div>
                  </div>

                <div id='Travel' class="HorosCard">
                  <div>
                  <span>
                      <h1>Travel</h1>
                      <h4>${valuesArray.period}</h4>
                  </span>
                  <img src="../assets/images/Astrology/Horoscope/Aries.png" alt="">
                    </div>
                    <p>${valuesArray.travel.prediction} </p>
                    <div class="elements">
                    <h4>First three month: ${valuesArray.travel.score}  <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.travel.score};  max-width: 100%; " ></aside> </h4>
                    </div>
                </div>`
    
        yearlyPredict.innerHTML = innerYear;
}






function cartWorker(chartData) {
  const myCareer = chartData;
 // console.log("Chart Recived:" + chartData)
const carrer = myCareer.response.career;
const calcu = 100 - carrer;
if (carrer >= '50') {
  var firstCol = '#1e7145';
} else if (carrer <= '50' && carrer >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const xValues = ["career", "All"];
const yValues = [carrer, calcu];
const barColors = [
  firstCol,
  "#f0f8ff"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your career is: " + carrer + " % "
    }
  }
});

// finances

const finances = myCareer.response.finances;
const financesCal = 100 - finances;
if (finances >= '50') {
  var firstCol = '#1e7145';
} else if (finances <= '50' && finances >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const myX = ["Finances", "All"];
const MyVal = [finances, financesCal];
const FinanColor = [
  firstCol,
  "#f0f8ff"
];

new Chart("finances", {
  type: "pie",
  data: {
    labels: myX,
    datasets: [{
      backgroundColor: FinanColor,
      data: MyVal
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your finances is: " + finances + " % "
    }
  }
});

// Health

const Health = myCareer.response.health;
const HealthCalcu = 100 - Health;
if (Health >= '50') {
  var firstCol = '#1e7145';
} else if (Health <= '50' && Health >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const HealthX = ["Health", "All"];
const HealthY = [Health, HealthCalcu];
const HealthColor = [
  firstCol,
  "#f0f8ff"
];

new Chart("health", {
  type: "pie",
  data: {
    labels: HealthX,
    datasets: [{
      backgroundColor: HealthColor,
      data: HealthY
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Health is: " + Health + " % "
    }
  }
});

// Realationship
const Realationship = myCareer.response.relationship;
const RealationCalcu = 100 - Realationship;
if (Realationship >= '50') {
  var firstCol = '#1e7145';
} else if (Realationship <= '50' && Realationship >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const RealationX = ["Realationship", "All"];
const RealationY = [Realationship, RealationCalcu];
const RealationColor = [
  firstCol,
  "#f0f8ff"
];

new Chart("Realation", {
  type: "pie",
  data: {
    labels: RealationX,
    datasets: [{
      backgroundColor: RealationColor,
      data: RealationY
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Relationship is: " + Realationship + " % "
    }
  }
});

// Friend Realationship
const Friends = myCareer.response.friends;
const FriendCalcu = 100 - Friends;
if (Friends >= '50') {
  var firstCol = '#1e7145';
} else if (Friends <= '50' && Friends >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const FriendX = ["Friends Relationship", "All"];
const FriendY = [Friends, FriendCalcu];
const FriendColor = [
  firstCol,
  "#f0f8ff"
];

new Chart("Friend", {
  type: "pie",
  data: {
    labels: FriendX,
    datasets: [{
      backgroundColor: FriendColor,
      data: FriendY
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Friends Relationship is: " + Friends + " % "
    }
  }
});

// Travel chart
const Travel = myCareer.response.travel;
const TravelCalcu = 100 - Travel;
if (Travel >= '50') {
  var firstCol = '#1e7145';
} else if (Travel <= '50' && Travel >= '30' ) {
  var firstCol = '#f2910a';
} else {
  var firstCol = '#e81d13';
}

const TravelX = ["Travel", "All"];
const TravelY = [Travel, TravelCalcu];
const TravelColor = [
  firstCol,
  "#f0f8ff"
];

new Chart("Travel", {
  type: "pie",
  data: {
    labels: TravelX,
    datasets: [{
      backgroundColor: TravelColor,
      data: TravelY
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Travel is: " + Travel + " % "
    }
  }
});

}



// get current year for footer
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

//console.log("Current Year:", currentYear);
//console.log("Current Month (0-indexed):", currentMonth);

const footerYear = document.getElementById('CurrentYear');
footerYear.innerText = '©' + ' ' + currentYear + ' Kandlus All rights reserved';





