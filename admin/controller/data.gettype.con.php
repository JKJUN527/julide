<?php
/*
 * 获取指定会员的信息
 * DZ
 */

require 'connection.db.php';
require 'Constant.php';

$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");
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

echo json_encode($result);
exit;