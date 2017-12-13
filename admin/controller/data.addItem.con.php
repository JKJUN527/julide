<?php
/**
 *  新增一个资讯
 */
require 'connection.db.php';
require 'Constant.php';

$title = $_POST['title'];
$content = $_POST['content'];
$is_bord = $_POST['is_bord'];
$is_red = $_POST["is_red"];
$is_pass = $_POST["is_pass"];
$create_at = date("Y-m-d");

//连接数据库，并设置字符编码
$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");

//定义SQL语句
$sql = "INSERT INTO `tb_dailymes` (
    `title`, 
    `content`,
	`create_at`,
    `is_bord`,
	`is_red`,
	`is_pass`) VALUES (?, ?, ?, ?, ?, ?)";

//绑定变量
$stmt = $con->prepare($sql);
$stmt->bind_param('sssiii',
    $title,
    $content,
	$create_at,
    $is_bord,
	$is_red,
	$is_pass
);

$stmt->execute();
$stmt->store_result();

$affected_rows = $stmt->affected_rows;
//关闭数据库连接
$stmt->close();
$con->close();
echo $affected_rows;
exit;
