

var url = window.location.search.substring(1);
var vars = url.split("=");
const id = vars[1];
if (!id) {
    console.error("ID is null or empty. Make sure the 'id' parameter is provided in the URL.");
  } else {
fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/PodcastPr?id=eq.${id}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
  }
})
.then(response => response.json())
.then(data => {

DefaultPodcast(data)

})
.catch(error => {
  console.error('Error fetching data:', error);
});

  }

   function DefaultPodcast(items) {
    console.log(items[0]);
    
    const DefPod = document.getElementById('defaultPodcast');
    DefPod.innerHTML = '';

    let insideDefPod = `${items[0].embed}`
   DefPod.innerHTML = insideDefPod;
}



fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/PodcastPr`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(allData => {
  
  allPodcasts(allData)
  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function allPodcasts(allItems) {
    const Liss = document.getElementById('ListPodcats');
    Liss.innerHTML = '';

    let insideLiss = `<span>`
    allItems.slice(0, 9).forEach((item, index) => {
        insideLiss += `<section class="episods">
                                <figure>
                                    <img src="../assets/images/podcast/Cube/${item.image}" alt="">
                                </figure>
                                <article>
                                    <h3>${item.title}</h3>
                                    <p> </p>
                                    <p>${item.created_at}</p>
                                </article>
                                <span>
                                    <svg onclick="ChangPlayer(${item.id})" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#351f1f"><path d="M376.72-298.43 661.8-480 376.72-661.8v363.37ZM479.57-62.8q-85.45 0-161.64-32.92-76.2-32.93-132.74-89.47-56.54-56.54-89.47-132.83-32.92-76.3-32.92-161.95 0-86.54 32.98-162.65 32.98-76.12 89.81-132.94 56.83-56.82 132.74-89.35 75.92-32.52 161.17-32.52 86.63 0 163.08 32.5 76.46 32.51 133.04 89.3 56.58 56.8 89.2 133.09 32.61 76.3 32.61 163.08 0 85.77-32.52 161.42-32.53 75.65-89.35 132.46-56.82 56.82-133.05 89.8Q566.28-62.8 479.57-62.8Zm.38-77.31q141.13 0 240.53-99.7 99.41-99.7 99.41-240.14 0-141.13-99.35-240.53-99.35-99.41-240.6-99.41-140.26 0-240.04 99.35-99.79 99.35-99.79 240.6 0 140.26 99.7 240.04 99.7 99.79 240.14 99.79ZM480-480Z"/></svg>
                                </span>
                            </section>`
    });
    insideLiss += `</span>`
    Liss.innerHTML = insideLiss;
}




  function ChangPlayer(ids) {
    fetch(`https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/PodcastPr?id=eq.${ids}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
        }
      })
      .then(response => response.json())
      .then(selectData => {
      
      selectPodcast(selectData)
      
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
}
function selectPodcast(Selected) {
    
    const DefPod = document.getElementById('defaultPodcast');
    DefPod.innerHTML = '';
    let insidnewdef = `${Selected[0].embed}`
    DefPod.innerHTML = insidnewdef;
}

