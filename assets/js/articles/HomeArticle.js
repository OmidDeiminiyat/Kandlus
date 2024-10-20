
async function fetchSubscriptionData() {
  try {
      const response = await fetch('backend/blog.php');  
      const data = await response.json(); 
      data.forEach(item => {
        homeSingle(data)
        homeThree(data)
        MobileData(data)
        
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

fetchSubscriptionData();

function homeSingle(HomeData){
  const sortedArticles = HomeData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const homeSingleright = document.getElementById('Centers');
    homeSingleright.innerHTML=''
    let singleHome = ` <a href="blog/single.html?id=${sortedArticles[0].seo}"><figure>
                    <img src="../assets/images/Articles/height/${sortedArticles[0].image}"  alt="${sortedArticles[0].categoryOne}, ${sortedArticles[0].categoryTwo}, ${sortedArticles[0].tagOne}, ${sortedArticles[0].tagTwo}, ${sortedArticles[0].tagThree}">
                    <p>${sortedArticles[0].title}</p>
                </figure></a>`
      homeSingleright.innerHTML = singleHome;
}


function homeThree(HomeandenData){
  const threeSort = HomeandenData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const rightsideArticles = document.getElementById('rightSides');
    rightsideArticles.innerHTML = ''

let rightSideHome = `<div>`;
threeSort.slice(0,3).forEach((Threeitems, index) => {
    //console.log(Threeitems.title);
    const limitDescribe = limitTextTo50Words(Threeitems.describtion);
rightSideHome += `<a href="blog/single.html?id=${Threeitems.seo}"> <figure>
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
    const MobileSort = mobileD.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const MobileArt = document.getElementById('slider');
    MobileArt.innerHTML = ''

    let MobileView = `<div class="slides">`
    MobileSort.slice(0, 3).forEach((mobileData, index) => {
        MobileView += `<img src="../assets/images/Articles/height/${mobileData.image}" class="slide" alt="Image 1">`
    })
    MobileView += `</div>`
    MobileArt.innerHTML = MobileView;

  }
