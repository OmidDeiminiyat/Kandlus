
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






  function limitWords(shortText) {
    const splitWord = shortText.split(/\s+/);
  
    const limitedDone = splitWord.slice(0, 50).join(' ');
  
    return limitedDone;
  }