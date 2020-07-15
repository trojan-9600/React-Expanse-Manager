<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    require("connect.php");
    $users=[];
    $qry="select * from users";
    if($res=mysqli_query($con,$qry))
    {
        $count=0;
        while($row=mysqli_fetch_assoc($res))
        {
            $users[$count]['uid']=$row['uid'];
            $users[$count]['name']=$row['name'];
            $users[$count]['email']=$row['email'];
            $count++;
        }
       // print_r($users);
        echo json_encode($users);
    }
    else{
        http_response_code(404);
    }
?>