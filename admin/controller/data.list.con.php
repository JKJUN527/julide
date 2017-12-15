<?php
/*
 * 获取所有的项目列表（并非全部，根据当前的页数，和每页显示的数量来查询）
 *
  DZ
 */

require 'connection.db.php';
require 'Constant.php';

$result = array();

$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");

//获取指定项目的信息
$sql = "SELECT `id`,`type`,`title`, `image` ,`model`, `material`, `temperature`,`description`, `created_at` FROM `jld_products` ORDER BY `id` DESC";
$stmt = $con->prepare($sql);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($id,$type,$title, $image, $model,$material,$temperature,$description, $created_at);
$result['products'] = array();
//int i=0;
$i=0;
while ($stmt->fetch()) {
	
    $item = array();
    $item['id'] = $id;
    $item['type'] = $type;
    $item['title'] = $title;
    $item['image'] = $image;
    $item['model'] = $model;
    $item['material'] = $material;
    $item['temperature'] = $temperature;
    $item['description'] = $description;
    $item['created_at'] = $created_at;

	
    $result['products'][$i++] = $item;
}
$result['number'] = $stmt->num_rows;

//获取指定项目的信息
$sql = "SELECT `id`,`name` FROM `jld_product_type` ORDER BY `id` DESC";
$stmt = $con->prepare($sql);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($id,$name);
$result['type'] = array();

while ($stmt->fetch()) {
    $item = array();
    $item['id'] = $id;
    $item['name'] = $name;

    $result['type'][$id] = $item;
}


//关闭数据库连接
$stmt->close();
$con->close();

echo json_encode($result);
exit;