function submitForm(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
    // Get the selected zodiac sign
   
    const Bname = document.getElementById("bName");
    const dateB = document.getElementById("bDate");
    const tiB = document.getElementById("bTime");
    const CounB = document.getElementById("bCountry");
    const ZoneB = document.getElementById("bZone");
    const NGit = document.getElementById("girlName");
    const datGir = document.getElementById("girlDate");
    const tiG = document.getElementById("girlTime");
    const CounG = document.getElementById("girlCountry");
    const ZonG = document.getElementById("girlZone");
    
  const name = Bname.value;
  const Bdate = dateB.value;
  const Btime = tiB.value;
  const Bcountry = CounB.value;
  const Bzone = ZoneB.value;
  const Girlname = NGit.value;
  const Girldate = datGir.value;
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
       
        fetchTwoHoroscopeData(name, Bdate, Btime, BoyLat, Boylong, Bzone, Girlname, Girldate, Girltime, GkirlLong, GirlLang, Girlzone);
    } else {
        alert("Please select a zodiac sign.");
    }
}





async function fetchTwoHoroscopeData(boyN, boyD, boyT, LangB, LongB, boyZone, girlN, girlDate, girlT, LangGirl, LongGirl, girlZ) {
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

    // Return or use the data as needed
    return { data1, data2 };

  } catch (error) {
    console.error('Error fetching data from APIs:', error);
  }
}







    function ZodiacDate(){
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