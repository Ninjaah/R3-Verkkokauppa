<?php
/**
 * Created by PhpStorm.
 * User: vexi
 * Date: 29.4.2019
 * Time: 17.45
 */

//Tänne oikeat tiedot kun ne on selvillä!
$server = "localhost";
$user = "admin";
$pw = "admin123";
$db = "verkkokauppa";

$connect = mysqli_connect($server, $user, $pw, $db);

if(!$connect) {
    die("ERROR: Cannot connect to database $db on server $server using user name $user (" . mysqli_connect_errno() .
    ", " . mysqli_connect_error() . ")");
}

//Nämä samat kuin Login.html filussa. Siellä oma kommentti form-elementin sisällä.
$email = $_POST["email"];
$password = $_POST["ss"];

//?-merkillä merkityt ovat vain placeholder-nimiä...
$sqlQuery = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

$result = mysqli_query($connect, $sqlQuery);

if (!$result) {
    echo "Käyttäjätilin luonti epäonnistui!";
}

else {
    echo "Käyttäjätilin luonti onnistui!";
}


header("Location: ../HTML/Etusivu.html");