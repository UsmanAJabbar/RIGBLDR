-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: rgbldr
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

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
-- Table structure for table `processors`
--

DROP TABLE IF EXISTS `processors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `processors` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(5) NOT NULL,
  `proc_tier` varchar(12) NOT NULL,
  `generation` int(1) NOT NULL,
  `part_num` varchar(8) NOT NULL,
  `socket` varchar(8) NOT NULL,
  `core` int(1) NOT NULL,
  `thread` int(1) NOT NULL,
  `smt` tinyint(1) NOT NULL,
  `tdp` varchar(4) NOT NULL,
  `fullname` varchar(64) NOT NULL,
  `api_id` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturer` (`manufacturer`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processors`
--

LOCK TABLES `processors` WRITE;
/*!40000 ALTER TABLE `processors` DISABLE KEYS */;
INSERT INTO `processors` VALUES (1,'AMD','Ryzen 7',5,'5800x','AM4',8,16,1,'105W','AMD Ryzen 7 5800X',1),(2,'AMD','Ryzen 5',5,'5600x','AM4',6,12,1,'105W','AMD Ryzen 5 5600X',2),(3,'Intel','Core i7',10,'10700k','LGA1200',8,16,1,'125W','Intel Core i7 10700k',3),(4,'Intel','Core i9',10,'10900k','R4',10,20,1,'125W','Intel Core i9 10900k',4);
/*!40000 ALTER TABLE `processors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apis`
--

DROP TABLE IF EXISTS `apis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apis` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `vendor_product_id` varchar(10) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `quantity` int(1) NOT NULL,
  `vendor_id` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apis`
--

LOCK TABLES `apis` WRITE;
/*!40000 ALTER TABLE `apis` DISABLE KEYS */;
INSERT INTO `apis` VALUES (1,'B0815XFSGK',393.99,1,'1'),(2,'B08166SLDF',288.99,1,'1'),(3,'B086ML4XSB',319.99,1,'1'),(4,'B08H2DRCWZ',499.99,1,'1');
/*!40000 ALTER TABLE `apis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-19 23:48:29
