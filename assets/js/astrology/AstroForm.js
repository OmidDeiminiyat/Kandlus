function submitForm(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
    // Get the selected zodiac sign
    const boy = document.getElementById("boyZodiac");
    const girl = document.getElementById("girlZodiac");
    const boyZ = boy.value;
    const girlZ = girl.value;

    
    if (boyZ) {
       
        dating(boyZ, girl)
    } else {
        alert("Please select a zodiac sign.");
    }
}

function dating(boyZodiac, girlZodiac) {
    console.log(boyZodiac);
    
const newUrl = 'https://api.vedicastroapi.com/v3-json/matching/western-match';
    const params = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "boy_sign": boyZodiac,
      "girl_sign": girlZodiac,
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
