<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $to = "txfreelancer62@gmail.com";
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Set additional headers
    $from = "noreply@integra-bartercard.com.au"; // Change this to a valid email address from your domain
    $headers = "From: Integra BarterCard <" . $from . ">\r\n";
    $headers .= "Reply-To: " . $_POST["from"] . "\r\n";
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error: Email sending failed.";
    }
}
?>
