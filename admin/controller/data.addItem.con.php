<?php
/**
 *  新增一个资讯
 */
require 'connection.db.php';
require 'Constant.php';

$title = $_POST['pname'];
$content = $_POST['content'];
$model = $_POST['model'];
$type = $_POST['type'];
$material = $_POST['material'];
//$temperature = $_POST['temperature'];
$image_flag = $_POST["image-flag"];

//指定上传图片的路径
$upload_folder = substr(dirname(__FILE__), 0, -16) . 'images/products/';

//如果指定的路径不存在则创建
if (!file_exists($upload_folder)) {
    echo $upload_folder;
    exit;
}

$fileUpload = "";

if ($image_flag == 1 && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $tmp_name = $_FILES['image']['tmp_name'];
    $name = time() . $_FILES['image']['name'];
    $uploadFile = $upload_folder . $name;
    move_uploaded_file($tmp_name, $uploadFile);
    $fileUpload = $name;
}

//print $upload_folder;
//连接数据库，并设置字符编码
$con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
$con->query("SET NAMES UTF8;");

//定义SQL语句
$sql = "INSERT INTO `jld_products` (
    `type`, 
    `title`, 
    `image`,
    `model`,
    `material`,
    `description`) VALUES (?, ?, ?, ?, ? ,?)";

//绑定变量
$stmt = $con->prepare($sql);
$stmt->bind_param('isssss',
    $type,
    $title,
    $fileUpload,
    $model,
    $material,
    $content
);

$stmt->execute();
$stmt->store_result();

$affected_rows = $stmt->affected_rows;
//关闭数据库连接
$stmt->close();
$con->close();
echo $affected_rows;
exit;
