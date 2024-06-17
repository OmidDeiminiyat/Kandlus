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
    const displayeAll = document.getElementById('article');
   
    const today = new Date();
const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
const day = String(tomorrow.getDate()).padStart(2, '0');
const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
const year = tomorrow.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
    
    displayeAll.innerHTML = ''

       
       let mySection = `<head>
       <h2>Here is your Horoscope for: <span>${formattedDate}</span></h2>
   </head>
   <section class="paraf">
       <h4>Your Zodiac sign is: ${apeared.response.zodiac}</h4>
       <p>${apeared.response.bot_response}</p>

           <h4>Your lukky number is: ${apeared.response.lucky_number}</h4>
           <h4>Your color is: ${apeared.response.lucky_color} <aside class="color1" style="border: 6px solid ${apeared.response.lucky_color_code}; background-color: ${apeared.response.lucky_color_code}; " > </aside> </h4>
   </section>`
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

    HorosByWeek(weekData)
    cartWorker(weekData)
   
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  }

function HorosByWeek(weekly) {
  const displayeAll = document.getElementById('article');
  const secondArticle = document.getElementById('Second-article');
  secondArticle.style.display = 'block';

  displayeAll.innerHTML = ''

       
  let mySection = `<head>
  <h2>Here is your Horoscope for: <span>Weekly</span></h2>
</head>
<section class="paraf">
  <h4>Your Zodiac sign is: ${weekly.response.zodiac}</h4>
  <p>${weekly.response.bot_response}</p>

      <h4>Your lukky number is: ${weekly.response.lucky_number}</h4>
      <h4>Your color is: ${weekly.response.lucky_color} <aside class="color1" style="border: 6px solid ${weekly.response.lucky_color_code}; background-color: ${weekly.response.lucky_color_code}; " > </aside> </h4>
</section>`
 displayeAll.innerHTML += mySection

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
  const displayeAll = document.getElementById('article');
  const AllCharts = document.getElementById('charts');
  AllCharts.innerHTML = ''

console.log(SeasonRecived);


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
 
   displayeAll.innerHTML = ''

    //newData = item.SeasonRecived;
   let innerYear = `<head>
    <h2>Here is your Horoscope for: <span>${valuesArray.period}</span></h2>
  </head>
  <section class="paraf">
    <h4>Your Zodiac sign is: Zodiac</h4>
    <p>Prediction: ${valuesArray.prediction}</p>
  
        <h4>Score for first 3 month: ${valuesArray.score}</h4><hr>
        <div>
            <h4>Career:</h4>
            <p>${valuesArray.career.prediction}</p>
            <h4>Your carrer score: ${valuesArray.career.score} <aside class="yearSpan" style="width: 50%;"></aside><aside class="yearSpanTwo" style="width: ${valuesArray.career.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
            <h4>Family:</h4>
            <p>${valuesArray.family.prediction}</p>
            <h4>Your carrer score:  ${valuesArray.family.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.family.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
            <h4>Finance:</h4>
            <p>${valuesArray.finances.prediction}</p>
            <h4>Your carrer score: ${valuesArray.finances.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.finances.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Friends:</h4>
          <p>${valuesArray.friends.prediction}</p>
          <h4>Your carrer score: ${valuesArray.friends.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.friends.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Health:</h4>
          <p>${valuesArray.health.prediction}</p>
          <h4>Your carrer score: ${valuesArray.health.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.health.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Relationship:</h4>
          <p>${valuesArray.relationship.prediction}</p>
          <h4>Your carrer score: ${valuesArray.relationship.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.relationship.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Education:</h4>
          <p>${valuesArray.education.prediction}</p>
          <h4>Your carrer score: ${valuesArray.education.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.education.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Status:</h4>
          <p>${valuesArray.status.prediction}</p>
          <h4>Your carrer score: ${valuesArray.status.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.status.score}; max-width: 100%; " ></aside> </h4>
        </div>
        <div>
          <h4>Travel:</h4>
          <p>${valuesArray.travel.prediction}</p>
          <h4>Your carrer score: ${valuesArray.travel.score} <aside class="yearSpan" style="width: 50%;" ></aside><aside class="yearSpanTwo" style="width: ${valuesArray.travel.score}; max-width: 100%; " ></aside> </h4>
        </div>
        </section>`
    
   displayeAll.innerHTML = innerYear;
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


