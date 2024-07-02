


  
  document.getElementById('newForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const RadicalN = document.getElementById('RadicalNumber').value;  
    console.log(RadicalN);

    character(RadicalN)
   
  });




function character(Radical) {
   
    const charUrl = 'https://api.vedicastroapi.com/v3-json/utilities/radical-number-details';
    const MyParams = new URLSearchParams({
      "api_key": "0714ae51-feee-55ff-8a10-4541c525cf0c",
      "radical_number": Radical,
      "lang": "en"
    });
    
    fetch(`${charUrl}?${MyParams.toString()}`, {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(characterData => {
       console.log('table Data Success:', characterData);
      tableData(characterData)
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }

  function tableData(RecivedData) {
    const mynum = document.getElementById('dispNum');
    const reo = document.getElementById('displayNumber');
  
    reo.style.display = 'none';
    mynum.style.display = 'grid';
    const resRac = document.getElementById('NumberResault');
  
    const LetData = RecivedData;
    console.log(LetData.response);
    
    resRac.innerHTML = ''
    let insideElement = `<h4>Here is your Radical number resault</h4><hr class="brLine">
    <figcaption class="letBeCaption">
    <div><h3> Content: <h5><span class="citcleNight" >${LetData.response.content} </span></h3> </h5></div><hr class="brLine">
    <div><h3> Fasting: <h5><span class="citcleNight" >${LetData.response.fasting} </span></h3> </h5></div> <hr class="brLine">
    <div><h3>Favotite gayatri mantra: <h5> <span class="citcleNight" >${LetData.response.fav_gayatri_mantra} </span> </h3></div><hr class="brLine">
    <div><h3>Favotite lord:<h5> <span class="citcleNight" >${LetData.response.fav_lord} </span> </h3></h5></div><hr class="brLine">
    <div><h3>Favotite mantra:<h5> <span class="citcleNight" >${LetData.response.fav_mantra} </span> </h3></h5></div><hr class="brLine">
    <div><h3>Graha mantra:<h5> <span class="citcleNight" >${LetData.response.graha_mantra} </span> </h3></h5></div><hr class="brLine">
    <div><h3>Personality:<h5> <span class="citcleNight" >${LetData.response.personality} </span> </h3></h5></div><hr class="brLine">
    <div><h3>Yantra:<h5> <span class="citcleNight" >${LetData.response.yantra} </span> </h3></h5></div>
        </figcaption> <hr class="brLine">`

    resRac.innerHTML = insideElement;



  }
  