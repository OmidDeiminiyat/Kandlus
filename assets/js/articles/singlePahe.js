
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
 const insideFigure = document.getElementById('insideFigure');
 const maintextOne = document.getElementById('mainTextOne');
 const maintextTwo = document.getElementById('mainTextTwo');
 const maintextThree = document.getElementById('mainTextThree');
 const AllTags = document.getElementById('Article_tags');
    insideFigure.innerHTML = ''

showVideo.forEach((getData, index) => {
    let allInsides = `<h1>${getData.title}</h1>
                        <img src="../assets/images/Articles/width/${getData.image}" alt="${getData.categoryOne} , ${getData.categoryTwo}, ${getData.tagOne}, ${getData.tagTwo}">
                        <figcaption>
                            <div class="AllIcpns" >
                                <div>
                                    <span><i class="material-symbols-outlined">visibility</i> ${getData.score} </span> 
                                    <span><i class="material-symbols-outlined"> edit_note </i> ${getData.channel} </span>
                                    <span><i class="material-symbols-outlined"> save </i> Save</span>
                                </div>
                                <div class="Socials">
                                    <span> <img src="../assets/images/icons/facebook-2.png" alt="">  <img src="../assets/images/icons/instagram.png" alt="">  </span>
                                </div>
                            </div>
                            <p class="Description"> ${getData.describtion}
                            </p>
                        </figcaption>`
                insideFigure.innerHTML = allInsides;
                maintextOne.innerHTML = getData.maintextOne;
                maintextTwo.innerHTML = getData.maintextTwo;
                maintextThree.innerHTML = getData.maintextThree;
                let tagList = `<a href="tags.html?id=${getData.tagOne}"> ${getData.tagOne} </a> <a href="tags.html?id=${getData.tagTwo}"> ${getData.tagTwo} </a> <a href="tags.html?id=${getData.tagThree}"> ${getData.tagThree} </a>`
                AllTags.innerHTML = tagList;
                relatedArticle(getData.categoryOne)
                popularArticles(getData.score)
})

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
    const realtedPost = document.getElementById('realtedPost');
    const limiteddescrib = limitWords(relatedData[0].describtion); 
    let trelatedIns = `<a href="singlePage.html?id=${relatedData[0].seo}"> <figure>
                            <img src="../assets/images/Articles/width/${relatedData[0].image}" alt="">
                        </figure>
                        <article>
                            <header><h1>${relatedData[0].title} </h1>
                                <p>${limiteddescrib}
                                </p>
                                <div class="Article_tags singlePost">
                                    <a href="tags.html?id=${relatedData[0].tagOne}">${relatedData[0].tagOne} </a>
                                    <a href="tags.html?id=${relatedData[0].tagTwo}">${relatedData[0].tagTwo}</a>
                                </div>
                            </header>
                        </article></a>`
                        realtedPost.innerHTML = trelatedIns;
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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function forArticlesD(forItemsD) {
    console.log(forItemsD);
    const ForItemsD = document.getElementById('secondSection');
    ForItemsD.innerHTML = ''
    let inForItemD = ` <div class="fourElements">`
    forItemsD.forEach((dataFour, index) => {
      console.log(dataFour);
      const ShortedD = limitWords(dataFour.describtion)
      inForItemD += `<figure> <a href="singlePage.html?id=${dataFour.seo}">
                           <img src="../assets/images/Articles/width/${dataFour.image}" alt="">
                           <figcaption>
                               <h3>${dataFour.title}</h3>
                               <p>${ShortedD}</p>
                               <div> <a href="tags.html?id=${dataFour.tagOne}">${dataFour.tagOne}</a>, <a href="tags.html?id=${dataFour.tagTwo}">${dataFour.tagTwo}</a> </div>
                           </figcaption>
                           </a></figure>`
    })
    inForItemD += `</div>`
    ForItemsD.innerHTML=inForItemD;
  }
  
  // we call api when scrol down reached the half of the page
  function onScrollTo1200px() {
    // console.log('You have scrolled to the point!');
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

  const targetElement = document.getElementById('AncientLine');

  observer.observe(targetElement);

function observId() {
const myCategories = 'Decoding';
  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?categoryOne=eq.${myCategories}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(obsData => {
    bservedIt(obsData)
  
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
}
function bservedIt(besIremR) {
  console.log(besIremR);
  const inAncient = document.getElementById('AncientCivilization');
  inAncient.innerHTML = ''
  let typTwo = ``
  besIremR.forEach((obseIteR, index) => {
    const ShortSheyda = Limitosho(obseIteR.describtion);
    typTwo += `<div class="TwoAncient">
                        <figure>
                            <img src="../assets/images/Articles/width/${obseIteR.image}" alt="">
                        </figure>
                         <article>
                            <hgroup>
                                <h3>${obseIteR.title}</h3>
                                <p>${ShortSheyda}</p>
                                <div class="views">
                                    <span class="material-symbols-outlined"> visibility </span> 33
                                    <span class="material-symbols-outlined"> schedule </span>33.12.2024
                                </div>
                                <a href="singlePage.html?id=${obseIteR.seo}"> Read article</a>
                            </hgroup>
                        </article></div>`
  })
  typTwo += ``
  inAncient.innerHTML = typTwo;
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