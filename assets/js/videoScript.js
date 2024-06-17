
var url = window.location.search.substring(1);
var vars = url.split("=");
const id = vars[1];
if (!id) {
    console.error("ID is null or empty. Make sure the 'id' parameter is provided in the URL.");
    // Optionally, you can add code here to handle this case, such as displaying an error message to the user
  } else {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide?seo=eq.${id}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(data => {

singleVideo(data)
secondRow(data[0].category)
})
.catch(error => {
  console.error('Error fetching data:', error);
});

  }



  function singleVideo(showVideo) {
    const changeDisplay = document.getElementById('mainSinglePage');
    const CategoryShows = document.getElementById('ShowCategory');
    const titleDisplay = document.getElementById('displayTitle');
    const Videodisplay = document.getElementById('displayVideo');
    const describe = document.getElementById('describe');
    const mainCategory = document.getElementById('shoeMainCategory');
    const changeTitle = document.getElementById('title');
    

showVideo.forEach((getData, index) => {

    CategoryShows.innerText = getData.category;
    titleDisplay.innerText = getData.subject;
    Videodisplay.innerHTML = getData.embed;
    describe.innerText = getData.describ;
    changeTitle.innerText = getData.subject;

    const date = new Date(getData.zaman);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    mainCategory.innerHTML = `<span class="mr-10"><i class="ti-time"> ${day}.${month}.${year} </i></span>
    <span class="has-dot"><i class="ti-eye">  ${getData.score} </i> 
    <span class="has-dot"><i class="ti-heart">  ${getData.Heart} </i>  </span>  </span><br><br>
    <a href="category.html?id=${getData.category}"><span class="post-cat position-relative"># ${getData.category}</span></a>
    <a href="tag.html?id=${getData.tag1}"><span class="post-cat position-relative"># ${getData.tag1}</span></a>`
})

}

// Second Row
function secondRow(MyReData) {
  const myRecivedCat = MyReData;

  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide?category=eq.${myRecivedCat}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(newData => {

  sendNewData(newData)


})
.catch(error => {
  console.error('Error fetching data:', error);
});

}

function sendNewData(JustRecived) {
  const SecondRow = document.getElementById('SecondRow');
  const sendcar = document.getElementById('NoCate');

  const XrowLimit = 4;

  let insidSecond = `<div class="row vertical-divider mb-30">`
  JustRecived.slice(0, 4).forEach((RecivedSecondData, index) => {
    sendcar.innerText= RecivedSecondData.category;
    const date = new Date(RecivedSecondData.zaman);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const limitedText = limitTextTo50Words(RecivedSecondData.describ); 
    SecondRow.innerHTML = ''

    insidSecond += `
    <article class="col-md-3 mb-sm-3 wow fadeIn animated">
        <figure class="mb-15 mainImg">
            <a href="SinglePageVid.html?id=${RecivedSecondData.seo}">
                <img src="http://via.placeholder.com/900x670" alt="" >
            </a>
        </figure>
        <h6 class="post-title font-weight-bold mb-10">
            <a href="SinglePageVid.html?id=${RecivedSecondData.seo}">${RecivedSecondData.subject}</a>
        </h6>
        
        <div class="entry-meta meta-2 font-x-small color-muted">
           
            <span class="mr-10"><i class="ti-time">  ${day}.${month}.${year} </i></span>
            <span class="has-dot"><i class="ti-eye">  ${RecivedSecondData.score} </i>  </span>
        </div>
    </article>`

  })
  insidSecond += `</div>`
  SecondRow.innerHTML += insidSecond

}





fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(NewReciData => {
  // console.log(data); // Do something with the fetched data
  SinglePageLast(NewReciData)
  nextRow(NewReciData)
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Last row
function SinglePageLast(lastInSingleP) {

  const lastInSecond = document.getElementById('thirdmoc');
  lastInSingleP.sort((a, b) => newRand());

  const SinlePageLimit = 4

  let insideRowThird = `<div class="row vertical-divider mb-30">`

  lastInSingleP.slice(0, SinlePageLimit).forEach((SendMyData, index) => {
   const date = new Date(SendMyData.zaman);
   const year = date.getFullYear();
   const month = date.getMonth() + 1;
   const day = date.getDay();

      lastInSecond.innerHTML = ''
      insideRowThird += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
      <figure class="mb-15 mainImg">
          <a href="SinglePageVid.html?id=${SendMyData.seo}">
              <img src="http://via.placeholder.com/900x670" alt="" style="height:300px;" >
          </a>
      </figure>
      <h6 class="post-title font-weight-bold mb-10">
          <a href="SinglePageVid.html?id=${SendMyData.seo}">${SendMyData.subject}</a>
      </h6>
      
      <div class="entry-meta meta-2 font-x-small color-muted">
         
          <span class="mr-10"><i class="ti-time">  ${day}.${month}.${year} </i></span>
          <span class="has-dot"><i class="ti-eye">  ${SendMyData.score} </i>  </span>
      </div>
  </article>`
  })
  insideRowThird += `</div>`
  lastInSecond.innerHTML += insideRowThird


}


// next Row

function nextRow(NextData) {
const nextLandData = document.getElementById('NextLandingData');

NextData.sort((a, b) => newRand());

const NextLimit = 8

let NextLanding = `<div class="row vertical-divider mb-30">`

NextData.slice(4, NextLimit).forEach((NextRecivedData, index) => {
 const date = new Date(NextRecivedData.zaman);
 const year = date.getFullYear();
 const month = date.getMonth() + 1;
 const day = date.getDay();

    nextLandData.innerHTML = ''
    NextLanding += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
    <figure class="mb-15 mainImg">
        <a href="SinglePageVid.html?id=${NextRecivedData.seo}">
            <img src="http://via.placeholder.com/900x670" alt="" style="height:300px;" >
        </a>
    </figure>
    <h6 class="post-title font-weight-bold mb-10">
        <a href="SinglePageVid.html?id=${NextRecivedData.seo}">${NextRecivedData.subject}</a>
    </h6>
    
    <div class="entry-meta meta-2 font-x-small color-muted">
       
        <span class="mr-10"><i class="ti-time">  ${day}.${month}.${year} </i></span>
        <span class="has-dot"><i class="ti-eye">  ${NextRecivedData.score} </i>  </span>
    </div>
</article>`
})
NextLanding += `</div>`
nextLandData.innerHTML += NextLanding


}


// Subscribe submit
function subscribe() {
  const EmailInput = document.getElementById('Email').value;
 
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(EmailInput)) {
    
    console.log('Email Recived:' + EmailInput);

  } else {
    alert("Invalid email address");
  }

}




function limitTextTo50Words(text) {
  const words = text.split(/\s+/);

  const limitedText = words.slice(0, 30).join(' ');

  return limitedText;
}


function newRand() {
  return Math.random() - 0.5; 
}
// useing next line in function to randome resault
// Rightside.sort((a, b) => newRand());



 

  




