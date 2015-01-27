<?php
# if request sent using HTTP_X_REQUESTED_WITH
if( isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) ){
  if (isset($_POST['name']) AND isset($_POST['email']) AND isset($_POST['subject']) AND isset($_POST['message'])) {
    $to = 'rauhmel@whomentors.com';

    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $sent = email($to, $email, $name, $subject, $message);
    if ($sent) {
      echo '<div class="success">Your message has been sent sucessfully!</div>';
    } else {
      echo 'Message couldn\'t sent!';
    }
  }
  else {
    echo 'All Fields are required';
  }
  return;
}

/**
 * Email send with headers
 *
 * @return bool | void
 **/
function email($to, $from_mail, $from_name, $subject, $message){
  $header = array();
  $header[] = "MIME-Version: 1.0";
  $header[] = "From: {$from_name}<{$from_mail}>";
  /* Set message content type HTML*/
  $header[] = "Content-type:text/html; charset=iso-8859-1";
  $header[] = "Content-Transfer-Encoding: 7bit";
  if( mail($to, $subject, $message, implode("\r\n", $header)) ) return true; 
}
?>