<?php
// Decode JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $from = "NoReply@kandlus.net"; // Corrected "NoReaplay" to "NoReply"
    $to = 'omid@kandlus.dk';  
    $subject = 'User chat';
    
    $message = "Here are the user chat:\n\n";
    foreach ($data as $item) {
        // Check if 'question' and 'answer' keys exist
        if (isset($item['message'])) {
            $message .= "Message: " . $item['message'] . "\n"; // Assuming messages are stored under 'message'
        }
    }
    
    // Headers for the email
    $headers = 'From: ' . $from . "\r\n" .
               'Reply-To: ' . $from . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

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

