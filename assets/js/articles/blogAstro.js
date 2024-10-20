async function fetchSubscriptionData() {
  try {
      const response = await fetch('../backend/blog.php');  
      const data = await response.json(); 
      data.forEach(item => {
        astroRightSide(data)
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

fetchSubscriptionData();


  function astroRightSide(datarigh){
    
    const historyBlogs = datarigh.filter(blog => blog.categoryOne === 'Decoding');
    historyBlogs.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    const liForR = document.getElementById('liForRight');
    liForR.innerHTML = ''
    let insideliForR = `<ul class="list-post">`
    historyBlogs.slice(0,3).forEach((elements, index) => {
        insideliForR += `<li id="liForRight" class="mb-15">
                                        <div class="d-flex">
                                            <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <a class="color-white" href="../blog/single.html?id=${elements.seo}">
                                                    <img src="../assets/images/Articles/width/${elements.image}" alt="">
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
  

  async function fectVideoData() {
    try {
        const response = await fetch('../backend/video.php');  
        const data = await response.json(); 
        moreBlogs(data)

    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  fectVideoData();


function moreBlogs(moreData){

  
  const videoAstrology = moreData.filter(blog => blog.category === 'Spiritual Awakening');
  videoAstrology.sort((a, b) => new Date(a.zaman) - new Date(b.zaman));

    const moreDaras = document.getElementById('moreData');
    moreDaras.innerHTML = ''
    let insideMoreData = `<h6 class="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">
                                <span>Related videos</span>
                            </h6>
                            <div class="post-block-list post-module-6 mt-50">`

       videoAstrology.forEach((moreDa, index) => {

        insideMoreData += `<div class="post-module-6-item d-flex wow fadeIn">
                                    <span class="item-count vertical-align"><i class="ti-write"></i></span>
                                    <div class="alith_post_title_small">
                                        <p class="font-medium mb-10"><a href="../videos/singlePageVid.html?id=${moreDa.seo}">${moreDa.subject}</a></p>
                                        <div class="entry-meta meta-1 font-x-small">
                                            <span class="post-on">${moreDa.zaman}</span>
                                            <span class="hit-count has-dot">${moreDa.score}</span>Views
                                        </div>
                                    </div>
                                </div>`
     })
     insideMoreData += `</div>`
     moreDaras.innerHTML = insideMoreData;
}