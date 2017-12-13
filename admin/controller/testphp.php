<?php
/**
 * Created by PhpStorm.
 * User: JKJUN
 * Date: 2017-12-13
 * Time: 15:34
 */
require 'Constant.php';
require 'global.func.php';

$data['password'] = md5("123456" . Constant::$_SALT);
$token = generateToken("intelshare", $data['password'], Constant::$_SALT);

print_r($data);