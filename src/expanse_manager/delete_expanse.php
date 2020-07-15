<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	require("connect.php");
	$id=$_GET['id'];
	 $res=mysqli_query($con,"DELETE FROM `expanse_master` WHERE `expanse_master`.`id` = $id");
		if(!$res)
		{
			
			return	http_response_code(422);

		}
		else
		{	
			http_response_code(204);
		}
		
?>
