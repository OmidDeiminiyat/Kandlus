// insertSubscribe.js
const SUPABASE_URL = 'https://bfrnndgsghbkfrbbzuuk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU';

async function insertIntoSubscribeTable(newData) {
  const endpoint = `${SUPABASE_URL}/rest/v1/Subscribe`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`,
        'Prefer': 'return=representation' // This header ensures the response contains the inserted record
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${response.status} - ${errorDetails.message}`);
    }

    const data = await response.json();
    console.log('Insert successful:', data);
  } catch (error) {
    console.error('Error inserting into subscribe table:', error.message);
  }
}

export default insertIntoSubscribeTable;
