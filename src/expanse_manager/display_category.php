<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	require("connect.php");
	$qry=mysqli_query($con,"select * from category");
	$category=[];
	$count=0;
	while($row=mysqli_fetch_assoc($qry))
	{
		$category[$count]['id']=$row['id'];
		$category[$count]['cat']=$row['category'];
		$count++;
	}
	echo json_encode($category);
?>