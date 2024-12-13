<?php
$servername = 'localhost';
$user = 'root';
$pass = '';
$database = 'smartstore_database';

$con = mysqli_connect($servername,$user,$pass,$database);

include("search.php");
if(isset($_POST['input'])){

    $input = $_POST['input'];

    $query = "SELECT * FROM users WHERE email LIKE '{$input}%' OR id LIKE '{$input}%'";

    $result = mysqli_query($con,$query);

    if(mysqli_num_rows($result) > 0){?>

        <table class="table table-bordered table-striped mt-4">
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>password</th>
                </tr>
            </thead>

            <tbody>
                <?php
                
                while($row = mysqli_fetch_assoc($result)){

                        $id = $row['id'];
                        $email = $row['email'];
                        $password = $row['password'];
                    ?>
                    
                    <tr>
                        <th><?php echo $id; ?></th>
                        <th><?php echo $email; ?></th>
                        <th><?php echo $password; ?></th>
                    </tr>
                    <?php
                }
                ?>
            </tbody>
        </table>

                    


            <?php
        }else{
        echo "<h6 class='text-danger text-center mt-3'>NO data Found</h6>";
    }
}
?>