// updateSubscribe.js
const SUPABASE_URL = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';

async function updateSubscribeTable(Code, updatedData) {
    console.log('Code is:' + Code);
  const endpoint = `${SUPABASE_URL}/rest/v1/Subscribe?Code=eq.${Code}`;

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
      console.log('Update successful:', data);
      // Redirect to a new URL
    } else {
      console.log('Update successful: No content returned');
    }
  } catch (error) {
    console.error('Error updating subscribe table:', error.message);
  }
}

export default updateSubscribeTable;
