
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
    firstArticle(NewReciData)
    threeColumn(NewReciData)
    homeSingle(NewReciData)
    homeThree(NewReciData)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  


  function firstArticle(data) {
    const firstArticle = document.getElementById('rightSide');
    firstArticle.innerHTML=''
    let firstart = ` <a href="singlePage.html?id=${data[0].seo}"><figure>
                        <img src="../assets/images/Articles/width/${data[0].image}" alt="">
                        <figcaption>
                            <h3>${data[0].title}</h3>
                            <p>${data[0].describtion}</p>
                            <div class="views">
                                <span class="material-symbols-outlined"> visibility </span> ${data[0].score}
                                <span class="material-symbols-outlined"> schedule </span>${data[0].created_at}
                            </div>
                        </figcaption>
                    </figure></a>`
      firstArticle.innerHTML = firstart;
  }

  function threeColumn(threeData){
    const firstArticle = document.getElementById('leftSide');
    firstArticle.innerHTML = ''

let threemyRow = `<div>`;
threeData.slice(0,3).forEach((items, index) => {
    console.log(items.title);
    const limitDescribe = limitTextTo50Words(items.describtion);
threemyRow += `<a href="singlePage.html?id=${items.seo}"> <article class="ThreeArticle">
                            <header>
                                <img src="../assets/images/Articles/width/${items.image}" alt="">
                            </header>
                            <hgroup>
                                <h3>${items.title}</h3>
                                <p>${limitDescribe} </p>
                            <div class="views">
                                <span class="material-symbols-outlined"> visibility </span> ${items.score}
                                <span class="material-symbols-outlined"> schedule </span>${items.created_at}
                            </div>
                            </hgroup>
                        </article></a>`
})
threemyRow += `</div>`
firstArticle.innerHTML = threemyRow;
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