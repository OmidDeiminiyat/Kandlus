<?php
// Decode JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $to = 'omid.deiminiyat@yahoo.com';  
    $subject = 'User Quiz Answers';
    
    $message = "Here are the user's quiz answers:\n\n";
    foreach ($data as $item) {
        $message .= "Question: " . $item['question'] . "\n";
        $message .= "Answer: " . $item['answer'] . "\n\n";
    }
    
    // Headers for the email
    $headers = "From: no-reply@example.com";  // Replace with your domain's no-reply address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "No data received.";
}
?>
