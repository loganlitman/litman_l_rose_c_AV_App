<?php

$user = "root";
$pw = "root";

try {
    $conn = new PDO('mysql:host=localhost;dbname=litman_rose_video_player', $user, $pw); //this localhost connection replaces the one on the first line
    //var_dump($conn); 
    //this is just a tester line (like an echo)
} catch (PDOException $exception) {
    echo 'connect error!' .$exception->getMessage(); //if we have an error in our server this is the message we will see
}

?>