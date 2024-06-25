// Share article on facebook


document.getElementById('shareBtn').addEventListener('click', function() {
    const url = window.location.href; // The URL of the current page
var urlForId = window.location.search.substring(1);
var vars = urlForId.split("=");
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
    console.log(url);
    const title = data[0].title
    const description = data[0].describtion // The description of the article

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}%20-%20${encodeURIComponent(description)}`;

    window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');
})
.catch(error => {
  console.error('Error fetching data:', error);
});

  }
});


//   function forShare(ShareData) {
   
//     const url = window.location.href;
//     console.log(url);
//     const title = ShareData[0].title
//     const description = ShareData[0].describtion // The description of the article

//     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}%20-%20${encodeURIComponent(description)}`;

//     window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');

//   }
