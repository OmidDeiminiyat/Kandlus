
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
  
    LatestArticles(NewReciData)
    latestNew(NewReciData)
    ThreeArticles(NewReciData)
    singleItem(NewReciData)
    JustTwo(NewReciData)
    AncientAliens(NewReciData)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  



  function LatestArticles(threeData){
    const firstArticle = document.getElementById('firsthigh');
    const secondArticcle = document.getElementById('secondHigh');
    const ThirdArticcle = document.getElementById('thirthHight');
    const forthArticcle = document.getElementById('ForthHight');
    firstArticle.innerHTML = ''
    secondArticcle.innerHTML = ''
    ThirdArticcle.innerHTML = ''
    forthArticcle.innerHTML = ''

 let threemyRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[0].image}')">
                                            <a class="img-link" href="single.html?id=${threeData[1].seo}"></a>
                                            <div class="post-content-overlay transition-04s p-20">
                                                <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                    <span class="create-date mr-15 ">${threeData[0].created_at}</span>
                                                    <a href="category.html"><span class="post-cat text-white position-relative">${threeData[0].categoryOne}</span></a>
                                                    <a href="tag.html"><span class="post-cat text-white position-relative">${threeData[0].tagOne}</span></a>
                                                </div>
                                                <h4 class="post-title">
                                                    <a class="text-white" href="single.html">${threeData[0].title}</a>
                                                </h4>
                                            </div>
                                        </div>`
                                        let secodRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[1].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[1].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[1].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[1].categoryOne}</span></a>
                                                <a href="tag.html"><span class="post-cat text-white position-relative">${threeData[1].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html">${threeData[1].title}</a>
                                            </h4>
                                        </div>
                                    </div>`
                                    let ThirdRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[2].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[2].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[2].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[2].categoryOne}</span></a>
                                                <a href="tag.html"><span class="post-cat text-white position-relative">${threeData[2].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html">${threeData[2].title}</a>
                                            </h4>
                                        </div>
                                    </div>`
                                    let forthRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[3].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[3].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[3].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[3].categoryOne}</span></a>
                                                <a href="tag.html"><span class="post-cat text-white position-relative">${threeData[3].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html">${threeData[3].title}</a>
                                            </h4>
                                        </div>
                                    </div>`

   firstArticle.innerHTML = threemyRow;
   secondArticcle.innerHTML = secodRow;
   ThirdArticcle.innerHTML = ThirdRow;
   forthArticcle.innerHTML = forthRow;
  }



  function latestNew(LatestData){
    const Latest = document.getElementById('latestNew');
    
    Latest.innerHTML = ''
    let insideLatestNew = `<div class="loop-grid row mb-15 vertical-divider">`
    LatestData.slice(0, 4).forEach((latestItems, index) => {
      const limitless = limit33Words(latestItems.describtion); 
      insideLatestNew += `<article class="col-lg-3 col-md-6 col-sm-12">
                            <div class="entry-meta meta-0 mb-15 font-small">
                            <a href="category.html?id=${latestItems.categoryOne}"><span class="post-cat position-relative"># ${latestItems.categoryOne}</span></a>
                            <a href="category.html?id=${latestItems.categoryTwo}"><span class="post-cat position-relative"># ${latestItems.categoryTwo}</span></a>
                        </div>
                        <h5 class="post-title font-weight-bold mb-10">
                            <a href="single.html?id=${latestItems.seo}">${latestItems.title}</a>
                        </h5>
                        <p class="excerpt mb-15">${limitless}...</p>
                        <figure class="mb-15">
                            <img src="../assets/images/Articles/width/${latestItems.image}" alt="">
                        </figure>
                        <div class="entry-meta meta-2 text-uppercase font-x-small color-muted">
                            <a class="float-left mr-10 author-img" href="author.html">
                                <img src="../assets/images/kandlus.png" alt="">
                            </a> By
                            <a href="author.html"><span class="author-name">${latestItems.channel}</span></a>
                            <span class="create-date ml-30">${latestItems.created_at}</span>
                        </div></article>`
    });
    insideLatestNew += `</div>`
    Latest.innerHTML = insideLatestNew;
  }


  function ThreeArticles(threeData) {
    const ThreeArt = document.getElementById('threeArticle');
    ThreeArt.innerHTML = ''

    let insideThree = `<div class="loop-grid-2 row vertical-divider">`
    threeData.slice(0, 3).forEach((ThreeItems, index) => {
      const ThreeLimited = limit33Words(ThreeItems.describtion); 
      insideThree += `<article class="col-lg-4 col-md-6 col-sm-12 wow fadeIn animated">
                        <div class="row">
                            <div class="col-12">
                                <div class="has-top-border mb-25"></div>
                            </div>
                            <div class="col-md-6">
                                <div class="entry-meta meta-0 mb-15 font-small">
                                    <a href="category.html?id=${ThreeItems.categoryOne}"><span class="post-cat position-relative"># ${ThreeItems.categoryOne}</span></a>
                                    <a href="category.html?id=${ThreeItems.categoryTwo}"><span class="post-cat position-relative"># ${ThreeItems.categoryTwo}</span></a>
                                </div>
                                <h6 class="post-title mb-10 font-weight-bold">
                                    <a href="single.html?id=${ThreeItems.seo}">${ThreeItems.title}</a>
                                </h6>
                                <p class="excerpt mb-0">
                                    ${ThreeLimited}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <figure class="mb-15 mt-sm-3">
                                    <img src="../assets/images/Articles/height/${ThreeItems.image}" alt="">
                                </figure>
                            </div>
                        </div>
                    </article>`
    })
    insideThree += `</div>`
    ThreeArt.innerHTML = insideThree;
  }


  function singleItem(SingleIt) {
    const items = SingleIt;
    const Spirituality = items.filter(item => item.categoryOne === 'Spirituality');
    Spirituality.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(Spirituality[0]);

    const CreatSingle = document.getElementById('singleOne');
    CreatSingle.innerHTML = ''
      const singOneIt = Spirituality[0];
      const oneLimit = limit33Words(singOneIt.describtion); 
      contentSingle = `<article class="first-post wow fadeIn animated mb-md-4 mb-lg-0">
                            <figure class="mb-30">
                                <a href="single.html?id=${singOneIt.seo}">
                                    <img src="../assets/images/Articles/width/${singOneIt.image}" alt="">
                                </a>
                            </figure>
                            <div class="post-content text-center plr-5-percent">
                                <h2 class="post-title mb-30 position-relative">
                                    <a href="single.html?id=${singOneIt.title}">${singOneIt.title}</a>
                                </h2>
                                <p class="excerpt">
                                    ${oneLimit}
                                </p>
                                <div class="entry-meta meta-0 mb-15 font-small">
                                    <a href="category.html?id=${singOneIt.categoryOne}"><span class="post-cat position-relative"># ${singOneIt.categoryOne}</span></a>
                                    <a href="category.html?id=${singOneIt.categoryTwo}"><span class="post-cat position-relative"># ${singOneIt.categoryTwo}</span></a>
                                </div>
                            </div>
                        </article>`
    
    CreatSingle.innerHTML = contentSingle;
   
  }

  function JustTwo(TwoItemer) {

    const Toitems = TwoItemer;
    const SpiritualityTo = Toitems.filter(item => item.categoryOne === 'Spirituality');
    SpiritualityTo.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const horry = document.getElementById('TwoHorizon');
    horry.innerHTML = ''
    let insideHorry = `<div class="row vertical-divider">`
    SpiritualityTo.slice(1, 5).forEach((horryitem, index)=>{
      console.log(horryitem);
      const Descibi = limit33Words(horryitem.describtion);
      insideHorry += `<article class="col-md-6 wow fadeIn animated">
                                <figure class="mb-15">
                                    <a href="single.html?id=${horryitem.seo}">
                                        <img src="../assets/images/Articles/width/${horryitem.image}" alt="">
                                    </a>
                                </figure>
                                <h6 class="post-title font-weight-bold mb-10">
                                    <a href="single.html?id=${horryitem.seo}">${horryitem.title}</a>
                                </h6>
                                <p class="excerpt">
                                ${Descibi}
                                </p>
                            </article>`
    });
    insideHorry += `<div class="col-12">
                                <div class="horizontal-divider mb-15 mt-15"></div>
                            </div></div>`
    horry.innerHTML = insideHorry;
  }



  function AncientAliens(AliensData) {
    const Aliens = AliensData;
    const Aliener = Aliens.filter(item => item.categoryOne === 'Decoding');
    Aliener.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    const Alsienses = document.getElementById('AncientAliens');
    Alsienses.innerHTML = ''
    let insideAliens = ` <article class="row wow fadeIn animated">`
    Aliener.slice(0, 2).forEach((AliensItem, index) => {
       const AlienLimit = limit33Words(AliensItem.describtion);
      insideAliens += `<article class="col-md-6 wow fadeIn animated">
                                <figure class="mb-15">
                                    <a href="single.html?id=${AliensItem.seo}">
                                        <img src="../assets/images/Articles/width/${AliensItem.image}" alt="">
                                    </a>
                                </figure>
                                <h6 class="post-title font-weight-bold mb-10">
                                    <a href="single.html?id=${AliensItem.seo}">${AliensItem.title}</a>
                                </h6>
                                <p class="excerpt">
                                ${AlienLimit}
                                </p>
                                <div class="entry-meta meta-0 mb-15 font-small">
                                    <a href="category.html?id=${AliensItem.categoryOne}"><span class="post-cat position-relative"># ${AliensItem.categoryOne}</span></a>
                                    <a href="category.html?id=${AliensItem.categoryTwo}"><span class="post-cat position-relative"># ${AliensItem.categoryTwo}</span></a>
                                </div>
                            </article>`
    });
    insideAliens += `</div>`
    Alsienses.innerHTML = insideAliens;



    const AliensTwo = document.getElementById('AliensTwo');
    AliensTwo.innerHTML = ''
    let insideAliensTwo = `<div>`
    Aliener.slice(2, 4).forEach((AliensItemTo, index) => {
       const AlenDesc = limit33Words(AliensItemTo.describtion);
      insideAliensTwo += `<article class="row wow fadeIn animated">
                            <div class="col-md-6">
                                <div class="entry-meta meta-0 mb-15 font-small">
                                    <a href="category.html?id=${AliensItemTo.categoryOne}"><span class="post-cat position-relative"># ${AliensItemTo.categoryOne}</span></a>
                                </div>
                                <h6 class="post-title mb-20 font-weight-bold">
                                    <a href="single.html?id=${AliensItemTo.seo}">${AliensItemTo.title}</a>
                                </h6>
                                <p class="excerpt mb-0">
                                    ${AlenDesc}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <figure class="mb-0">
                                    <img src="../assets/images/Articles/width/${AliensItemTo.image}" alt="">
                                </figure>
                            </div>
                        </article>`
    });
    insideAliensTwo += `</div>`
    AliensTwo.innerHTML = insideAliensTwo;
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