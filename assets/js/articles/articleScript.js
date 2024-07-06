
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
    HotArticle(NewReciData)
    homeThree(NewReciData)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  



  function LatestArticles(threeData){
    const firstArticle = document.getElementById('firsthigh');
    firstArticle.innerHTML = ''

   
 let threemyRow = `<div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url('../assets/images/Articles/height/${threeData[0].image}')">
                                            <a class="img-link" href="single.html"></a>
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
   firstArticle.innerHTML = threemyRow;

  }
/*
  function HotArticle(HotData) {
    const Hoter = document.getElementById('nav-trending');
    Hoter.innerHTML = ''

    let insideHoter = `<div class="home-featured-1 post-module-1">`
    HotData.forEach((items, index) => {
      insideHoter += `<div class="post-thumb position-relative">
                                        <div class="thumb-overlay img-hover-slide transition-04s position-relative" style="background-image: url(http://via.placeholder.com/600x700)">
                                            <a class="img-link" href="single.html"></a>
                                            <div class="post-content-overlay transition-04s p-20">
                                                <div class="entry-meta mb-20 text-uppercase font-small text-white">
                                                    <span class="create-date mr-15 ">25 Jan 2020</span>
                                                    <a href="category.html"><span class="post-cat text-white position-relative">World</span></a>
                                                    <a href="category.html"><span class="post-cat text-white position-relative">Travel</span></a>
                                                </div>
                                                <h4 class="post-title">
                                                    <a class="text-white" href="single.html">Tesla’s Cooking Up A New Way To Wire Its Cars, Report Says</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>`
    })
    insideHoter += `</div>`
    Hoter.innerHTML = insideHoter;
  }
*/
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