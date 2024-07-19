// updateSubscribe.js
const SUPABASE_URL = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';

async function counterLoad(seo, updatedData) {
    
  const endpoint = `${SUPABASE_URL}/rest/v1/blog?seo=eq.${seo}`;

  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${response.status} - ${errorDetails.message}`);
    }

    const responseText = await response.text(); // Read response as text
    if (responseText) {
      const data = JSON.parse(responseText); // Parse text to JSON if not empty
      
    } else {
     
    }
  } catch (error) {
    console.error('Error updating subscribe table:', error.message);
  }
}

export default counterLoad;


// pageView.js

// Function to get the current page view count from localStorage
/*
function getPageViewCount() {
    let viewCount = localStorage.getItem('pageViewCount');
    return viewCount ? parseInt(viewCount, 10) : 0;
}

// Function to increment the page view count
function incrementPageViewCount() {
    let currentCount = getPageViewCount();
    currentCount += 1;
    localStorage.setItem('pageViewCount', currentCount);
    return currentCount;
}

// Function to display the page view count on the page
function displayPageViewCount() {
    const viewCountElement = document.getElementById('viewCount');
    const currentCount = incrementPageViewCount();
    viewCountElement.textContent = currentCount;
}

// Run the displayPageViewCount function when the page loads
window.onload = displayPageViewCount;

*/

// pageView.js

// window.onbeforeunload = () => incrementPageViewCount(articleId);