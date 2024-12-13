<?php
$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$conn = mysqli_connect($servername,$user,$pass,$database);

if ($conn){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    $query = "INSERT INTO `users` (`email`,`password`,`repassword`,`is_admin`)
    VALUES('$email','$password','$repassword','0')";

    $result = mysqli_query($conn,$query);

    if ($result){
        header('location:../../index.html');
    }
}