<?php
// Get the data from the POST request
$post_data = json_decode(file_get_contents('php://input'), true);
$data = $post_data['filedata'];
$name = $post_data['filename'];

// Specify the directory where you want to save the file
$directory = '/var/www/data/'; 

// Create the full path
$filepath = $directory . $name;

// Write the data to the file
if (file_put_contents($filepath, $data)) {
    echo 'Data saved successfully.';
} else {
    echo 'Error saving data.';
}
?>