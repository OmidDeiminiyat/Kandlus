const adCheck = document.getElementById('forAds');
const adsCheThr = document.getElementById('adsThree');
const FirstDiv  = document.getElementById('for-tests');
const forCues = document.getElementById('adsCube');
const rightsidSecond = document.getElementById('cubeSec');



async function fetchSubscribeData() {
    try {
        const response = await fetch('../backend/data.php');  // Call the PHP file
        const data = await response.json();
        const ExisCooki = getCookie('Kandlus-users');
        const filteredData = data.filter(item => item.Code === ExisCooki);
        if (filteredData != null || filteredData != '') {
               fetchPlans(filteredData);               
        } else {
          console.log('No data found or unexpected data format.');
        }  
    } catch (error) {
        console.error('Error fetching subscribe data:', error);
        callForAds()
    }
  }
  fetchSubscribeData()


async function fetchPlans(datas) {
    const subscriptionPlan = datas[0].Plan;    
    
    try {
        const response = await fetch('../backend/users.php');  // PHP file that returns the JSON array
        const data = await response.json();  // Parse the JSON into JavaScript array
        data.forEach(item => {
           
           if (subscriptionPlan === 'Basic') {
            callForAds()
        } else {
            console.log('Waiting');
        }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data on page load

function callForAds() {


    var adsScript = document.createElement('script');
        adsScript.async = true;
        adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        document.head.appendChild(adsScript);


        var newElem = document.createElement('script');
        (adsbygoogle = window.adsbygoogle || []).push({});
            newElem.setAttribute("data-ad-client", "ca-pub-3825145502473153");
            newElem.setAttribute("enable_page_level_ads", "true");
            document.head.appendChild(newElem);
        
    if (FirstDiv !== null) {
    var adElement = document.createElement('ins');
    adElement.className = "adsbygoogle";
    adElement.style.display = "block";
    adElement.setAttribute("data-ad-client", "ca-pub-3825145502473153");
    adElement.setAttribute("data-ad-slot", "4661065121");
    adElement.setAttribute("data-ad-format", "auto");
    adElement.setAttribute("data-full-width-responsive", "true");
    FirstDiv.appendChild(adElement);
    (adsbygoogle = window.adsbygoogle || []).push({});
 
    }


        if (adCheck !== null) {
    var firstAds = document.createElement('ins');
    firstAds.className = "adsbygoogle";
    firstAds.style.display = "block";
    firstAds.setAttribute("data-ad-client", "ca-pub-3825145502473153");
    firstAds.setAttribute("data-ad-slot", "4661065121");
    firstAds.setAttribute("data-ad-format", "auto");
    firstAds.setAttribute("data-full-width-responsive", "true");
    adCheck.appendChild(firstAds);
    (adsbygoogle = window.adsbygoogle || []).push({});
        }



    // right side ads

  var rightSiCude = document.createElement('ins');
    rightSiCude.className = "adsbygoogle";
    rightSiCude.style.display = "inline-block";
    rightSiCude.style.width = "300px";
    rightSiCude.style.height = "300px";
    rightSiCude.setAttribute("data-ad-client", "ca-pub-3825145502473153");
    rightSiCude.setAttribute("data-ad-slot", "4661065121");
    forCues.appendChild(rightSiCude);
    (adsbygoogle = window.adsbygoogle || []).push({});



    var secRighS = document.createElement('ins');
    secRighS.className = "adsbygoogle";
    secRighS.style.display = "inline-block";
    secRighS.style.width = "300px";
    secRighS.style.height = "300px";
    secRighS.setAttribute("data-ad-client", "ca-pub-3825145502473153");
    secRighS.setAttribute("data-ad-slot", "4661065121");
    rightsidSecond.appendChild(secRighS);
    (adsbygoogle = window.adsbygoogle || []).push({});

}




