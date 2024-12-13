<?php
$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$conn = mysqli_connect($servername,$user,$pass,$database);

if($conn){
    $id = $_POST['id'];
    $query = "DELETE FROM users WHERE id = $id";
    
    $result = mysqli_query($conn,$query);

    if ($result){
        session_start();
        $_SESSION['message'] = "حذف موفقیت آمیز بود";
        header('location:../../admin.php');
    }
}

?>