let data = [];
fetch('https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/blog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU' // Replace 'your-api-key' with your actual Supabase API key
    }
  })
  .then(response => response.json())
  .then(NewReciData => {
     data = NewReciData.map(item => item);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

    // Search for mobile
    const searchBar = document.getElementById("search-bar");
    const resultsList = document.getElementById("results");
 
    function filterData(searchTerm) {
  
      const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
      resultsList.innerHTML = "";
    
      if (filteredResults.length > 0) {
        let linkStyle = `<ul>`
        filteredResults.forEach((item, index) => {
            linkStyle += `<li><a href="single.html?id=${item.seo}"><span class="material-symbols-outlined">
              auto_stories </span> ${item.title}</a><li>`
        });
        linkStyle += `</ul>`
        resultsList.innerHTML = linkStyle;
      
      } else {
        const noResults = document.createElement("li");
        noResults.textContent = "No results found";
        resultsList.appendChild(noResults);
      }

    }
    
    searchBar.addEventListener("input", (event) => {
      const searchTerm = event.target.value;
      filterData(searchTerm);
    });





function SearchPage() {
    const mainContent = document.getElementById('forSearchBar');
    const mainS = document.getElementById('searchPage');
    if (mainContent.style.display === 'none' || mainS.style.display === 'block') {
        mainContent.style.display = 'block';
        mainS.style.display = 'none';
    } else {
        mainContent.style.display = 'none';
        mainS.style.display = 'block';
    }
   
}

