<?php
/**
 * 获取需求列表
 *
 * Created by PhpStorm.
 * User: bingo
 * Date: 2017/4/24
 * Time: 21:47
 */

require 'connection.db.php';
require 'Constant.php';

//连接数据库，并设置字符编码
$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");
$sql = "SELECT `id`, `company_name`, `industry`, `city`, `budget` FROM `tb_request` ";

$stmt = $con->prepare($sql);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($id, $company, $industry, $city, $budget);

$result = array();
while ($stmt->fetch()) {
    $item = array();
    $item['id'] = $id;
    $item['company'] = $company;
    $item['industry'] = $industry;
    $item['city'] = $city;
    $item['budget'] = $budget;
    $result[$id] = $item;
}

//关闭数据库连接
$stmt->close();
$con->close();

echo json_encode($result);