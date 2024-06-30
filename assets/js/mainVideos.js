


fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(data => {
  // console.log(data); // Do something with the fetched data
  displayVideo(data)
  firstDisplay(data)
  RandomSecond(data)
  RandomThird(data)
  singlePost(data)
  lastRowRight(data)
  lastMiddleRow(data)
  RightSideBar(data)
  SinglePageLast(data)
})
.catch(error => {
  console.error('Error fetching data:', error);
});

function firstDisplay(RecivedFirst) {

const navElement = document.getElementById('allDataHere');

const FirstArray = RecivedFirst;
const limit = 1;
FirstArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
FirstArray.slice(0, limit).forEach((myItem, index) => {
//for img
navElement.innerHTML = ''
 let myfirstSection = `<article class="row slide-fade-item" style="visibility: visible; animation-name: fadeIn;">
 <div class="col-md-6 mb-md-0 mb-sm-3">
     <figure class="mb-0" id="imgNo1">
         <a href="SinglePageVid.html?id=${myItem.seo}">
             <img src="../assets/images/videos/wide/${myItem.image}" alt="">
         </a>
         <span class="post-format position-top-right text-uppercase font-small">
             <i class="ti-stats-up"></i>
         </span>
     </figure>
 </div>
 <div class="col-md-6 align-self-center">
     <div class="post-content text-center plr-5-percent">
         <div id="categories1" class="entry-meta meta-0 mb-15 font-small">
             <a href="category.html?id=${myItem.category}"><span class="post-cat position-relative"># ${myItem.category}</span></a>
             <a href="category.html?id=${myItem.category2}"><span class="post-cat position-relative"># ${myItem.category2}</span></a>
         </div>
         <h2 id="title" class="post-title mb-30 position-relative divider-wave">
             <a href="SinglePageVid.html?id=${myItem.seo}">${myItem.subject}</a>
         </h2>
         <p id="describe" class="excerpt">
            ${myItem.describ}
         </p>
         <p><span class="live-now text-danger">Trend now</span></p>                                
     </div>
 </div>                        
</article>`

navElement.innerHTML += myfirstSection

})
}

// Here is the first random of the second section 
function RandomSecond(recivedRandom) {
// console.log(recivedRandom);

const MyRandom = recivedRandom;
const RandomLimi4 = 2;

function getRandom() {
  return Math.random() - 0.5; 
}


MyRandom.sort((a, b) => getRandom());



const RandomElement = document.getElementById('Randoms');
let myRandomData = `<div  class="row vertical-divider">`
MyRandom.slice(0, RandomLimi4).forEach((RandomItem, index) => {

  const limitedText = limitTextTo50Words(RandomItem.describ);
 
  RandomElement.innerHTML = ''

 myRandomData +=  `<article class="col-md-6 wow fadeIn animated">
<figure class="mb-15 homeImage">
    <a href="SinglePageVid.html?id=${RandomItem.seo}">
        <img src="../assets/images/videos/longImg/${RandomItem.image}" alt="">
    </a>
</figure>
<h6 class="post-title font-weight-bold mb-10">
    <a href="SinglePageVid.html?id=${RandomItem.seo}">${RandomItem.subject}</a>
</h6>

<div class="entry-meta meta-0 mb-15 font-small">
    <a href="video/category.html?id=${RandomItem.category}"><span class="post-cat position-relative"># ${RandomItem.category}</span></a>
    <a href="video/category.html?id=${RandomItem.category2}"><span class="post-cat position-relative"># ${RandomItem.category2}</span></a>
</div>
</article>`

})
myRandomData += `<div>`

RandomElement.innerHTML += myRandomData
}

// Second random of the second section
function RandomThird(Se3cRandData) {
 // console.log('Recived:' + Se3cRandData);

  const thirdRand = Se3cRandData;
  const RandomLimi4 = 1;

function getRandomThird() {
  return Math.random() - 0.5; 
}


thirdRand.sort((a, b) => getRandomThird());


const SecRandElement = document.getElementById('SecondRandom');

let mySecRandomData = ` <span>`
thirdRand.slice(0, RandomLimi4).forEach((SecRandItem, index) => {
  const limitedSecText = limitTextTo50Words(SecRandItem.describ);

  SecRandElement.innerHTML = ''

  mySecRandomData +=` <article class="row wow fadeIn animated">
 <div class="col-md-6">
     <div class="entry-meta meta-0 mb-15 font-small">
         <a href="category.html?id=${SecRandItem.category}"><span class="post-cat position-relative">#${SecRandItem.category}</span></a>
     </div>
     <h6 class="post-title mb-20 font-weight-bold">
     <a href="SinglePageVid.html?id=${SecRandItem.seo}">${SecRandItem.subject}</a>
     </h6>
     <p class="excerpt mb-0">
         ${limitedSecText}
     </p>
 </div>
 <div class="col-md-6">
     <figure class="mb-0 homeImage">
     <img src="../assets/images/videos/longImg/${SecRandItem.image}" alt="">
     </figure>
 </div>
</article>`

})
mySecRandomData += `<span>`

SecRandElement.innerHTML += mySecRandomData
}





function displayVideo(RecivedData){
    const myArray = RecivedData;
const limit = 10;
    myArray.slice(0, limit).forEach((item, index) => {
    //    console.log(`Element at index ${index}: ${item}`);

const articleElement = document.createElement('article');
articleElement.classList.add('col-1-5', 'col-sm-12', 'wow', 'fadeIn', 'animated');

const figureElement = document.createElement('figure');
figureElement.classList.add('mb-15');
figureElement.classList.add('mainImg');


const imgLinkElement = document.createElement('a');
imgLinkElement.href = 'SinglePageVid.html'  + '?id=' + item.seo;;

const imgElement = document.createElement('img');
imgElement.src = '../assets/images/videos/longImg/' + item.image;
imgElement.alt = '';

imgLinkElement.appendChild(imgElement);

figureElement.appendChild(imgLinkElement);

articleElement.appendChild(figureElement);

const h6Element = document.createElement('h6');
h6Element.classList.add('font-weight-500', 'mb-20');

const aElement = document.createElement('a');
aElement.href = 'SinglePageVid.html' + '?id=' + item.seo;
aElement.textContent = item.subject;

h6Element.appendChild(aElement);

articleElement.appendChild(h6Element);

document.getElementById('myRow').appendChild(articleElement);

});
}


function singlePost(singleData) {
console.log(singleData);

const RandomLimi4 = 1;
singleData.slice(0, RandomLimi4).forEach((newRandData, index) => {

//  const filteredSingleData = newRandData.filter(item => item.category === 'Philosophy');


const singleHolder = document.getElementById('singlePost');
singleHolder.innerHTML += '';

let singleDataDisplay = `<div class="col-md-4 mb-md-0 mb-sm-3">
<figure class="mb-0 mainImg">
    <a href="single.html">
        <img src="../assets/images/videos/longImg/${newRandData.image}" alt="">
    </a>
    <span class="post-format position-top-right text-uppercase font-small">
        <i class="ti-stats-up"></i>
    </span>
</figure>
</div>
<div class="col-md-6 align-self-center">
<div class="post-content">
    <div class="entry-meta meta-0 mb-15 font-small">
        <a href="category.html"><span class="post-cat position-relative"># World</span></a>
        <a href="category.html"><span class="post-cat position-relative"># Education</span></a>
    </div>
    <h3 class="mb-30 position-relative">
        <a href="SinglePageVid.html?id=${newRandData.seo}">${newRandData.subject}</a>
    </h3>
    <p class="excerpt">
        ${newRandData.describ}
    </p>
    <p><span class="live-now text-danger">Trend now</span></p>
</div>
</div>
<div class="col-md-12">
<div class="horizontal-divider mt-15 mb-15"></div>
</div>`

singleHolder.innerHTML += singleDataDisplay

})
}


// LastRowRight 

function lastRowRight(RightData) {
    const rightRow = document.getElementById('lastRowRight');
    const Rightside = RightData
const GetLimited = 4;

// Here is for sort by Category Philosophy
const categorizedData = {};
Rightside.forEach(CateItems => {
    const category = CateItems.category;
    if (!categorizedData[category]) {
        categorizedData[category] = [];
    }
    categorizedData[category].push(CateItems);
});
const ancientBooks = categorizedData["Philosophy"];
// -----

let mySecRandomData = ` <span>`
ancientBooks.slice(0, GetLimited).forEach((myData, index) => {
    const LimitMyDescribe = limitTextTo50Words(myData.describ);
    rightRow.innerHTML += '';

    mySecRandomData += `<article class="row wow fadeIn animated">
    <div class="col-md-4">
        <figure class="mb-md-0 mb-sm-3 mainImg">
            <img src="../assets/images/videos/longImg/${myData.image}" alt="">
        </figure>
    </div>
    <div class="col-md-8 pl-0">
        <div class="entry-meta meta-0 mb-15 font-small">
            <a href="category.html"><span class="post-cat position-relative"># ${myData.category}</span></a>
        </div>
        <h6 class="post-title mb-20 font-weight-bold">
            <a href="SinglePageVid.html?id=${myData.seo}">${myData.subject}</a>
        </h6>
        <p class="excerpt mb-0">
            ${LimitMyDescribe}
        </p>
    </div>
    <div class="col-md-12">
        <div class="horizontal-divider mt-15 mb-15"></div>
    </div>
</article>`

})
mySecRandomData += `<span>`

rightRow.innerHTML += mySecRandomData

}


// Last middle row with image
function lastMiddleRow(MiddleData) {
  
const newData = MiddleData[0];
const firstData = MiddleData[1];
const secondData = MiddleData[2];
const thirdData = MiddleData[3];

    const GetMiddleId = document.getElementById('lastMiddleRow');
   
    GetMiddleId.innerHTML = `<article class="wow fadeIn animated">
        <figure class="mb-15 mainImg">
            <a href="single.html">
                <img src="../assets/images/videos/longImg/${newData.image}" alt="">
            </a>
        </figure>
        <h6 class="post-title font-weight-bold mb-10">
            <a href="SinglePageVid.html?id=${newData.seo}">${newData.subject}</a>
        </h6>
        <p class="excerpt">
            ${newData.describ}
        </p>
        <div class="horizontal-divider mt-15 mb-15"></div>
    </article>
    <article class="wow fadeIn animated">
                                        <h6 class="post-title mb-10 font-weight-bold">
                                            <a href="SinglePageVid.html?id=${firstData.seo}"> ${firstData.subject}</a>
                                        </h6>
                                        <p class="excerpt mb-0">
                                           ${firstData.describ}
                                        </p>
                                        <div class="horizontal-divider mt-15 mb-15"></div>
                                    </article>
                                    <article class="wow fadeIn animated">
                                        <h6 class="post-title mb-10 font-weight-bold">
                                            <a href="SinglePageVid.html?id=${secondData.seo}"> ${secondData.subject}</a>
                                        </h6>
                                        <p class="excerpt mb-0">
                                        ${secondData.describ}
                                        </p>
                                        <div class="horizontal-divider mt-15 mb-15"></div>
                                    </article>
                                    <article class="wow fadeIn animated">
                                        <h6 class="post-title mb-10 font-weight-bold">
                                            <a href="SinglePageVid.html?id=${thirdData.seo}"> ${thirdData.subject}</a>
                                        </h6>
                                        <p class="excerpt mb-0">
                                        ${thirdData.describ}
                                        </p>
                                    </article>`

}



function RightSideBar(lastOne) {
const myRightSidebar = document.getElementById('RightSideBar');



// Get the year and month

const rightSideCategory = {};
lastOne.forEach(newCateItems => {
    const category = newCateItems.category;
    if (!rightSideCategory[category]) {
        rightSideCategory[category] = [];
    }
    rightSideCategory[category].push(newCateItems);
});
const mySorts = rightSideCategory["Matrix"];

    const LastOneLimit = 3;
let creatSpan = `<span>`
mySorts.slice(0, LastOneLimit).forEach((lastData, index) => {
        const date = new Date(lastData.zaman);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();
        myRightSidebar.innerHTML = '';

        creatSpan += ` <li class="mb-15">
        <div class="d-flex">
            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale testimage mainImg">
                <a class="color-white" href="SinglePageVid.html?id=${lastData.seo}">
                    <img src="../assets/images/videos/longImg/${lastData.image}" alt="">
                </a>
            </div>
           
        </div>
    </li>`

    })
    creatSpan += `</span>`

myRightSidebar.innerHTML += creatSpan

}



// SinglePageLast 


// function for limit text

function limitTextTo50Words(text) {
  const words = text.split(/\s+/);

  const limitedText = words.slice(0, 50).join(' ');

  return limitedText;
}




function newRand() {
    return Math.random() - 0.5; 
  }
  // useing next line in function to randome resault
  // Rightside.sort((a, b) => newRand());