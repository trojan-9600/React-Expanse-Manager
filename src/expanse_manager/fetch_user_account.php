<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	require("connect.php");
	$id=$_GET["id"];
	$res=mysqli_query($con,"select * from users where uid=$id");
	if(!$res)
	{
		http_response_code(404);
	}
	else
	{
		
		$row=mysqli_fetch_assoc($res);

		
		echo json_encode($row);
		
	}

?>