<?php

$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$conn = mysqli_connect($servername,$user,$pass,$database);

if ($conn){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";

    $result = mysqli_query($conn,$query);

    if (mysqli_num_rows($result) > 0){
        header('location:../../index.html');
    }
}
if ($conn){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' AND is_admin = 1";

    $result = mysqli_query($conn,$query);

    if (mysqli_num_rows($result) > 0){
        header('location:../../admin.php');
    }
}