<?php

require 'connection.db.php';
require 'Constant.php';

$result = array();

$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");

$sql = "SELECT `id`, `name`, `describe` FROM `jld_device_type` ORDER BY `id` DESC ";
$stmt = $con->prepare($sql);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($id, $name, $desc);

while ($stmt->fetch()) {
    $item = array();
    $item['id'] = $id;
    $item['name'] = $name;
    $item['desc'] = $desc;

    $result['dtype'][$id] = $item;
}
$result['dtypeNum'] = $stmt->num_rows;

//关闭数据库连接
$stmt->close();
$con->close();

echo json_encode($result);
exit;