<?php
/**
 *  修改一个资讯
 */
require 'connection.db.php';
require 'Constant.php';

$id = $_POST['id'];
$title = $_POST['title'];
$content = $_POST['content'];
$is_bord = $_POST['is_bord'];
$is_red = $_POST["is_red"];
$is_pass = $_POST["is_pass"];


//连接数据库，并设置字符编码
$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");

    $sql = "UPDATE `tb_dailymes` SET `title` = ?, `content` = ?, `is_bord` = ?, `is_red` = ?,`is_pass` = ? WHERE `did` = ?";
    //绑定变量
    $stmt = $con->prepare($sql);
    $stmt->bind_param('ssiiii',
        $title,
        $content,
        $is_bord,
        $is_red,
		$is_pass,
        $id
    );

$stmt->execute();
$stmt->store_result();

$affected_rows = $stmt->affected_rows;
//关闭数据库连接
$stmt->close();
$con->close();
echo $affected_rows;
exit;
