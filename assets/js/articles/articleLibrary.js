const UserCode = getCookie('Kandlus-users');



  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${UserCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
     fetchAndSortData(data[0].savedArticle)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




  async function fetchAndSortData(userArts) {
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
   console.log(data);
      Decod(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }




  /*
  function Decod(dataDecod, pickedId) {
    console.log(pickedId[0].savedArticle);
    const MyMainData = document.getElementById('mainData');
    const letDecod = dataDecod;
    let newArray = []
    newArray.push(pickedId[0].savedArticle);

    const decoders = letDecod.filter(item => item.id === 1);
    console.log(decoders);
      decoders.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      MyMainData.innerHTML = ''
      let insidDecoder = `<div class="row vertical-divider">`
      decoders.forEach((DecoItems, index) => {
       console.log(DecoItems);
        insidDecoder += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
        <figure class="mb-15 artImg">
            <a href="single.html?id=${newData.seo}">
                <img src="../assets/images/Articles/width/${newData.image}" alt="${newData.categoryOne}, ${newData.categoryTwo}, ${newData.tagOne}, ${newData.tagTwo}, ${newData.tagThree}" >
            </a>
        </figure>
        <a href="single.html?id=${newData.seo} ">${newData.title}</a>
        <div class="entry-meta meta-2 font-x-small color-muted">
            <span class="mr-10"> <i class="ti-time"></i>${newData.created_at} </span>
            <span class="has-dot"> <i class="ti-eye"></i> ${newData.score}  </span>
            <span class="has-dot"> <i class="ti-heart"></i> ${newData.Heart}  </span>
        </div>
    </article>`
      });
      insidDecoder += `</div>`
      MyMainData.innerHTML = insidDecoder;
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
  

    


/*
  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog?id=eq.${ids}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(MyCateData => {

  const category = MyCateData;
    const newDatas = category.filter(item => item.categoryOne === id);
    newDatas.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });


AllCategory(newDatas)

})
.catch(error => {
  console.error('Error fetching data:', error);
});



function AllCategory(recivedCateData) {
const MyMainData = document.getElementById('mainData');


const dataLimit = 10;

MyMainData.innerHTML = ''
let newSpan = `<div class="row vertical-divider">`

recivedCateData.slice(0, dataLimit).forEach((newData, index) => {
   
    newSpan += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
    <figure class="mb-15 artImg">
        <a href="single.html?id=${newData.seo}">
            <img src="../assets/images/Articles/width/${newData.image}" alt="${newData.categoryOne}, ${newData.categoryTwo}, ${newData.tagOne}, ${newData.tagTwo}, ${newData.tagThree}" >
        </a>
    </figure>
    <a href="single.html?id=${newData.seo} ">${newData.title}</a>
    <div class="entry-meta meta-2 font-x-small color-muted">
        <span class="mr-10"> <i class="ti-time"></i>${newData.created_at} </span>
        <span class="has-dot"> <i class="ti-eye"></i> ${newData.score}  </span>
        <span class="has-dot"> <i class="ti-heart"></i> ${newData.Heart}  </span>
    </div>
</article>`

})
newSpan += `</div>`
MyMainData.innerHTML += newSpan

}

*/