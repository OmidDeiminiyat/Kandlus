
var url = window.location.search.substring(1);
var vars = url.split("=");
const id = vars[1];
if (!id) {
    console.error("ID is null or empty. Make sure the 'id' parameter is provided in the URL.");
    // Optionally, you can add code here to handle this case, such as displaying an error message to the user
  } else {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?seo=eq.${id}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(data => {

singlePageArticle(data)
})
.catch(error => {
  console.error('Error fetching data:', error);
});

  }



  function singlePageArticle(showVideo) {
    const cateTwo = document.getElementById('categor');
    const tit = document.getElementById('titleArt');
    const informs = document.getElementById('inform');
    const imageArt = document.getElementById('articleImage');
    const Describ = document.getElementById('letDescribe');
 const maintextOne = document.getElementById('mainTextOne');
 const maintextTwo = document.getElementById('mainTextTwo');
 const maintextThree = document.getElementById('mainTextThree');
 const AllTags = document.getElementById('Article_tags');
   

showVideo.forEach((getData, index) => {
  let teoCat = `<a href="category.html"><span class="post-cat position-relative"># ${getData.categoryOne}</span></a>
                <a href="category.html"><span class="post-cat position-relative"># ${getData.categoryTwo}</span></a>`
      cateTwo.innerHTML= teoCat;           
      tit.innerHTML=getData.title;
      let insideInforms = `<div class="entry-meta align-items-center meta-2 font-small color-muted">
                                    <p class="mb-5">
                                        <a class="author-avatar" href="#"><img class="img-circle" src="../../imagess/kandlus.png" alt=""></a>
                                        By <a href="#"><span class="author-name font-weight-bold color-black">${getData.channel}</span></a>
                                    </p>
                                    <span class="mr-10"> ${getData.created_at}</span>
                                    <span class="has-dot"> ${getData.score} views</span>
                                </div>`
       informs.innerHTML = insideInforms;
       imageArt.innerHTML = `<img src="../assets/images/Articles/megaW/${getData.image}" alt="${getData.categoryOne}, ${getData.categoryTwo}, ${getData.tagOne}, ${getData.tagTwo}, ${getData.tagThree}">`       
       Describ.innerHTML = getData.describtion;                  
                maintextOne.innerHTML = getData.maintextOne;
                maintextTwo.innerHTML = getData.maintextTwo;
                maintextThree.innerHTML = getData.maintextThree;
                let tagList = `<a href="Tag.html?id=${getData.tagOne}" rel="tag">${getData.tagOne}</a>
                                <a href="Tag.html?id=${getData.tagTwo}" rel="tag">${getData.tagTwo}</a>
                                <a href="Tag.html?id=${getData.tagThree}" rel="tag">${getData.tagThree}</a>`
                AllTags.innerHTML = tagList;
                relatedArticle(getData.categoryOne)
                popularArticles(getData.score)
})
}

function onScrollTo1200px() {
  // console.log('You have scrolled to the point!');
  relatedArticle();
}


function relatedArticle(recivDatp) {
    const myRecivedCat = recivDatp;
  
    fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?categoryOne=eq.${myRecivedCat}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(newData => {
    relatedArticleByCategory(newData)
    rightSideThree(newData)
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  }
  function relatedArticleByCategory(relatedData){
    const realtedPost = document.getElementById('related-posts');
    realtedPost.innerHTML = ''
    let relatedinside = ` <h3 class="mb-30">Related articles</h3>
                            <div class="loop-list">`
    relatedData.slice(0, 3).forEach((itemsRelat, index) => {
    const limiteddescrib = limitWords(itemsRelat.describtion); 
    relatedinside += `<article class="row mb-30 wow fadeIn animated">
                                    <div class="col-md-4">
                                        <div class="post-thumb position-relative thumb-overlay mb-md-0 mb-3">
                                            <div class="img-hover-slide border-radius-5 position-relative" style="background-image: url('../../assets/images/Articles/width/${itemsRelat.image}')">
                                                <a class="img-link" href="single.html"></a>
                                                <span class="top-right-icon background8"><i class="mdi mdi-flash-on"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8 align-center-vertical">
                                        <div class="post-content">
                                            <div class="entry-meta meta-0 font-small mb-15"><a href="category.html?id=${itemsRelat.categoryOne}"><span class="post-cat background2 color-white"># ${itemsRelat.categoryOne}</span></a></div>
                                            <h4 class="post-title mb-15">
                                                <a href="single.html?id=${itemsRelat.seo}">${itemsRelat.title}</a>
                                            </h4>
                                            <p class="font-medium excerpt">${limiteddescrib} ...</p>
                                        </div>
                                    </div>
                                </article>`
      });
      relatedinside += `</div>`
      realtedPost.innerHTML = relatedinside;
  }

function rightSideThree(firstData) {
  const rightSideTh = document.getElementById('articles');
  rightSideTh.innerHTML = ''
  let firstThr = `<h3>Related articles</h3><hr class="break"> <span>`
  firstData.forEach((threeIt, index) => {
    const descThre = Limitosho(threeIt.describtion);
    firstThr += `<a href="singlePage.html?id=${threeIt.seo}">
                        <article class="dataArticle">
                            <h5>${threeIt.title}</h5>
                            <p>${descThre} ...</p>
                            <div>
                                <span><i class="material-symbols-outlined">visibility</i> ${threeIt.tagOne} </span> 
                                <span><i class="material-symbols-outlined"> edit_note </i> ${threeIt.channel} </span>
                            </div>
                        </article>
                    </a>`
  })
  firstThr += `</span>`
  rightSideTh.innerHTML = firstThr;
}


fetchAndSortData()
// you might be intrested
  async function fetchAndSortData() {
    const supabaseUrl = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';
    
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/blog`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      
      // Sort data by score in descending order
      data.sort((a, b) => b.score - a.score);
      // Output sorted data
      // console.log('New test:' +  data);
      forArticlesD(data)
      randomArt(data)
      Decod(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function forArticlesD(forItemsD) {
    console.log(forItemsD);
    const ForItemsD = document.getElementById('intrested');
    ForItemsD.innerHTML = ''
    let inForItemD = ` <ul class="list-post">`
    forItemsD.slice(3,5).forEach((dataFour, index) => {
      console.log(dataFour);
      const ShortedD = limitWords(dataFour.describtion)
      inForItemD += `<li class="mb-15">
                                        <div class="d-flex">
                                            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <a class="color-white" href="single.html">
                                                    <img src="../assets/images/Articles/width/${dataFour.image}" alt="${dataFour.categoryOne}, ${dataFour.categoryTwo}, ${dataFour.tagOne}, ${dataFour.tagTwo}, ${dataFour.tagThree}">
                                                </a>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html?id=${dataFour.seo}">${dataFour.title}</a></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey">
                                                    <span class="post-on">${dataFour.created_at}</span>
                                                    <span class="hit-count has-dot">${dataFour.score} Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`
    })
    inForItemD += `</ul>`
    ForItemsD.innerHTML=inForItemD;
  }
  
  // we call api when scrol down reached the half of the page
  function onScrollTo1200px() {
   
    fetchAndSortData();
  }
    
  const pageHeight = document.documentElement.scrollHeight;
  const claculHight = pageHeight / 2; 
console.log(`Page height is: ${claculHight}px`);

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition >= claculHight) {
      onScrollTo1200px();
      window.removeEventListener('scroll', arguments.callee);
    }
  });




   // Function to be called when the element with id="test" is reached
   function onReachTestElement(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element with id="test" is now in view!');
        observer.unobserve(entry.target);
        observId()
      }
    });
  }
  const observer = new IntersectionObserver(onReachTestElement, {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
  });

    // use this function for load when id observed
  /*
    const targetElement = document.getElementById('MostPopular');
    observer.observe(targetElement);

    function observId() {
    }
*/


function randomArt(besIremR) {
  const inAncient = document.getElementById('MostPopular');
  inAncient.innerHTML = ''
  let typTwo = `<ul class="list-post">`
  besIremR.slice(0,3).forEach((obseIteR, index) => {
    const ShortSheyda = Limitosho(obseIteR.describtion);
    typTwo += `<li class="mb-15">
                                        <div class="d-flex">
                                            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <a class="color-white" href="single.html">
                                                    <img src="../assets/images/Articles/width/${obseIteR.image}" alt="${obseIteR.categoryOne}, ${obseIteR.categoryTwo}, ${obseIteR.tagOne}, ${obseIteR.tagTwo}, ${obseIteR.tagThree}">
                                                </a>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html?id=${obseIteR.seo}">${obseIteR.title}</a></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey mt-10">
                                                    <span class="post-on mr-15"><a href="category.html?id=${obseIteR.categoryOne}"> ${obseIteR.categoryOne}</a></span>
                                                    <span class="hit-count has-dot">${obseIteR.score} Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`
  })
  typTwo += `</ul>`
  inAncient.innerHTML = typTwo;
}


function Decod(dataDecod) {
  const DecoCate = document.getElementById('DecodingCate');
  const letDecod = dataDecod;
  const decoders = letDecod.filter(item => item.categoryOne === 'Decoding');
    decoders.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    DecoCate.innerHTML = ''
    let insidDecoder = `<ul class="list-post">`
    decoders.slice(0,4).forEach((DecoItems, index) => {
      console.log('Decoding is:' + DecoItems);
      insidDecoder += `<li class="mb-15">
                                        <div class="d-flex">
                                            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <a class="color-white" href="single.html">
                                                    <img src="../assets/images/Articles/width/${DecoItems.image}" alt="${DecoItems.categoryOne}, ${DecoItems.categoryTwo}, ${DecoItems.tagOne}, ${DecoItems.tagTwo}, ${DecoItems.tagThree}">
                                                </a>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><a href="single.html?id=${DecoItems.seo}">${DecoItems.title}</a></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey mt-10">
                                                    <span class="post-on mr-15"><a href="category.html?id=${DecoItems.categoryOne}"> ${DecoItems.categoryOne}</a></span>
                                                    <span class="hit-count has-dot">${DecoItems.score} Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`
    });
    insidDecoder += `</ul>`
    DecoCate.innerHTML = insidDecoder;
}

  function limitWords(shortText) {
    const splitWord = shortText.split(/\s+/);
  
    const limitedDone = splitWord.slice(0, 50).join(' ');
  
    return limitedDone;
  }

  function Limitosho(Sheyda) {
    const SlitSheyda = Sheyda.split(/\s+/);
    const limitSheyda = SlitSheyda.slice(0, 30).join(' ');
    return limitSheyda;
  }



