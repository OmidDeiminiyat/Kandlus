
document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('birthday');
    // Change date format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    dateInput.value = `${year}-${month}-${day}`;
});

document.getElementById('dateForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const dateInput = document.getElementById('birthday').value;

    const [year, month, day] = dateInput.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    console.log('Formatted Date:', formattedDate);
    handleSubmit(formattedDate)

   
});




function handleSubmit(birthData) {
   
    const thirdBio = document.getElementById('displayThird');
    const secongFig = document.getElementById('displayBio');

    console.log(birthData);
    secongFig.style.display = 'none';
    thirdBio.style.display = 'grid';

    const newUrl = 'https://api.vedicastroapi.com/v3-json/prediction/biorhythm';
    const params = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "dob": birthData,
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
    .then(BioData => {
       console.log('Bio Data Success:', BioData);
      bioData(BioData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

function bioData(addBioRcived) {
const finalData = document.getElementById('finalData');

const recivedNewData = addBioRcived;
console.log(recivedNewData.response.physical);

finalData.innerHTML = ''
let insideMyCaption = `<h4>Here is your biorythm circle</h4><br>
<figcaption class="figCaptureIn">
<div> <h5>Physical circle is: <span class="circleDay" >${recivedNewData.response.physical.score} </span> days</h5> <h5>Trend: ${recivedNewData.response.physical.trend} </h5></div> 
<div><h5>Emotional circle is: <span class="circleDay" >${recivedNewData.response.emotional.score} </span> days</h5><h5>Trend: ${recivedNewData.response.emotional.trend} </h5></div>
<div><h5>Intellectual circle is: <span class="circleDay" >${recivedNewData.response.intellectual.score} </span> days</h5> <h5>Trend: ${recivedNewData.response.intellectual.trend}</h5></div>
<div><h5>Average circle is: <span class="circleDay" >${recivedNewData.response.average.score} </span> days </h5><h5>Trend: ${recivedNewData.response.average.trend}</h5></div>
</figcaption>`

finalData.innerHTML = insideMyCaption;



const no4 = '120'
const no1 = no4 / 4;
const no2 = no1 * 2;
const no3 = no1 * 3;


const Ph4 = recivedNewData.response.physical.score;
const ph1 = no4 / 4;
const ph3 = '-' + ph1;


const green4 = recivedNewData.response.emotional.score;
const green1 = green4 / 4;
const green3 = '-' + ph1;


const blue4 = recivedNewData.response.intellectual.score;
const blue1 = blue4 / 4;
const blue3 = '-' + ph1;

  const xValues = [0,no1,no2,no3,no4];

new Chart("newChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [0,ph1,0,ph3,0],
      borderColor: "red",
      fill: false
    }, { 
        data: [0,green1,0,green3,0],
      borderColor: "green",
      fill: false
    }, { 
        data: [0,blue1,0,blue3,0],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


}

function biorythm() {
    const changeBio = document.getElementById('bioInside');
    const secongFig = document.getElementById('displayBio');
    secongFig.style.display = 'grid';
    changeBio.style.display = 'none';
    console.log('Recived');


  }


//  Y axes


const xValues = [0,30,60,90,120];

new Chart("firstChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [0,0,0,0,0],
      borderColor: "red",
      fill: false
    }, { 
        data: [0,0,0,0,0],
      borderColor: "green",
      fill: false
    }, { 
        data: [0,0,0,0,0],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

new Chart("secondChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: [0,0,0,0,0],
        borderColor: "red",
        fill: false
      }, { 
          data: [0,0,0,0,0],
        borderColor: "green",
        fill: false
      }, { 
          data: [0,0,0,0,0],
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });

