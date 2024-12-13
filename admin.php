<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Store</title>
    <link rel="stylesheet" href="asset/css/bootstrap.rtl.css" />

    <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: auto;
  
}

td, th {
  border: 1px solid #999;
  text-align: left;
  padding: 8px;
  text-align: center;
  
}
th {
background-color: #bbb;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
.aa{
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 40%;
  width: 300px;
}
</style>

</head>
<body>

<input type="text" class="Form-control aa" id="live_search" autocomplete="off"
placeholder="search...">
<div id="searchresult"></div>
    <?php
    session_start();
    if(isset($_SESSION['message'])) {
        echo "<p class='alert alert-success'>";
        echo $_SESSION['message'];
        echo "</p>";
    }
    session_destroy();
    ?>
    
<?php

$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$conn = mysqli_connect($servername,$user,$pass,$database);

if ($conn){
    $query = "SELECT * FROM users WHERE is_admin = 0";

    $result = mysqli_query($conn,$query);

    if (mysqli_num_rows($result) > 0){
        $users = mysqli_fetch_all($result);

        echo '<table>
        <tr>
        <thead>
          <th>id</th>
          <th>email</th>
          <th>password</th>
          <th>delete</th>
        </tr>
        </thead>
        <tbody>';

        foreach ($users as $item){
            echo "<tr> <td>" . $item[0] . "</td>" .
            "<td>" . $item[1] . "</td>".
            "<td>" . $item[2] . 
            "<form method='post' action ='asset/php/delete.php'>
            <input name='id' type='hidden' value='" . $item[0] . "'>
            <td>
            <input type='submit' class='btn btn-outline-danger ae-btn' value='Delete'>
            </form>
            <form method='post' action ='asset/php/edit.php'>
            <input name='id' type='hidden' value='" . $item[0] . "'>
            </form></tr>";


            
        }
        echo "</tbody> </table>";
    }
}

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script type="text/javascript">
  $(document).ready(function(){

    $("#live_search").keyup(function() {
      var input = $(this).val();
      
      if(input != ""){
        $.ajax({
          url:"asset/php/livesearch.php",
          method:"POST",
          data:{input:input},

          success:function (data) {
            $("#searchresult").html(data);
            
          }
        });
      }else{
        $("#searchresult").css("display","none");
      }
    });
  });

</script>
</body>
</html>