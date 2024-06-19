
fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(NewReciData => {
     //console.log(NewReciData); // Do something with the fetched data

    homeSingle(NewReciData)
    homeThree(NewReciData)
    MobileData(NewReciData)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  

  //   data for Home page articles
function homeSingle(HomeData){
    //console.log(HomeData);
    const homeSingleright = document.getElementById('Centers');
    homeSingleright.innerHTML=''
    let singleHome = ` <a href="singlePage.html?id=${HomeData[0].seo}"><figure>
                    <img src="../assets/images/Articles/height/${HomeData[0].image}" alt="">
                    <p>${HomeData[0].title}</p>
                </figure></a>`
      homeSingleright.innerHTML = singleHome;
}



function homeThree(HomeandenData){
    const rightsideArticles = document.getElementById('rightSides');
    rightsideArticles.innerHTML = ''

let rightSideHome = `<div>`;
HomeandenData.slice(0,3).forEach((Threeitems, index) => {
    //console.log(Threeitems.title);
    const limitDescribe = limitTextTo50Words(Threeitems.describtion);
rightSideHome += `<a href="singlePage.html?id=${Threeitems.seo}"> <figure>
                    <img src="assets/images/Articles/width/${Threeitems.image}" alt="">
                    <figcaption>
                    <h3>${Threeitems.title}</h3> 
                    <p>${limitDescribe}..  </p>   
                    </figcaption>
                </figure></a>`
})
rightSideHome += `</div>`
rightsideArticles.innerHTML = rightSideHome;
  }




function limitTextTo50Words(text) {
    const words = text.split(/\s+/);
    const limitedText = words.slice(0, 15).join(' ');
    return limitedText;
  }

  function limit33Words(text) {
    const words = text.split(/\s+/);
    const limitTo33 = words.slice(0, 33).join(' ');
    return limitTo33;
  }


  function MobileData(mobileD) {
    const MobileArt = document.getElementById('slider');
    MobileArt.innerHTML = ''

    let MobileView = `<div class="slides">`
    mobileD.slice(0, 3).forEach((mobileData, index) => {
        MobileView += `<img src="../assets/images/Articles/height/${mobileData.image}" class="slide" alt="Image 1">`
    })
    MobileView += `</div>`
    MobileArt.innerHTML = MobileView;

  }


//   <img src="assets/images/Articles/Aquarius-new.png" class="slide" alt="Image 2">
//             <img src="assets/images/Articles/girl-in-the-woods-2023-11-27-05-13-29-utc.jpg" class="slide" alt="Image 3">