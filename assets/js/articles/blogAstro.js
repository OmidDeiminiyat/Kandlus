fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(dataAst => {
     //console.log(NewReciData); // Do something with the fetched data
    astroRightSide(dataAst)

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  function astroRightSide(datarigh){
    const liForR = document.getElementById('liForRight');
    liForR.innerHTML = ''
    let insideliForR = `<ul class="list-post">`
    datarigh.slice(0,3).forEach((elements, index) => {
        insideliForR += `<li id="liForRight" class="mb-15">
                                        <div class="d-flex">
                                            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <a class="color-white" href="../blog/singlePage.html?id=${elements.seo}">
                                                    <img src="../../assets/images/Articles/${elements.image}" alt="">
                                                </a>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><a href="../blog/singlePage.html?id=${elements.seo}">${elements.title}</a></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey mt-10">
                                                    <span class="post-on mr-15">${elements.created_at}</span>
                                                    <span class="hit-count has-dot">${elements.score} Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`
    })
    insideliForR += `</ul>`
    liForR.innerHTML = insideliForR;
  }
  

  const myCategories = 'Decoding';
  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?categoryOne=eq.${myCategories}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(byCate => {
    moreBlogs(byCate)
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function moreBlogs(moreData){
    const moreDaras = document.getElementById('moreData');
    moreDaras.innerHTML = ''
    let insideMoreData = `<h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">
                                <span>Decoding</span>
                            </h6>
                            <div class="post-block-list post-module-6 mt-50">`

     moreData.forEach((moreDa, index) => {
        console.log(moreDa);
        insideMoreData += `<div class="post-module-6-item d-flex wow fadeIn">
                                    <span class="item-count vertical-align"><i class="ti-write"></i></span>
                                    <div class="alith_post_title_small">
                                        <p class="font-medium mb-10"><a href="../blog/singlePage.html?id=${moreDa.seo}">${moreDa.title}</a></p>
                                        <div class="entry-meta meta-1 font-x-small">
                                            <span class="post-on">${moreDa.created_at}</span>
                                            <span class="hit-count has-dot">${moreDa.score}</span>Views
                                        </div>
                                    </div>
                                </div>`
     })
     insideMoreData += `</div>`
     moreDaras.innerHTML = insideMoreData;
}