<?php
// API URL with business_id and limit as query parameters
$url = "https://bfrnndgsghbkfrbbzuuk.supabase.co/rest/v1/Subscribe";

// Your RapidAPI key
$apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcm5uZGdzZ2hia2ZyYmJ6dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA0NzcsImV4cCI6MjAyOTk5NjQ3N30.2fBDWPexcBP6OfB0pY11Me1N5xzioXkc4agte3buhUU"; 

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Set headers including the API key (Authorization: Bearer token)
$headers = [
    "apikey: $apiKey",
    "Authorization: Bearer $apiKey", // Replace with your bearer token if needed
    "Content-Type: application/json"
];
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute the cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    // Send the API response to the frontend
    echo $response;
}

// Close the cURL session
curl_close($ch);
?>
