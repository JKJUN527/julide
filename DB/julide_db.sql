/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : julide_db

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-12-12 21:24:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `jld_admin`
-- ----------------------------
DROP TABLE IF EXISTS `jld_admin`;
CREATE TABLE `jld_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `type` int(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_admin
-- ----------------------------

-- ----------------------------
-- Table structure for `jld_devices`
-- ----------------------------
DROP TABLE IF EXISTS `jld_devices`;
CREATE TABLE `jld_devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `image` varchar(200) DEFAULT NULL COMMENT '产品图片url',
  `description` varchar(500) DEFAULT NULL COMMENT '产品描述',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_devices
-- ----------------------------
INSERT INTO `jld_devices` VALUES ('1', '0', 'name1', 'index-content-right-01.jpg', null, '2017-12-12 20:53:26');
INSERT INTO `jld_devices` VALUES ('2', '0', 'name2', 'index-content-right-01.jpg', null, '2017-12-12 20:53:27');
INSERT INTO `jld_devices` VALUES ('3', '0', 'name3', 'index-content-right-01.jpg', null, '2017-12-12 20:53:29');
INSERT INTO `jld_devices` VALUES ('4', '0', 'naem4', 'index-content-right-01.jpg', null, '2017-12-12 20:53:31');
INSERT INTO `jld_devices` VALUES ('5', '0', 'name5', 'index-content-right-01.jpg', null, '2017-12-12 20:53:34');
INSERT INTO `jld_devices` VALUES ('6', '1', 'name6', null, null, '2017-12-12 20:55:36');
INSERT INTO `jld_devices` VALUES ('7', '0', 'name7', null, null, '2017-12-12 21:22:31');

-- ----------------------------
-- Table structure for `jld_device_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_device_type`;
CREATE TABLE `jld_device_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_device_type
-- ----------------------------
INSERT INTO `jld_device_type` VALUES ('0', 'type1', null);
INSERT INTO `jld_device_type` VALUES ('1', 'type2', null);
INSERT INTO `jld_device_type` VALUES ('2', 'type3', null);
INSERT INTO `jld_device_type` VALUES ('3', 'type4', null);
INSERT INTO `jld_device_type` VALUES ('4', 'type5', null);
INSERT INTO `jld_device_type` VALUES ('5', 'type6', null);

-- ----------------------------
-- Table structure for `jld_news`
-- ----------------------------
DROP TABLE IF EXISTS `jld_news`;
CREATE TABLE `jld_news` (
  `id` int(11) NOT NULL,
  `type` int(1) DEFAULT '0' COMMENT '0,1,2（公司新闻、行业新闻、产品咨询）',
  `title` varchar(100) DEFAULT NULL COMMENT '新闻标题',
  `content` longtext COMMENT '新闻内容',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_news
-- ----------------------------
INSERT INTO `jld_news` VALUES ('1', '0', 'firstnews', '1', '2017-12-12 13:01:16');
INSERT INTO `jld_news` VALUES ('2', '0', '2', '2', '2017-12-12 13:01:17');
INSERT INTO `jld_news` VALUES ('3', '0', '3', '3', '2017-12-12 13:01:18');
INSERT INTO `jld_news` VALUES ('4', '0', '4', '4', '2017-12-12 13:01:18');
INSERT INTO `jld_news` VALUES ('5', '0', '5', '5', '2017-12-12 13:01:19');
INSERT INTO `jld_news` VALUES ('6', '0', '6', '6', '2017-12-12 13:01:20');
INSERT INTO `jld_news` VALUES ('7', '0', '7', '7', '2017-12-12 13:01:20');
INSERT INTO `jld_news` VALUES ('8', '0', '8', '8', '2017-12-12 13:01:22');
INSERT INTO `jld_news` VALUES ('9', '1', '防守打法三', '根深蒂固的发送', '2017-12-12 13:01:07');
INSERT INTO `jld_news` VALUES ('10', '1', '发的撒范德萨发', ' 是股份公司', '2017-12-12 13:01:09');
INSERT INTO `jld_news` VALUES ('11', '1', '发生的反复', ' 三个是豆腐干', '2017-12-12 13:01:11');
INSERT INTO `jld_news` VALUES ('12', '1', '阿斯蒂芬范德萨发', ' 三个地方个', '2017-12-12 13:01:14');
INSERT INTO `jld_news` VALUES ('13', '1', '个大范甘迪', '9', '2017-12-12 13:01:24');
INSERT INTO `jld_news` VALUES ('14', '1', '热热', '10', '2017-12-12 13:01:26');
INSERT INTO `jld_news` VALUES ('15', '1', '太热太热', '11', '2017-12-12 13:01:27');
INSERT INTO `jld_news` VALUES ('16', '1', '特尔也让', '12', '2017-12-12 13:01:28');
INSERT INTO `jld_news` VALUES ('17', '0', '佛挡杀佛', '13', '2017-12-12 13:01:29');
INSERT INTO `jld_news` VALUES ('18', '0', '防守打法的是', '14', '2017-12-12 13:01:31');
INSERT INTO `jld_news` VALUES ('19', '0', '防守打法的', '15', '2017-12-12 13:01:32');
INSERT INTO `jld_news` VALUES ('20', '2', 'abcgdd', '16', '2017-12-12 13:01:34');

-- ----------------------------
-- Table structure for `jld_products`
-- ----------------------------
DROP TABLE IF EXISTS `jld_products`;
CREATE TABLE `jld_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `image` varchar(200) DEFAULT NULL COMMENT '产品图片url',
  `model` varchar(100) DEFAULT NULL COMMENT '产品型号',
  `material` varchar(50) DEFAULT NULL COMMENT '产品用料',
  `temperature` varchar(50) DEFAULT NULL COMMENT '成型温度',
  `description` varchar(500) DEFAULT NULL COMMENT '产品描述',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_products
-- ----------------------------
INSERT INTO `jld_products` VALUES ('1', '0', 'name1', 'index-content-left-01.png', null, null, null, null, '2017-12-12 15:02:56');
INSERT INTO `jld_products` VALUES ('2', '0', 'name2', 'index-content-left-01.png', null, null, null, null, '2017-12-12 15:02:58');
INSERT INTO `jld_products` VALUES ('3', '0', 'name3', 'index-content-left-01.png', null, null, null, null, '2017-12-12 15:02:59');
INSERT INTO `jld_products` VALUES ('4', '0', 'name4', 'index-content-left-01.png', null, null, null, null, '2017-12-12 15:03:01');
INSERT INTO `jld_products` VALUES ('5', '0', 'name5', 'index-content-left-01.png', null, null, null, null, '2017-12-12 15:03:08');
INSERT INTO `jld_products` VALUES ('6', '1', 'name6', null, 'ps12', 'ABS', '250', 'FADSFDSAFDSAF', '2017-12-12 19:52:15');
INSERT INTO `jld_products` VALUES ('7', '0', 'name7', null, null, null, null, null, '2017-12-12 15:06:58');
INSERT INTO `jld_products` VALUES ('8', '1', 'name8', null, null, null, null, null, '2017-12-12 21:19:10');
INSERT INTO `jld_products` VALUES ('9', '2', 'name9', null, null, null, null, null, '2017-12-12 21:19:06');
INSERT INTO `jld_products` VALUES ('10', '3', 'name10', null, null, null, null, null, '2017-12-12 21:19:05');

-- ----------------------------
-- Table structure for `jld_product_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_product_type`;
CREATE TABLE `jld_product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_product_type
-- ----------------------------
INSERT INTO `jld_product_type` VALUES ('0', 'type1', null);
INSERT INTO `jld_product_type` VALUES ('1', 'type2', null);
INSERT INTO `jld_product_type` VALUES ('2', 'type3', null);
INSERT INTO `jld_product_type` VALUES ('3', 'type4', null);
INSERT INTO `jld_product_type` VALUES ('4', 'type5', null);
=======
/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : julide_db

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-12-14 09:20:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `jld_admin`
-- ----------------------------
DROP TABLE IF EXISTS `jld_admin`;
CREATE TABLE `jld_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(60) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `is_active` int(1) NOT NULL DEFAULT '1',
  `is_boss` int(1) NOT NULL DEFAULT '0',
  `register_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_admin
-- ----------------------------
INSERT INTO `jld_admin` VALUES ('1', 'ef90b6341c3009b205da6eaeecfe948e', 'intelshare', '27ea61d786abb69a508b3c0695e24f65 ', '1', '1', '2017-03-28 09:41:18');
INSERT INTO `jld_admin` VALUES ('2', 'd8f7fbaea4105072c42d741c1a9f4542', 'jkjun', '27ea61d786abb69a508b3c0695e24f65', '1', '0', '2017-12-13 16:04:50');

-- ----------------------------
-- Table structure for `jld_devices`
-- ----------------------------
DROP TABLE IF EXISTS `jld_devices`;
CREATE TABLE `jld_devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `image` varchar(200) DEFAULT NULL COMMENT '产品图片url',
  `description` varchar(500) DEFAULT NULL COMMENT '产品描述',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_devices
-- ----------------------------
INSERT INTO `jld_devices` VALUES ('2', '0', 'name2', 'index-content-right-01.jpg', '水电费是否', '2017-12-13 21:20:30');
INSERT INTO `jld_devices` VALUES ('3', '0', 'name3', 'index-content-right-01.jpg', '佛挡杀佛', '2017-12-13 21:20:31');
INSERT INTO `jld_devices` VALUES ('4', '0', 'naem4', 'index-content-right-01.jpg', '四方达', '2017-12-13 21:20:31');
INSERT INTO `jld_devices` VALUES ('5', '0', 'name5', 'index-content-right-01.jpg', '发多少', '2017-12-13 21:20:32');
INSERT INTO `jld_devices` VALUES ('6', '1', 'name6', null, '阿凡达', '2017-12-13 21:20:33');
INSERT INTO `jld_devices` VALUES ('7', '5', 'name7', '15131720481.jpg', ' 发生的jkjun', '2017-12-13 21:34:08');
INSERT INTO `jld_devices` VALUES ('8', '0', 'jkjuijuinujn', '111.jpg', 'fdasfdsafdas', '2017-12-13 21:47:53');

-- ----------------------------
-- Table structure for `jld_device_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_device_type`;
CREATE TABLE `jld_device_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_device_type
-- ----------------------------
INSERT INTO `jld_device_type` VALUES ('0', 'type2', '个发顺丰GV');
INSERT INTO `jld_device_type` VALUES ('1', 'type3', '的算法发');
INSERT INTO `jld_device_type` VALUES ('2', 'type4', '发生的');
INSERT INTO `jld_device_type` VALUES ('3', 'type5', '防守打法');
INSERT INTO `jld_device_type` VALUES ('4', 'type6', '阿范德萨发');
INSERT INTO `jld_device_type` VALUES ('5', 'test1', 'sdfsf');

-- ----------------------------
-- Table structure for `jld_news`
-- ----------------------------
DROP TABLE IF EXISTS `jld_news`;
CREATE TABLE `jld_news` (
  `id` int(11) NOT NULL,
  `type` int(1) DEFAULT '0' COMMENT '0,1,2（公司新闻、行业新闻、产品咨询）',
  `title` varchar(100) DEFAULT NULL COMMENT '新闻标题',
  `content` longtext COMMENT '新闻内容',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_news
-- ----------------------------
INSERT INTO `jld_news` VALUES ('0', '2', 'testnew1', '产品咨询', '2017-12-13 17:04:47');
INSERT INTO `jld_news` VALUES ('2', '0', '2', '2', '2017-12-12 13:01:17');
INSERT INTO `jld_news` VALUES ('3', '0', '3', '3', '2017-12-12 13:01:18');
INSERT INTO `jld_news` VALUES ('4', '0', '4', '4', '2017-12-12 13:01:18');
INSERT INTO `jld_news` VALUES ('5', '0', '5', '5', '2017-12-12 13:01:19');
INSERT INTO `jld_news` VALUES ('6', '0', '6', '6', '2017-12-12 13:01:20');
INSERT INTO `jld_news` VALUES ('7', '0', '7', '7', '2017-12-12 13:01:20');
INSERT INTO `jld_news` VALUES ('8', '0', '8', '8', '2017-12-12 13:01:22');
INSERT INTO `jld_news` VALUES ('9', '1', '防守打法三', '根深蒂固的发送公司的发光时代割发代首高反的是否感到个地方三个是豆腐干的三个公司的发光时代鬼斧神工高富帅大范甘迪三个是施工方的三个的三个高大上分工分的三个是的弗格森的风格是的弗格森的风格', '2017-12-13 16:47:16');
INSERT INTO `jld_news` VALUES ('10', '1', '发的撒范德萨发', ' 是股份公司', '2017-12-12 13:01:09');
INSERT INTO `jld_news` VALUES ('11', '1', '发生的反复', ' 三个是豆腐干', '2017-12-12 13:01:11');
INSERT INTO `jld_news` VALUES ('12', '1', '阿斯蒂芬范德萨发', ' 三个地方个', '2017-12-12 13:01:14');
INSERT INTO `jld_news` VALUES ('13', '1', '个大范甘迪', '9', '2017-12-12 13:01:24');
INSERT INTO `jld_news` VALUES ('14', '1', '热热', '10', '2017-12-12 13:01:26');
INSERT INTO `jld_news` VALUES ('15', '1', '太热太热', '11', '2017-12-12 13:01:27');
INSERT INTO `jld_news` VALUES ('16', '1', '特尔也让', '12', '2017-12-12 13:01:28');
INSERT INTO `jld_news` VALUES ('17', '0', '佛挡杀佛', '13', '2017-12-12 13:01:29');
INSERT INTO `jld_news` VALUES ('18', '0', '防守打法的是', '14', '2017-12-12 13:01:31');
INSERT INTO `jld_news` VALUES ('19', '0', '防守打法的', '15', '2017-12-12 13:01:32');
INSERT INTO `jld_news` VALUES ('20', '2', 'abcgdd', '16', '2017-12-12 13:01:34');

-- ----------------------------
-- Table structure for `jld_products`
-- ----------------------------
DROP TABLE IF EXISTS `jld_products`;
CREATE TABLE `jld_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `image` varchar(200) DEFAULT NULL COMMENT '产品图片url',
  `model` varchar(100) DEFAULT NULL COMMENT '产品型号',
  `material` varchar(50) DEFAULT NULL COMMENT '产品用料',
  `temperature` varchar(50) DEFAULT NULL COMMENT '成型温度',
  `description` varchar(500) DEFAULT NULL COMMENT '产品描述',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_products
-- ----------------------------
INSERT INTO `jld_products` VALUES ('2', '0', 'name2', 'index-content-left-01.png', null, null, null, ' 施工方古代诗歌', '2017-12-13 17:29:34');
INSERT INTO `jld_products` VALUES ('3', '0', 'name3', 'index-content-left-01.png', null, null, null, '公司的发给', '2017-12-13 17:29:35');
INSERT INTO `jld_products` VALUES ('4', '0', 'name4', 'index-content-left-01.png', null, null, null, ' 是个梵蒂冈', '2017-12-13 17:29:36');
INSERT INTO `jld_products` VALUES ('5', '0', 'name5', 'index-content-left-01.png', null, null, null, '是股份', '2017-12-13 17:29:38');
INSERT INTO `jld_products` VALUES ('6', '1', 'name6', null, 'ps12', 'ABS', '250', 'FADSFDSAFDSAF', '2017-12-12 19:52:15');
INSERT INTO `jld_products` VALUES ('7', '0', 'name7', null, null, null, null, '是股份的三个', '2017-12-13 17:29:39');
INSERT INTO `jld_products` VALUES ('8', '1', 'name8', null, null, null, null, '是股份十多个', '2017-12-13 17:29:40');
INSERT INTO `jld_products` VALUES ('9', '2', 'name9', null, null, null, null, '换个号', '2017-12-13 17:29:41');
INSERT INTO `jld_products` VALUES ('10', '1', 'name10', '15131679382.jpg', '1', '1', '1', '华融研分会', '2017-12-13 20:25:38');
INSERT INTO `jld_products` VALUES ('11', '0', 'jkjun', '15131697932.jpg', '2', '2', '2', '2222222', '2017-12-13 20:56:33');

-- ----------------------------
-- Table structure for `jld_product_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_product_type`;
CREATE TABLE `jld_product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_product_type
-- ----------------------------
INSERT INTO `jld_product_type` VALUES ('0', 'type1', '对方是否公司的');
INSERT INTO `jld_product_type` VALUES ('1', 'type2', '贵公司');
INSERT INTO `jld_product_type` VALUES ('2', 'type3', '公司');
INSERT INTO `jld_product_type` VALUES ('3', 'type4', '挂号费天珩');
