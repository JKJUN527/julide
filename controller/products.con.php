<?php
/**
 * 获产品中心主页列表
 *
 * Created by PhpStorm.
 * User: liuyang
 * Date: 2017/03/26
 * Time: 12:11
 */

require 'connection.db.php';
require 'Constant.php';

$numPerPage = 8;
$funName = filter_input(INPUT_GET, 'funName');
$type = filter_input(INPUT_GET, 'type');

switch ($funName) {
    case 'getProducts':
        getProducts(((int)$_GET['cp'] - 1) * $numPerPage, $numPerPage, $type);
        break;
    case 'getProductDetail':
        getProductDetail((int)$_GET['id']);
        break;
    case 'getDevices':
        getDevices(((int)$_GET['cp'] - 1) * $numPerPage, $numPerPage, $type);
        break;
    case 'addServiceRequest':
        addServiceRequest();
        break;
    case 'getServiceDetail':
        getServiceDetail((int)$_GET['i']);
        break;
    default:
        echo json_encode(array());
}


function connect()
{
    $con = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
    $con->query("SET NAMES UTF8;");
    return $con;
}

function PDOConnect()
{
    $con = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PWD);
    $con->query("SET NAMES UTF8;");
    return $con;
}

function getProducts($s, $n, $type)
{
    $con = connect();

    $result = array();
    //获取type类型
    $sqltype = "SELECT * FROM `jld_product_type`";
    $stmt = $con->prepare($sqltype);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result(
        $id,
        $name,
        $describe
    );
    $result['type'] = array();
    while ($stmt->fetch()) {
        $item = array();
        $item['id'] = $id;
        $item['name'] = $name;

        $result['type'][$id] = $item;
    }
//    if(empty($result['type'][$type])){
//        $type = $result['type']['0']->id;
//    }

    //获取type对应的product
    $sql = "SELECT 
                  `id`, 
                  `type`,
                  `title`, 
                  `image`, 
                  `created_at`
            FROM `jld_products`
            WHERE `type` = ?
            ORDER BY `created_at` DESC 
            LIMIT ?, ?";

    $stmt = $con->prepare($sql);
    $stmt->bind_param("iii",$type,$s, $n);
    $stmt->execute();

    $stmt->store_result();
    $stmt->bind_result(
        $id,
        $type,
        $title,
        $image,
        $created_at
    );

    $result['products'] = array();

    while ($stmt->fetch()) {
        $item = array();
        $item['id'] = $id;
        $item['type'] = $type;
        $item['title'] = $title;
        $item['image'] = $image;
        $item['created_at'] = $created_at;

        $result['products'][$id] = $item;
    }

    //获取数量
    $sqlCount = "SELECT * FROM `jld_products`  WHERE `type` = ?";
    $stmt = $con->prepare($sqlCount);
    $stmt->bind_param("i",$type);
    $stmt->execute();
    $stmt->store_result();
    $result['productsNum'] = $stmt->num_rows;

    //关闭数据库连接
    $stmt->close();
    $con->close();
    echo json_encode($result);
}
function getDevices($s, $n, $type)
{
    $con = connect();

    $result = array();
    //获取type类型
    $sqltype = "SELECT * FROM `jld_device_type`";
    $stmt = $con->prepare($sqltype);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result(
        $id,
        $name,
        $describe
    );
    $result['type'] = array();
    while ($stmt->fetch()) {
        $item = array();
        $item['id'] = $id;
        $item['name'] = $name;

        $result['type'][$id] = $item;
    }
//    if(empty($result['type'][$type])){
//        $type = $result['type']['0']->id;
//    }

    //获取type对应的product
    $sql = "SELECT 
                  `id`, 
                  `type`,
                  `title`, 
                  `image`, 
                  `description`, 
                  `created_at`
            FROM `jld_devices`
            WHERE `type` = ?
            ORDER BY `created_at` DESC 
            LIMIT ?, ?";

    $stmt = $con->prepare($sql);
    $stmt->bind_param("iii",$type,$s, $n);
    $stmt->execute();

    $stmt->store_result();
    $stmt->bind_result(
        $id,
        $type,
        $title,
        $image,
        $description,
        $created_at
    );

    $result['devices'] = array();

    while ($stmt->fetch()) {
        $item = array();
        $item['id'] = $id;
        $item['type'] = $type;
        $item['title'] = $title;
        $item['image'] = $image;
        $item['description'] = $description;
        $item['created_at'] = $created_at;

        $result['devices'][$id] = $item;
    }

    //获取数量
    $sqlCount = "SELECT * FROM `jld_devices`  WHERE `type` = ?";
    $stmt = $con->prepare($sqlCount);
    $stmt->bind_param("i",$type);
    $stmt->execute();
    $stmt->store_result();
    $result['devicesNum'] = $stmt->num_rows;

    //关闭数据库连接
    $stmt->close();
    $con->close();
    echo json_encode($result);
}
/**
 * @param $id
 */
function getProductDetail($id) {
    $con = connect();

    $sql = "SELECT 
                  `id`, 
                  `type`,
                  `title`, 
                  `image`, 
                  `model`, 
                  `material`, 
                  `temperature`, 
                  `description`, 
                  `created_at`
            FROM `jld_products`
            WHERE `id` = ?";

    $stmt = $con->prepare($sql);
    $stmt->bind_param("i",$id);
    $stmt->execute();

    $stmt->store_result();
    $stmt->bind_result(
        $id,
        $type,
        $title,
        $image,
        $model,
        $material,
        $temperature,
        $description,
        $created_at
    );

    $result['detail'] = array();

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

        $result['detail'] = $item;
    }

    //获取type类型
    $sqltype = "SELECT * FROM `jld_product_type`";
    $stmt1 = $con->prepare($sqltype);
    $stmt1->execute();
    $stmt1->store_result();
    $stmt1->bind_result(
        $id,
        $name,
        $describe
    );
    $result['type'] = array();
    while ($stmt1->fetch()) {
        $item = array();
        $item['id'] = $id;
        $item['name'] = $name;

        $result['type'][$id] = $item;
    }

    echo json_encode($result);
}

