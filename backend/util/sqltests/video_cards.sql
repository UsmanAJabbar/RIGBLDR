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
-- Table structure for table `video_cards`
--

DROP TABLE IF EXISTS `video_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `chipset_manufacturer` varchar(255) NOT NULL,
  `chipset` varchar(255) NOT NULL,
  `memory` int(11) NOT NULL,
  `core_clock` int(11) NOT NULL,
  `boost_clock` int(11) NOT NULL,
  `pcie_gen` varchar(255) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `video_cards_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_cards`
--

LOCK TABLES `video_cards` WRITE;
/*!40000 ALTER TABLE `video_cards` DISABLE KEYS */;
INSERT INTO `video_cards` VALUES (1,'EVGA GeForce RTX 3060 XC Gaming','EVGA','NVIDIA','GeForce RTX 3060',12,0,1882,'16',170,NULL),(2,'PowerColor Red Devil AMD Radeon RX 6700 XT Gaming Graphics Card','PowerColor','AMD','Radeon RX 6700 XT',12,2514,2633,'16',230,NULL),(3,'ZOTAC Gaming GeForce GTX 1660 Super 6GB GDDR6 192-bit Gaming Graphics Card','ZOTAC','NVIDIA','GeForce GTX 1660',6,0,1785,'8',125,NULL);
/*!40000 ALTER TABLE `video_cards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-02 20:42:31
