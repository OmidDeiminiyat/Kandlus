<?php
header('Content-Type: application/json');

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['Dates']) && isset($data['time']) && isset($data['latitude']) && isset($data['longitude']) ) {
    $Dates = $data['Dates'];
    $time = $data['time'];
    $latitude = $data['latitude'];
    $longitude = $data['longitude'];
    $api_url = "https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report";
    
    // Add API parameters
    $params = [
        'api_key' => '0714ae51-feee-55ff-8a10-4541c525cf0c', // Replace with your API key
        'dob' => $Dates,
        'tob' => $time,
        'lat' => $latitude,
        'lon' => $longitude,
        'tz' => '0',
        'lang' => 'en'
    ];

    $url = $api_url . '?' . http_build_query($params);

    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    // Execute cURL request
    $api_response = curl_exec($ch);

    // Check if the request was successful
    if ($api_response === false) {
        echo json_encode([
            'success' => false,
            'message' => 'Error fetching data from API: ' . curl_error($ch)
        ]);
        curl_close($ch);
        exit();
    }

    // Close cURL
    curl_close($ch);

    // Decode the API response
    $characterData = json_decode($api_response, true);

    // Send the API response back to the frontend
    echo json_encode([
        'success' => true,
        'characterData' => $characterData
    ]);

} else {
    // If required parameters are missing
    echo json_encode([
        'success' => false,
        'message' => 'Invalid input parameters.'
    ]);
}
?>