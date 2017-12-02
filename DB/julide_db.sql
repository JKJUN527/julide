/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : julide_db

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-12-02 16:43:56
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_devices
-- ----------------------------
INSERT INTO `jld_devices` VALUES ('1', '0', null, 'index-content-right-01.jpg', null, '2017-12-02 15:53:02');
INSERT INTO `jld_devices` VALUES ('2', '0', null, 'index-content-right-01.jpg', null, '2017-12-02 15:53:03');
INSERT INTO `jld_devices` VALUES ('3', '0', null, 'index-content-right-01.jpg', null, '2017-12-02 15:53:04');
INSERT INTO `jld_devices` VALUES ('4', '0', null, 'index-content-right-01.jpg', null, '2017-12-02 15:53:04');
INSERT INTO `jld_devices` VALUES ('5', '0', null, 'index-content-right-01.jpg', null, '2017-12-02 15:53:06');

-- ----------------------------
-- Table structure for `jld_device_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_device_type`;
CREATE TABLE `jld_device_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_device_type
-- ----------------------------

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
INSERT INTO `jld_news` VALUES ('1', '0', 'firstnews', null, '2017-12-02 15:35:25');
INSERT INTO `jld_news` VALUES ('2', '0', '2', null, '2017-12-02 15:35:50');
INSERT INTO `jld_news` VALUES ('3', '0', '3', null, '2017-12-02 15:35:52');
INSERT INTO `jld_news` VALUES ('4', '0', '4', null, '2017-12-02 15:35:54');
INSERT INTO `jld_news` VALUES ('5', '0', '5', null, '2017-12-02 15:35:45');
INSERT INTO `jld_news` VALUES ('6', '0', '6', null, '2017-12-02 15:35:46');
INSERT INTO `jld_news` VALUES ('7', '0', '7', null, '2017-12-02 15:35:57');
INSERT INTO `jld_news` VALUES ('8', '0', '8', null, '2017-12-02 15:35:58');

-- ----------------------------
-- Table structure for `jld_products`
-- ----------------------------
DROP TABLE IF EXISTS `jld_products`;
CREATE TABLE `jld_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT '产品名称',
  `image` varchar(200) DEFAULT NULL COMMENT '产品图片url',
  `description` varchar(500) DEFAULT NULL COMMENT '产品描述',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_products
-- ----------------------------
INSERT INTO `jld_products` VALUES ('1', '0', null, 'index-content-left-01.png', null, '2017-12-02 14:55:37');
INSERT INTO `jld_products` VALUES ('2', '0', null, 'index-content-left-01.png', null, '2017-12-02 14:55:51');
INSERT INTO `jld_products` VALUES ('3', '0', null, 'index-content-left-01.png', null, '2017-12-02 14:55:53');
INSERT INTO `jld_products` VALUES ('4', '0', null, 'index-content-left-01.png', null, '2017-12-02 14:55:55');
INSERT INTO `jld_products` VALUES ('5', '0', null, 'index-content-left-01.png', null, '2017-12-02 14:55:58');

-- ----------------------------
-- Table structure for `jld_product_type`
-- ----------------------------
DROP TABLE IF EXISTS `jld_product_type`;
CREATE TABLE `jld_product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '产品类别id',
  `name` varchar(100) DEFAULT NULL COMMENT '类别名称',
  `describe` varchar(500) DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jld_product_type
-- ----------------------------
