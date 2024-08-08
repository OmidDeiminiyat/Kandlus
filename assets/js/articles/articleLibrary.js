const UserCode = getCookie('Kandlus-users');

  fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe?Code=eq.${UserCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(userData => {
    console.log('user save is' + userData);
    
     fetchAndSortData(userData)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


const supabaseUrl = 'https://bfrnndgsghbkfrbbzuuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace with your Supabase anon key

async function fetchBlogData(beIds) {
  console.log(beIds[0].savedArticle);
  const ids = beIds[0].savedArticle; // Use a comma-separated string for the in query

  const response = await fetch(`${supabaseUrl}/rest/v1/blog?id=in.(${ids})`, {
    method: 'GET',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json();
    console.log('Blog data:', data);
    callFunc(data)
  } else {
    console.error('Error fetching data:', response.statusText);
  }
}
function fetchAndSortData(userIds) {
fetchBlogData(userIds);

}

function callFunc(blogItems) {
  const MyMainData = document.getElementById('mainData');
  MyMainData.innerHTML = ''
  let insidDecoder = `<div class="row vertical-divider">`
  blogItems.forEach((DecoItems, index) => {
   console.log('Final is:' + DecoItems);
    insidDecoder += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
    <figure class="mb-15 artImg">
        <a href="single.html?id=${DecoItems.seo}">
            <img src="../assets/images/Articles/width/${DecoItems.image}" alt="${DecoItems.categoryOne}, ${DecoItems.categoryTwo}, ${DecoItems.tagOne}, ${DecoItems.tagTwo}, ${DecoItems.tagThree}" >
        </a>
    </figure>
    <a href="single.html?id=${DecoItems.seo} ">${DecoItems.title}</a>
    <div class="entry-meta meta-2 font-x-small color-muted">
        <span class="mr-10"> <i class="ti-time"></i>${DecoItems.created_at} </span>
        <span class="has-dot"> <i class="ti-eye"></i> ${DecoItems.score}  </span>
        <span class="has-dot"> <i class="ti-heart"></i> ${DecoItems.Heart}  </span>
    </div>
</article>`
  });
  insidDecoder += `</div>`
  MyMainData.innerHTML = insidDecoder;
}

