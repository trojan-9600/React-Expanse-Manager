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
			$id=(int)$data->id;
			$uid=(int)$data->uid;
			$name=$data->name;
			$desc=$data->desc;
			$amount=(int)$data->amount;
			$cat=$data->category;
			$res=mysqli_query($con,"UPDATE `income_master` SET `category` = '$cat',`i_name` = '$name',`desc` = '$desc',`amount` = '$amount' WHERE `income_master`.`id` = $id AND `income_master`.`uid`=$uid;");
			if(!$res)
			{
				
				print_r("query error");
			}
			else
			{
				print_r("Update successful");
			}
	}
	else
	{

		print_r("data Sending error");
	}
?>