-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: technohouse_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zipCode` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Hackett Lock',491,'New Alanshire','Montana',59235,'2021-04-07 00:39:56','2021-04-07 00:39:56'),(2,'Kaylie Tunnel',1806,'Cormierchester','West Virginia',11752,'2021-04-07 00:39:56','2021-04-07 00:39:56'),(3,'Schroeder Wall',2579,'Blickport','Oregon',93508,'2021-04-07 00:39:56','2021-04-07 00:39:56');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userNumber` int(11) DEFAULT NULL,
  `expirationDate` int(11) DEFAULT NULL,
  `securityCode` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,5133,2021,0,'2021-04-07 00:39:59','2021-04-07 00:39:59'),(2,6759,2021,0,'2021-04-07 00:40:00','2021-04-07 00:40:00'),(3,3574,2022,0,'2021-04-07 00:40:01','2021-04-07 00:40:01');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'arduino','2021-04-07 00:39:57','2021-04-07 00:39:57'),(2,'modulos','2021-04-07 00:39:57','2021-04-07 00:39:57'),(3,'sensores','2021-04-07 00:39:57','2021-04-07 00:39:57'),(4,'accesorios','2021-04-07 00:39:57','2021-04-07 00:39:57'),(5,'servosymotores','2021-04-07 00:39:57','2021-04-07 00:39:57'),(6,'leds','2021-04-07 00:39:57','2021-04-07 00:39:57'),(7,'componentes','2021-04-07 00:39:57','2021-04-07 00:39:57');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_image_products_product` (`productId`),
  CONSTRAINT `fk_image_products_product` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'http://placeimg.com/640/480/business',6,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(2,'http://placeimg.com/640/480/business',6,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(3,'http://placeimg.com/640/480/business',10,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(4,'http://placeimg.com/640/480/business',7,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(5,'http://placeimg.com/640/480/business',5,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(6,'http://placeimg.com/640/480/business',3,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(7,'http://placeimg.com/640/480/business',1,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(8,'http://placeimg.com/640/480/business',10,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(9,'http://placeimg.com/640/480/business',3,'2021-04-07 00:40:05','2021-04-07 00:40:05'),(10,'http://placeimg.com/640/480/business',1,'2021-04-07 00:40:05','2021-04-07 00:40:05');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_categories_category` (`categoryId`),
  CONSTRAINT `fk_product_categories_category` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sleek Cotton Chair','The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',967,10,6,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(2,'Licensed Frozen Tuna','The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',437,10,4,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(3,'Sleek Soft Chips','The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',984,10,3,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(4,'Practical Soft Chair','The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',163,10,2,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(5,'Handmade Concrete Cheese','New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',480,10,7,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(6,'Generic Fresh Chips','The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',663,10,2,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(7,'Sleek Granite Gloves','The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',106,10,2,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(8,'Refined Metal Pizza','The Football Is Good For Training And Recreational Purposes',430,10,5,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(9,'Handcrafted Cotton Soap','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',734,10,5,'2021-04-07 00:40:04','2021-04-07 00:40:04'),(10,'Unbranded Plastic Chair','Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',98,10,3,'2021-04-07 00:40:04','2021-04-07 00:40:04');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizedata`
--

DROP TABLE IF EXISTS `sequelizedata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizedata` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizedata`
--

LOCK TABLES `sequelizedata` WRITE;
/*!40000 ALTER TABLE `sequelizedata` DISABLE KEYS */;
INSERT INTO `sequelizedata` VALUES ('20210406045422-addresses.js'),('20210406051132-categories.js'),('20210406052803-cards.js'),('20210406053646-users.js'),('20210406055017-products.js'),('20210406055018-images.js');
/*!40000 ALTER TABLE `sequelizedata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210405155205-create-address.js'),('20210405155206-create-category.js'),('20210405155207-create-card.js'),('20210405155208-create-user.js'),('20210405160209-create-image.js'),('20210405160210-create-product.js'),('20210406040113-fkCategory.js'),('20210406044741-fkProduct.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `cardsId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addressId` (`addressId`),
  KEY `cardsId` (`cardsId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`cardsId`) REFERENCES `cards` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Adeline','Emard','Jewell.Lowe17@yahoo.com','$2b$12$ps0UMOqUQvZfvNevwBKvFuGxq4d1FYHkZja6RIlA2bhvczhuAbePC','https://s3.amazonaws.com/uifaces/faces/twitter/marlinjayakody/128.jpg','user',1,2,'2021-04-07 00:40:02','2021-04-07 00:40:02'),(2,'Keshaun','Deckow','Reese79@yahoo.com','$2b$12$BZcXiwClZ1OhPRfa1UKsQ.rhYMjqY7I6Cgm/iz6.XsZ0l.liZtNUW','https://s3.amazonaws.com/uifaces/faces/twitter/davecraige/128.jpg','user',1,1,'2021-04-07 00:40:03','2021-04-07 00:40:03'),(3,'Delaney','Moen','Melyssa11@gmail.com','$2b$12$71NXDsAFRKnk6uLIiTvHzeSa0El7cGtwjfsUWfHNzdto0zYK1Xw7S','https://s3.amazonaws.com/uifaces/faces/twitter/ceekaytweet/128.jpg','user',2,3,'2021-04-07 00:40:04','2021-04-07 00:40:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-08 17:30:02
