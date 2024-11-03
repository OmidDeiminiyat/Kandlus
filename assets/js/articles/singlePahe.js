
  async function fetchSubscriptionData() {
    try {
        const response = await fetch('../backend/blog.php');  
        const data = await response.json(); 
        
          sessionStorage.setItem('ArtId', data[0].id);
          var url = window.location.search.substring(1);
          var vars = url.split("=");
          const id = vars[1];
          const myArticle = data.filter(item => item.seo === id);
          singlePageArticle(myArticle)
          console.log(myArticle);
          const dataForRelat = data.filter(item => item.categoryOne === myArticle[0].categoryOne);
          relatedArticle(dataForRelat)
          forArticlesD(data)
          randomArt(data)
          Decod(data)
          
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  
  fetchSubscriptionData();


  


  function singlePageArticle(showVideo) {
    console.log(showVideo);
    
    const cateTwo = document.getElementById('categor');
    const tit = document.getElementById('titleArt');
    const informs = document.getElementById('inform');
    const imageArt = document.getElementById('articleImage');
    const Describ = document.getElementById('letDescribe');
 const maintextOne = document.getElementById('mainTextOne');
 const maintextTwo = document.getElementById('mainTextTwo');
 const maintextThree = document.getElementById('mainTextThree');
 const AllTags = document.getElementById('Article_tags');
 const socialTitle = document.getElementById('metaTitle');
 const socialDesrib = document.getElementById('metaDescrib');
 const socialImage = document.getElementById('metaImage');
 const SocialURL = document.getElementById('MetaURL');
   


  socialTitle.innerHTML = `property="og:title" content=${showVideo[0].title}`;
  socialDesrib.innerHTML = `property="og:description" content="${showVideo[0].describtion}"`;
  socialImage.innerHTML = `property="og:image" content="<img src="../assets/images/Articles/megaW/${showVideo[0].image}">"`;
  SocialURL.innerHTML = `property="og:url" content="https://kandlus.net/blog/single.html?id=${showVideo[0].seo}"`;

  let teoCat = `<a href="category.html"><span class="post-cat position-relative"># ${showVideo[0].categoryOne}</span></a>
                <a href="category.html"><span class="post-cat position-relative"># ${showVideo[0].categoryTwo}</span></a>`
      cateTwo.innerHTML= teoCat;           
      tit.innerHTML=showVideo[0].title;
      let insideInforms = `<div class="entry-meta align-items-center meta-2 font-small color-muted">
                                    <p class="mb-5">
                                        <a class="author-avatar" href="#"><img class="img-circle" src="../assets/images/kandlus.png" alt=""></a>
                                        By <a href="#"><span class="author-name font-weight-bold color-black">${showVideo[0].channel}</span></a>
                                    </p>
                                    <span class="mr-10"> ${showVideo[0].created_at}</span>
                                    <span class="has-dot"> ${showVideo[0].score} views</span>
                                </div>`
       informs.innerHTML = insideInforms;
       imageArt.innerHTML = `<img src="../assets/images/Articles/megaW/${showVideo[0].image}" alt="${showVideo[0].categoryOne}, ${showVideo[0].categoryTwo}, ${showVideo[0].tagOne}, ${showVideo[0].tagTwo}, ${showVideo[0].tagThree}">`       
       Describ.innerHTML = showVideo[0].describtion;                  
                maintextOne.innerHTML = showVideo[0].maintextOne;
                maintextTwo.innerHTML = showVideo[0].maintextTwo;
                maintextThree.innerHTML = showVideo[0].maintextThree;
                let tagList = `<a href="Tag.html?id=${showVideo[0].tagOne}" rel="tag">${showVideo[0].tagOne}</a>
                                <a href="Tag.html?id=${showVideo[0].tagTwo}" rel="tag">${showVideo[0].tagTwo}</a>
                                <a href="Tag.html?id=${showVideo[0].tagThree}" rel="tag">${showVideo[0].tagThree}</a>`
                AllTags.innerHTML = tagList;
                const forTitlt = document.getElementById('ArtTitle');
                const blogDescrib = document.getElementById('bloDescr');
                blogDescrib.innerHTML = `<meta name="description" content="${showVideo[0].describtion}">`
                forTitlt.innerText = showVideo[0].title;

}


function justTest(artItems) {
 
  // const forTitlt = document.getElementById('ArtTitle');
  // forTitlt.innerText = items[0].title;
}

  function relatedArticle(allData){
    console.log(allData);    
    
    const realtedPost = document.getElementById('related-posts');
    realtedPost.innerHTML = ''
    let relatedinside = ` <h3 class="mb-30">Related articles</h3>
                            <div class="loop-list">`
    allData.slice(0, 3).forEach((itemsRelat, index) => {
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


  
  function forArticlesD(forItemsD) {
    
    const ForItemsD = document.getElementById('intrested');
    ForItemsD.innerHTML = ''
    let inForItemD = ` <ul class="list-post">`
    forItemsD.slice(3,5).forEach((dataFour, index) => {
     
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




