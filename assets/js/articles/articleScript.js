async function fetchSubscriptionData() {
    try {
        const response = await fetch('../backend/blog.php');  
        const data = await response.json(); 
        data.forEach(item => {
            
            LatestArticles(data)
            latestNew(data)
            ThreeArticles(data)
            singleItem(data)
            JustTwo(data)
            AncientAliens(data)
            Decoding(data)
            DecodingSec(data)
            DecodingThird(data)
            mostArticles(data)
            MostVisited(data)
            SingleFigure(data)
            trendingToday(data)
          
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  
  fetchSubscriptionData();

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
                                            <a class="img-link" href="single.html?id=${threeData[0].seo}"></a>
                                            <div class="post-content-overlay transition-04s p-20">
                                                <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                    <span class="create-date mr-15 ">${threeData[0].created_at}</span>
                                                    <a href="category.html"><span class="post-cat text-white position-relative">${threeData[0].categoryOne}</span></a>
                                                    <a href="tag.html?id=${threeData[0].seo}"><span class="post-cat text-white position-relative">${threeData[0].tagOne}</span></a>
                                                </div>
                                                <h4 class="post-title">
                                                    <a class="text-white" href="single.html?id=${threeData[0].seo}">${threeData[0].title}</a>
                                                </h4>
                                            </div>
                                        </div>`
                                        let secodRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[1].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[1].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[1].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[1].categoryOne}</span></a>
                                                <a href="tag.html?id=${threeData[1].seo}"><span class="post-cat text-white position-relative">${threeData[1].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html?id=${threeData[1].seo}">${threeData[1].title}</a>
                                            </h4>
                                        </div>
                                    </div>`
                                    let ThirdRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[2].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[2].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[2].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[2].categoryOne}</span></a>
                                                <a href="tag.html?id=${threeData[2].seo}"><span class="post-cat text-white position-relative">${threeData[2].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html?id=${threeData[2].seo}">${threeData[2].title}</a>
                                            </h4>
                                        </div>
                                    </div>`
                                    let forthRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[3].image}')">
                                        <a class="img-link" href="single.html?id=${threeData[3].seo}"></a>
                                        <div class="post-content-overlay transition-04s p-20">
                                            <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                <span class="create-date mr-15 ">${threeData[3].created_at}</span>
                                                <a href="category.html"><span class="post-cat text-white position-relative">${threeData[3].categoryOne}</span></a>
                                                <a href="tag.html?id=${threeData[3].seo}"><span class="post-cat text-white position-relative">${threeData[3].tagOne}</span></a>
                                            </div>
                                            <h4 class="post-title">
                                                <a class="text-white" href="single.html?id=${threeData[3].seo}">${threeData[3].title}</a>
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
                            <img src="../assets/images/Articles/width/${latestItems.image}" alt="${latestItems.categoryOne}, ${latestItems.categoryTwo}, ${latestItems.tagOne}, ${latestItems.tagTwo}, ${latestItems.tagThree}">
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
                                    <img src="../assets/images/Articles/height/${ThreeItems.image}" alt="${ThreeItems.categoryOne}, ${ThreeItems.categoryTwo}, ${ThreeItems.tagOne}, ${ThreeItems.tagTwo}, ${ThreeItems.tagThree}">
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


    const CreatSingle = document.getElementById('singleOne');
    CreatSingle.innerHTML = ''
      const singOneIt = Spirituality[0];
      const oneLimit = limit33Words(singOneIt.describtion); 
      contentSingle = `<article class="first-post wow fadeIn animated mb-md-4 mb-lg-0">
                            <figure class="mb-30">
                                <a href="single.html?id=${singOneIt.seo}">
                                    <img src="../assets/images/Articles/width/${singOneIt.image}" alt="${singOneIt.categoryOne}, ${singOneIt.categoryTwo}, ${singOneIt.tagOne}, ${singOneIt.tagTwo}, ${singOneIt.tagThree}">
                                </a>
                            </figure>
                            <div class="post-content text-center plr-5-percent">
                                <h2 class="post-title mb-30 position-relative">
                                    <a href="single.html?id=${singOneIt.seo}">${singOneIt.title}</a>
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
 
      const Descibi = limit33Words(horryitem.describtion);
      insideHorry += `<article class="col-md-6 wow fadeIn animated">
                                <figure class="mb-15">
                                    <a href="single.html?id=${horryitem.seo}">
                                        <img src="../assets/images/Articles/width/${horryitem.image}" alt="${horryitem.categoryOne}, ${horryitem.categoryTwo}, ${horryitem.tagOne}, ${horryitem.tagTwo}, ${horryitem.tagThree}">
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
                                        <img src="../assets/images/Articles/width/${AliensItem.image}" alt="${AliensItem.categoryOne}, ${AliensItem.categoryTwo}, ${AliensItem.tagOne}, ${AliensItem.tagTwo}, ${AliensItem.tagThree}">
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
                                    <img src="../assets/images/Articles/width/${AliensItemTo.image}" alt="${AliensItemTo.categoryOne}, ${AliensItemTo.categoryTwo}, ${AliensItemTo.tagOne}, ${AliensItemTo.tagTwo}, ${AliensItemTo.tagThree}">
                                </figure>
                            </div>
                        </article>`
    });
    insideAliensTwo += `</div>`
    AliensTwo.innerHTML = insideAliensTwo;
  }


  function Decoding(DecodData) {
    const DecodVid = DecodData;
    const Aliener = DecodVid.filter(item => item.categoryOne === 'Decoding');
    Aliener.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const Decoder = document.getElementById('Decoding');
    Decoder.innerHTML = ''
    let inseidDecoder = `<div class="slide-fade mb-lg-0 mb-md-4 mb-sm-4">`
    Aliener.slice(0, 1).forEach((DecodItems, index) => {
        const DesocLimit = limit33Words(DecodItems.describtion);
        inseidDecoder += `<article class="slide-fade-item">
                                <figure class="mb-30">
                                    <a href="single.html?id=${DecodItems.seo}">
                                        <img src="../assets/images/Articles/width/${DecodItems.image}" alt="${DecodItems.categoryOne}, ${DecodItems.categoryTwo}, ${DecodItems.tagOne}, ${DecodItems.tagTwo}, ${DecodItems.tagThree}">
                                    </a>
                                    <span class="post-format position-top-right text-uppercase font-small">
                                        <i class="ti-video-camera"></i>
                                    </span>
                                </figure>
                                <div class="post-content text-center plr-5-percent">
                                    <h2 class="post-title mb-30 position-relative divider-wave">
                                        <a href="single.html?id=${DecodItems.seo}">${DecodItems.image}</a>
                                    </h2>
                                    <p class="excerpt">
                                        ${DesocLimit} ...
                                    </p>
                                </div>
                            </article>`
    });
    inseidDecoder += `</div>`
    Decoder.innerHTML = inseidDecoder;
  }


  function DecodingSec(SecDecod){

    const DecodTwo = SecDecod;
    const SeDecData = DecodTwo.filter(item => item.categoryOne === 'Decoding');
    SeDecData.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const SecondaryDecod = document.getElementById('DecodingSecond');
    SecondaryDecod.innerHTML = ''
    let insideSecondary = `<div>`
    SeDecData.slice(1,4).forEach((SecondItems, index) => {
        const SecondDecLimi = limitTextTo50Words(SecondItems.describtion);
        insideSecondary += `<article class="row wow fadeIn animated">
                            <div class="col-lg-6 col-md-9 mb-sm-3">
                                <h6 class="post-title mb-10 font-weight-bold">
                                    <a href="single.html?id=${SecondItems.seo}">${SecondItems.title}</a>
                                </h6>
                                <p class="excerpt mb-0">
                                    ${SecondDecLimi} ...
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-3">
                                <figure class="mb-0">
                                    <a href="single.html?id=${SecondItems.seo}"><img src="../assets/images/Articles/width/${SecondItems.image}" alt="${SecondItems.categoryOne}, ${SecondItems.categoryTwo}, ${SecondItems.tagOne}, ${SecondItems.tagTwo}, ${SecondItems.tagThree}"></a>
                                </figure>
                            </div>
                        </article>`
    });
    insideSecondary += `</div>`
    SecondaryDecod.innerHTML = insideSecondary;
  }

  function DecodingThird(ThirdDecodData) {

    const ForThird = ThirdDecodData;
    const newDatas = ForThird.filter(item => item.categoryOne === 'Decoding');
    newDatas.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const DecondThree = document.getElementById('ThirdDecod');
    DecondThree.innerHTML = ''
    let insDecThree = ` <ul class="list-post">`
    newDatas.slice(5,10).forEach((threeDecl, index) => {
        insDecThree += `<li class="mb-15 wow fadeIn animated">
                                <div class="d-flex">
                                    <div class="post-content media-body">
                                        <h6 class="post-title mb-10 font-weight-500"><a href="single.html?id=${threeDecl.seo}">${threeDecl.title}</a></h6>
                                        <div class="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span class="post-on mr-15">${threeDecl.created_at}</span>
                                            <span class="hit-count has-dot">${threeDecl.score} Views</span>
                                        </div>
                                    </div>
                                    <div class="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <a class="color-white" href="single.html?id=${threeDecl.seo}">
                                            <img src="../assets/images/Articles/width/${threeDecl.image}" alt="${threeDecl.categoryOne}, ${threeDecl.categoryTwo}, ${threeDecl.tagOne}, ${threeDecl.tagTwo}, ${threeDecl.tagThree}">
                                        </a>
                                    </div>
                                </div>
                            </li>`
    });
    insDecThree += `</ul>`
    DecondThree.innerHTML = insDecThree;
  }


  function mostArticles(LatestData){
   
const items = LatestData;
const LatestItemOne = items.sort((a, b) => b.score - a.score);
const singleLatest = document.getElementById('OneLatest');
let insideSinle = `<div>`
LatestItemOne.slice(0, 1).forEach((singleLatestIt, index)=> {
 const myLimitSing = limit33Words(singleLatestIt.describtion);
    insideSinle += `<article class="row wow fadeIn animated">
                            	<div class="col-md-6 mb-md-0 mb-sm-3">	
	                                <figure class="mb-0">
	                                    <a href="single.html?id=${singleLatestIt.seo}">
	                                        <img src="../assets/images/Articles/width/${singleLatestIt.image}" alt="${singleLatestIt.categoryOne}, ${singleLatestIt.categoryTwo}, ${singleLatestIt.tagOne}, ${singleLatestIt.tagTwo}, ${singleLatestIt.tagThree}">
	                                    </a>
	                                    <span class="post-format position-top-right text-uppercase font-small">
	                                        <i class="ti-stats-up"></i>
	                                    </span>
	                                </figure>
                                </div>
                                <div class="col-md-6 align-self-center">
                                    <div class="post-content text-center plr-5-percent">
                                        <div class="entry-meta meta-0 mb-15 font-small">
                                            <a href="category.html?id=${singleLatestIt.categoryOne}"><span class="post-cat position-relative"># ${singleLatestIt.categoryOne}</span></a>
                                            <a href="category.html?id=${singleLatestIt.categoryTwo}"><span class="post-cat position-relative"># ${singleLatestIt.categoryTwo}</span></a>
                                        </div>
                                        <h2 class="post-title mb-30 position-relative divider-wave">
                                            <a href="single.html?id=${singleLatestIt.seo}">${singleLatestIt.title}</a>
                                        </h2>
                                        <p class="excerpt">
                                            ${myLimitSing}
                                        </p>
                                        <p><span class="live-now text-danger">Live now</span></p>
                                        
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="horizontal-divider mt-15 mb-15"></div>
                                </div>
                            </article>`

    });
    insideSinle += `</div>`
    singleLatest.innerHTML = insideSinle;
  }

  function MostVisited(mostItems){
    const Mitemer = mostItems;
    const MostFind = Mitemer.sort((a, b) => b.score - a.score);
    const SecMostVie = document.getElementById('MostView');
    SecMostVie.innerHTML = ''
    let onsideMost = `<section>`
    MostFind.slice(1, 4).forEach((MostElements, index)=> {
     const myMost = limit33Words(MostElements.describtion);
        onsideMost += `<article class="row wow fadeIn animated">
                                        <div class="col-md-4">
                                            <figure class="mb-md-0 mb-sm-3">
                                                <img src="../assets/images/Articles/width/${MostElements.image}" alt="${MostElements.categoryOne}, ${MostElements.categoryTwo}, ${MostElements.tagOne}, ${MostElements.tagTwo}, ${MostElements.tagThree}">
                                            </figure>
                                        </div>
                                        <div class="col-md-8 pl-0">
                                            <div class="entry-meta meta-0 mb-15 font-small">
                                                <a href="category.html?id=${MostElements.categoryOne}"><span class="post-cat position-relative"># ${MostElements.categoryOne}</span></a>
                                            </div>
                                            <h6 class="post-title mb-20 font-weight-bold">
                                                <a href="single.html?id=${MostElements.seo}">${MostElements.title}</a>
                                            </h6>
                                            <p class="excerpt mb-0">
                                                ${myMost}
                                            </p>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="horizontal-divider mt-15 mb-15"></div>
                                        </div>
                                    </article>`
    
        });
        onsideMost += `</section>`
        SecMostVie.innerHTML = onsideMost;
      }

function SingleFigure(figureData) {
    const Figsorted = figureData;
    const figOut = Figsorted.sort((a, b) => b.score - a.score);
    const FigSingVie = document.getElementById('myFig');
    FigSingVie.innerHTML = ''
    let insidFigSin = `<section>`
    figOut.slice(5, 10).forEach((figElemIt, index)=> {
     const lastElements = limit33Words(figElemIt.describtion);
        insidFigSin += `<article class="wow fadeIn animated">
                                        <h6 class="post-title font-weight-bold mb-10">
                                            <a href="single.html?id=${figElemIt.seo}">${figElemIt.title}</a>
                                        </h6>
                                        <p class="excerpt">
                                            ${lastElements}..
                                        </p>
                                        <div class="horizontal-divider mt-15 mb-15"></div>
                                    </article>`
    
        });
        insidFigSin += `</section>`
        FigSingVie.innerHTML = insidFigSin;
}


function trendingToday(Trends) {
    const newDatas = Trends;
    const itemsR = newDatas.sort((a, b) => b.score - a.score);
 const flash = document.getElementById('firstFlash');
 const flashTwo = document.getElementById('secondFlash');
 const flashThree = document.getElementById('thirdFlash');
 const flashFour = document.getElementById('forthflash');
  flash.innerHTML = ''
  flashTwo.innerHTML = ''
  flashThree.innerHTML = ''
  flashFour.innerHTML = ''

flash.innerHTML = `<a class="font-large post-title" href="single.html?id=${itemsR[0].seo}">${itemsR[0].title}</a>`;
flashTwo.innerHTML = `<a class="font-large post-title" href="single.html?id=${itemsR[1].seo}">${itemsR[1].title}</a>`;
flashThree.innerHTML = `<a class="font-large post-title" href="single.html?id=${itemsR[2].seo}">${itemsR[2].title}</a>`;
flashFour.innerHTML = `<a class="font-large post-title" href="single.html?id=${itemsR[4].seo}">${itemsR[4].title}</a>`;
 
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