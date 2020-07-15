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
			$id=$data->id;
			$upcat=$data->category;
			$res=mysqli_query($con,"UPDATE `category` SET `category` = '$upcat' WHERE `category`.`id` = $id;");
			if(!$res)
			{
				
				print_r("query error");
			}
			else
			{
				print_r("query successful");
			}
	}
	else
	{

		print_r("data Sending error");
	}
?>