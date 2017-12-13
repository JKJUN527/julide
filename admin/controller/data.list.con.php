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
$sql = "SELECT `did`, `title`, `content`, `create_at`, `is_pass`, `is_bord`, `is_red` FROM `tb_dailymes` ORDER BY `did` DESC";
$stmt = $con->prepare($sql);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($did, $title, $content, $create_at, $is_pass,$is_bord,$is_red);
$result['info'] = array();
//int i=0;
$i=0;
while ($stmt->fetch()) {
	
    $item = array();
    $item['did'] = $did;
    $item['title'] = $title;
    $item['content'] = $content;
    $item['create_at'] = $create_at;
    $item['is_pass'] = $is_pass;
	$item['is_bord'] = $is_bord;
	$item['is_red'] = $is_red;
	
    $result['info'][$i++] = $item;
}

$result['number'] = $stmt->num_rows;

//关闭数据库连接
$stmt->close();
$con->close();

echo json_encode($result);
exit;