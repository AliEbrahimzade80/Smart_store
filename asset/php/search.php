<?php
$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$con = mysqli_connect($servername,$user,$pass,$database);

if(!$con){
    echo "connection failed" . mysqli_connect_error();
}