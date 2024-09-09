
fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/SingleVide', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(Datas => {
  LandingV(Datas)
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  

  function LandingV(recivedV) {
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

    h1.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[0].seo}"> ${recivedV[0].subject} </a>`;
    figureElement.style.backgroundImage = `url('../../../assets/images/videos/longImg/${recivedV[0].image}')`;
    v1.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[0].score}
                     <span class="material-symbols-outlined"> schedule </span> ${recivedV[0].length}`

     h2.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[1].seo}"> ${recivedV[1].subject} </a>`;
    figureElement2.style.backgroundImage = `url('../../../assets/images/videos/longImg/${recivedV[1].image}')`;
    v2.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[1].score}
    <span class="material-symbols-outlined"> schedule </span> ${recivedV[1].length}`

    h3.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[2].seo}"> ${recivedV[2].subject} </a>`;
    figureElement3.style.backgroundImage = `url('../../../assets/images/videos/longImg/${recivedV[2].image}')`;
    v3.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[2].score}
    <span class="material-symbols-outlined"> schedule </span> ${recivedV[2].length}`

    h4.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[3].seo}"> ${recivedV[3].subject} </a>`;
    figureElement4.style.backgroundImage =`url('../../../assets/images/videos/longImg/${recivedV[3].image}')`;
    v4.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[3].score}
    <span class="material-symbols-outlined"> schedule </span> ${recivedV[3].length}`

    h5.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[4].seo}"> ${recivedV[4].subject} </a>`;
    figureElement5.style.backgroundImage = `url('../../../assets/images/videos/longImg/${recivedV[4].image}')`;
    v5.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[4].score}
    <span class="material-symbols-outlined"> schedule </span> ${recivedV[4].length}`

    h6.innerHTML = `<a href="videos/SinglePageVid.html?id=${recivedV[5].seo}"> ${recivedV[5].subject} </a>`;
    figureElement6.style.backgroundImage =`url('../../../assets/images/videos/longImg/${recivedV[5].image}')`;
    v6.innerHTML = ` <span class="material-symbols-outlined"> visibility </span> ${recivedV[5].score}
    <span class="material-symbols-outlined"> schedule </span> ${recivedV[5].length}`

    Mobile.innerHTML = `<img src="../../../assets/images/videos/wide/${recivedV[6].image}" alt="">
                <a href="videos/SinglePageVid.html?id=${recivedV[6].seo}"><span class="material-symbols-outlined playButt"> play_circle </span></a>`
  }


 