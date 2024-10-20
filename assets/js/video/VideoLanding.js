async function fectVideoData() {
  try {
      const response = await fetch('backend/video.php');  
      const data = await response.json(); 
      data.forEach(item => {
        LandingV(data)
        console.log(item);
        
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}
fectVideoData();


  function LandingV(recivedV) {
    console.log(recivedV);
    const sortedVideos = recivedV.sort((a, b) => new Date(b.zaman) - new Date(a.zaman));
    const figureElement = document.getElementById('figFirst');
    const h1 = document.getElementById('h4First');
    const v1 = document.getElementById('view');

    const figureElement2 = document.getElementById('figFirst2');
    const h2 = document.getElementById('h4First2');
    const v2 = document.getElementById('view2');

    const figureElement3 = document.getElementById('figFirst3');
    const h3 = document.getElementById('h4First3');
    const v3 = document.getElementById('view3');

    const figureElement4 = document.getElementById('figFirst4');
    const h4 = document.getElementById('h4First4');
    const v4 = document.getElementById('view4');

    const figureElement5 = document.getElementById('figFirst5');
    const h5 = document.getElementById('h4First5');
    const v5 = document.getElementById('view5');

    const figureElement6 = document.getElementById('figFirst6');
    const h6 = document.getElementById('h4First6');
    const v6 = document.getElementById('view6');

    const Mobile = document.getElementById('MobileImg');

    h1.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[0].seo}"> ${sortedVideos[0].subject} </a>`;
    figureElement.style.backgroundImage = `url('../../../assets/images/videos/longImg/${sortedVideos[0].image}')`;
    v1.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[0].score}
                     <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[0].length}`

     h2.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[1].seo}"> ${sortedVideos[1].subject} </a>`;
    figureElement2.style.backgroundImage = `url('../../../assets/images/videos/longImg/${sortedVideos[1].image}')`;
    v2.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[1].score}
    <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[1].length}`

    h3.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[2].seo}"> ${sortedVideos[2].subject} </a>`;
    figureElement3.style.backgroundImage = `url('../../../assets/images/videos/longImg/${sortedVideos[2].image}')`;
    v3.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[2].score}
    <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[2].length}`

    h4.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[3].seo}"> ${sortedVideos[3].subject} </a>`;
    figureElement4.style.backgroundImage =`url('../../../assets/images/videos/longImg/${sortedVideos[3].image}')`;
    v4.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[3].score}
    <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[3].length}`

    h5.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[4].seo}"> ${sortedVideos[4].subject} </a>`;
    figureElement5.style.backgroundImage = `url('../../../assets/images/videos/longImg/${sortedVideos[4].image}')`;
    v5.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[4].score}
    <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[4].length}`

    h6.innerHTML = `<a href="videos/SinglePageVid.html?id=${sortedVideos[5].seo}"> ${sortedVideos[5].subject} </a>`;
    figureElement6.style.backgroundImage =`url('../../../assets/images/videos/longImg/${sortedVideos[5].image}')`;
    v6.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${sortedVideos[5].score}
    <span class="material-symbols-outlined"> schedule </span> ${sortedVideos[5].length}`

    Mobile.innerHTML = `<img src="../../../assets/images/videos/wide/${sortedVideos[6].image}" alt="">
                <a href="videos/SinglePageVid.html?id=${sortedVideos[6].seo}"><span class="material-symbols-outlined playButt"> play_circle </span></a>`
  }


 