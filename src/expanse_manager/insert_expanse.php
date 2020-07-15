<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    require("connect.php");
    $post=file_get_contents("php://input");
    if(isset($post) && !empty($post))
    {
        $data=json_decode($post);
        $name=mysqli_real_escape_string($con,trim($data->name));
        $amount=$data->amount;
        $cat=mysqli_real_escape_string($con,trim($data->cat));
        $desc=mysqli_real_escape_string($con,trim($data->description));
        $uid=(int)$data->uid;
      
        $res=mysqli_query($con,"INSERT INTO `expanse_master` VALUES ( NULL,$uid, '$name', '$cat', '$desc', $amount);");
        if(!$res)
        {
            print_r("query error");   
        }
        else{
            
             print_r("query successfull");
        }
    }
   
?>