

var url = window.location.href;

var urlObj = new URL(url);

var id = urlObj.searchParams.get('id');

console.log(id);
localStorage.setItem('category', id);



fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(MyCateData => {
AllCategory(MyCateData)

})
.catch(error => {
  console.error('Error fetching data:', error);
});



function AllCategory(recivedCateData) {
const MyMainData = document.getElementById('mainData');


const dataLimit = 10;

MyMainData.innerHTML = ''
let newSpan = `<div class="row vertical-divider">`

recivedCateData.slice(0, dataLimit).forEach((newData, index) => {
   
    newSpan += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
    <figure class="mb-15 mainImg">
        <a href="SinglePageVid.html?id=${newData.seo}">
            <img src="../assets/images/videos/longImg/${newData.image}" alt="${newData.category}" >
        </a>
    </figure>
    <h6 class="post-title font-weight-bold mb-10">
        <a href="SinglePageVid.html?id=${newData.seo} ">${newData.subject} </a>
    </h6>

    <div class="entry-meta meta-2 font-x-small color-muted">
        <span class="mr-10"> <i class="ti-time"></i> 15 April 2020</span>
        <span class="has-dot"> <i class="ti-eye"></i> ${newData.score}  </span>
        <span class="has-dot"> <i class="ti-heart"></i> ${newData.Heart}  </span>
    </div>
</article>`

})
newSpan += `</div>`
MyMainData.innerHTML += newSpan

}

function fetchData(getYou) {

fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(secData => {
  // console.log(data); // Do something with the fetched data

justTest(secData)
 
})
.catch(error => {
  console.error('Error fetching data:', error);
});
}


function justTest(secondRow) {

    const secondMain = document.getElementById('secondMain');

    secondMain.innerHTML = ''
    let newmainSpan = ` <hr><div class="row vertical-divider">`
    
    secondRow.slice(8, 12).forEach((getOne, index) => {
       
        newmainSpan += `    <article class="col-md-3 mb-sm-3 wow fadeIn animated">
        <figure class="mb-15 mainImg">
            <a href="SinglePageVid.html?id=${getOne.seo} ">
                <img src="../assets/images/videos/longImg/${getOne.image}" alt="${getOne.category}" >
            </a>
        </figure>
        <h6 class="post-title font-weight-bold mb-10">
            <a href="SinglePageVid.html?id=${getOne.seo} ">${getOne.subject} </a>
        </h6>
    
        <div class="entry-meta meta-2 font-x-small color-muted">
            <span class="mr-10"> <i class="ti-time"></i> 15 April 2020</span>
            <span class="has-dot"> <i class="ti-eye"></i> ${getOne.score}  </span>
            <span class="has-dot"> <i class="ti-heart"></i> ${getOne.Heart}  </span>
        </div>
    </article>`
    
    })
    newmainSpan += `</div>`
    secondMain.innerHTML += newmainSpan

}






function secondFetch() {
    fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
      }
    })
    .then(response => response.json())
    .then(thirdData => {
      // console.log(data); // Do something with the fetched data
    
    goWithThird(thirdData)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    }
    
    
    function goWithThird(ThirdRow) {
    
        const thirdMain = document.getElementById('thirdMain');
    
        thirdMain.innerHTML = ''
        let thirdBe = ` <hr><div class="row vertical-divider">`
        
        ThirdRow.slice(12, 16).forEach((goThree, index) => {
           
            thirdBe += `    <article class="col-md-3 mb-sm-3 wow fadeIn animated">
            <figure class="mb-15 mainImg">
                <a href="SinglePageVide.html?id=${goThree.seo}">
                    <img src="../assets/images/videos/longImg/${goThree.image}" alt="${goThree.category}">
                </a>
            </figure>
            <h6 class="post-title font-weight-bold mb-10">
                <a href="SinglePageVide.html?id=${goThree.seo} ">${goThree.subject} </a>
            </h6>
        
            <div class="entry-meta meta-2 font-x-small color-muted">
                <span class="mr-10"> <i class="ti-time"></i> 15 April 2020</span>
                <span class="has-dot"> <i class="ti-eye"></i> ${goThree.score}  </span>
                <span class="has-dot"> <i class="ti-heart"></i> ${goThree.Heart}  </span>
            </div>
        </article>`
        
        })
        thirdBe += `</div>`
        thirdMain.innerHTML += thirdBe
    
    }
    


function loadMore(myValue) {
    const firstBut = document.getElementById('firstBut');
    const secondtBut = document.getElementById('secondBut');
    const secondadd = document.getElementById('secondadd');
    const thirdAdd = document.getElementById('thirdAdd');
    

 
    if (myValue == 12) {
        const getMe = 12
        fetchData(getMe) 
        firstBut.style.display = 'none';
        secondtBut.style.display = 'block'
        secondadd.style.display = 'block'
    } else if (myValue == 16) {
        secondtBut.style.display = 'none'
        thirdAdd.style.display = 'block'
        secondFetch()
    }
   

  }