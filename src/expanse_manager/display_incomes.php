<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	require("connect.php");
		$id=$_GET['id'];
	$qry=mysqli_query($con,"select * from income_master where uid=$id;");
	$expanses=[];
	$count=0;
	while($row=mysqli_fetch_assoc($qry))
	{
		$expanses[$count]['id']=$row['id'];
		$expanses[$count]['uid']=$row['uid'];
		$expanses[$count]['I_name']=$row['i_name'];
		$expanses[$count]['category']=$row['category'];
		$expanses[$count]['desc']=$row['desc'];
		$expanses[$count]['amount']=$row['amount'];
		$count++;
	}
	echo json_encode($expanses);
?>