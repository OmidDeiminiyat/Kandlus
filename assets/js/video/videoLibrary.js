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
    

      function convertStringToArray(data) {
        // Split the string into an array
        const array = data.split(',').map(item => item.trim());
  
        // Remove empty strings (if any)
        const cleanedArray = array.filter(item => item !== '');
  
        return cleanedArray;
      }
  
      // Convert the string to an array
      const testArray = convertStringToArray(data[0].savedVideos);
  
      // Another array to which the converted array will be pushed
      const mainArray = [];
  
      // Push the converted array into the main array
      mainArray.push(testArray);
  
      // Log the results
      console.log('Converted array:', testArray);
      console.log('Main array after push:', mainArray);
      fetchBlogPosts(mainArray)
      

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });





import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBlogPosts(articlesId) {

    const { data, error } = await supabase
.from('SingleVide')
.select('*')
.in('id', [articlesId]);

if (error) {
console.error('Error fetching blog posts:', error);
return;
}

// Reference the div where we want to display the blog posts
const blogPostsDiv = document.getElementById('mainData');
blogPostsDiv.innerHTML = '';
let newSpan = `<div class="row vertical-divider">`
data.forEach(post => {
    
    
const postElement = document.createElement('div');
newSpan += `<article class="col-md-3 mb-sm-3 wow fadeIn animated">
<figure class="mb-15 artImg">
    <a href="SinglePageVid.html?id=${post.seo}">
        <img src="../assets/images/videos/wide/${post.image}" alt="${post.category}, ${post.category2}, ${post.tag1}" >
    </a>
</figure>
<a href="SinglePageVid.html?id=${post.seo} ">${post.subject}</a>
<div class="entry-meta meta-2 font-x-small color-muted">
    <span class="mr-10"> <i class="ti-time"></i>${post.zaman} </span>
    <span class="has-dot"> <i class="ti-eye"></i> ${post.score}  </span>
    <span class="has-dot"> <i class="ti-heart"></i> ${post.Heart}  </span>
</div>
</article>`

});
newSpan += `</div>`
blogPostsDiv.innerHTML = newSpan;
}

