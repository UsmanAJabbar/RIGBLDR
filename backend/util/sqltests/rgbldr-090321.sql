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
-- Table structure for table `cases`
--

DROP TABLE IF EXISTS `cases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(255) NOT NULL,
  `form_factor` varchar(255) NOT NULL,
  `tempered_glass` tinyint(1) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `cases_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cases`
--

LOCK TABLES `cases` WRITE;
/*!40000 ALTER TABLE `cases` DISABLE KEYS */;
/*!40000 ALTER TABLE `cases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memories`
--

DROP TABLE IF EXISTS `memories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `speed` varchar(255) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `memories_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memories`
--

LOCK TABLES `memories` WRITE;
/*!40000 ALTER TABLE `memories` DISABLE KEYS */;
/*!40000 ALTER TABLE `memories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motherboards`
--

DROP TABLE IF EXISTS `motherboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `motherboards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `chipset` varchar(255) DEFAULT NULL,
  `socket` varchar(255) NOT NULL,
  `form_factor` varchar(255) NOT NULL,
  `max_mem` varchar(255) NOT NULL,
  `mem_slots` int(11) NOT NULL,
  `ddr_type` varchar(255) DEFAULT NULL,
  `pcie_gen` int(11) DEFAULT NULL,
  `sata6_slots` int(11) DEFAULT NULL,
  `m2_slots` int(11) DEFAULT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `motherboards_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motherboards`
--

LOCK TABLES `motherboards` WRITE;
/*!40000 ALTER TABLE `motherboards` DISABLE KEYS */;
INSERT INTO `motherboards` VALUES (2,'Gigabyte B450 AORUS PRO WIFI (rev. 1.0)','Gigabyte','AMD B450','AM4','ATX','64 GB',4,'DDR4',16,6,2,41),(3,'Asus TUF GAMING B550M-PLUS (WI-FI)','Asus','AMD B550','AM4','Micro ATX','128 GB',4,'DDR4',16,4,2,42),(4,'MSI MPG Z490 GAMING EDGE WIFI','MSI','Intel Z490','LGA1200','ATX','128 GB',4,'DDR4',16,6,2,49);
/*!40000 ALTER TABLE `motherboards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `power_supplies`
--

DROP TABLE IF EXISTS `power_supplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `power_supplies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(255) NOT NULL,
  `wattage` varchar(255) NOT NULL,
  `form_factor` varchar(255) NOT NULL,
  `modularity` varchar(255) NOT NULL,
  `efficiency` varchar(255) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `power_supplies_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `power_supplies`
--

LOCK TABLES `power_supplies` WRITE;
/*!40000 ALTER TABLE `power_supplies` DISABLE KEYS */;
/*!40000 ALTER TABLE `power_supplies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processors`
--

DROP TABLE IF EXISTS `processors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `processors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `proc_tier` varchar(255) DEFAULT NULL,
  `generation` int(11) DEFAULT NULL,
  `part_num` varchar(255) DEFAULT NULL,
  `socket` varchar(255) DEFAULT NULL,
  `core` int(11) NOT NULL,
  `thread` int(11) DEFAULT NULL,
  `smt` tinyint(1) NOT NULL,
  `tdp` varchar(255) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `processors_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processors`
--

LOCK TABLES `processors` WRITE;
/*!40000 ALTER TABLE `processors` DISABLE KEYS */;
INSERT INTO `processors` VALUES (9,'AMD Ryzen 5 5600X','AMD','5600X',5,'Ryzen 5','AM4',6,12,1,'65 W',1),(10,'AMD Ryzen 7 5800X','AMD','Ryzen 7',5,'5800X','AM4',8,16,1,'105 W',6),(11,'Intel Core i7-10700K','Intel','Core i7',10,'10700X','LGA 1200',8,16,1,'125 W',17),(12,'AMD Ryzen 9 5950X','AMD','5950X',5,'Ryzen 9','AM4',16,32,1,'105 W',7);
/*!40000 ALTER TABLE `processors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storages`
--

DROP TABLE IF EXISTS `storages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(255) NOT NULL,
  `interface` varchar(255) NOT NULL,
  `capacity` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `vendorEndpointId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vendorEndpointId` (`vendorEndpointId`),
  CONSTRAINT `storages_ibfk_1` FOREIGN KEY (`vendorEndpointId`) REFERENCES `vendor_endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storages`
--

LOCK TABLES `storages` WRITE;
/*!40000 ALTER TABLE `storages` DISABLE KEYS */;
/*!40000 ALTER TABLE `storages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_endpoints`
--

DROP TABLE IF EXISTS `vendor_endpoints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendor_endpoints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `vendor_id` varchar(255) NOT NULL,
  `vendor_product_id` varchar(255) DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `in_stock` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vendor_product_id` (`vendor_product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_endpoints`
--

LOCK TABLES `vendor_endpoints` WRITE;
/*!40000 ALTER TABLE `vendor_endpoints` DISABLE KEYS */;
INSERT INTO `vendor_endpoints` VALUES (1,'AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler','1','B08166SLDF',272.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(2,'AMD Ryzen 5 5600G 6-Core 12-Thread Desktop Processor with Radeon Graphics','1','B092L9GF5N',259.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(3,'AMD Ryzen 7 5700G 8-Core, 16-Thread Desktop Processor with Radeon Graphics','1','B091J3NYVF',359.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(4,'Intel Core i7-10700K Desktop Processor 8 Cores up to 5.1 GHz Unlocked LGA1200 (Intel 400 Series Chipset) 125W (BX8070110700K)','1','B086ML4XSB',270.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(5,'Intel Core i9-10850K Desktop Processor 10 Cores up to 5.2 GHz Unlocked LGA1200 (Intel 400 Series chipset) 125W','1','B08DHRG2X9',397.71,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(6,'AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor','1','B0815XFSGK',393.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(7,'AMD Ryzen 9 5950X 16-core, 32-Thread Unlocked Desktop Processor','1','B0815Y8J9N',749.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(8,'CPU Cooler with 5 Direct Contact Heatpipes, ARESGAME River 5 CPU Air Cooler for Intel/AMD with 120mm SYNC ARGB PWM Fan (5V ARGB Header is Required on Motherboard)','1','B08JCG2V6P',29.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(9,'AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler','1','B07SXMZLPK',279.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(10,'Intel Core i7-9700K Desktop Processor 8 Cores up to 3.6 GHz Turbo unlocked LGA1151 300 Series 95W','1','B07HHN6KBZ',259.70,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(11,'Intel BX80684I99900KF Intel Core i9-9900KF Desktop Processor 8 Cores up to 5.0 GHz Turbo Unlocked Without Processor Graphics LGA1151 300 Series 95W','1','B07MGBZWDZ',275.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(12,'Intel Core i5-10400F Desktop Processor 6 Cores up to 4.3 GHz Without Processor Graphics LGA1200 (Intel 400 Series chipset) 65W, Model Number: BX8070110400F','1','B086MHSTWN',178.69,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(13,'Beelink GTR Mini PC Windows 10 Pro,AMD Ryzen 5 3550H Processor(up to 3.7 GHz) 16GB DDR4 512GB NVMe SSD,Radeon Vega 8 Graphics,WiFi 6,Bluetooth 5.0,Dual Gigabit Ethernet,Gaming PC…','1','B08V54W7W9',569.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(14,'AMD Ryzen 3 3200G 4-Core Unlocked Desktop Processor with Radeon Graphics','1','B07STGHZK8',215.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(15,'Intel BX8070110105 CPU Core i3-10105 3.7 GHz Quad Core LGA1200 Processor','1','B092ZGRHB5',139.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(16,'AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler','1','B07STGGQ18',289.95,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(17,'Intel Core i7-10700KF Desktop Processor 8 Cores up to 5.1 GHz Unlocked Without Processor Graphics LGA1200 (Intel 400 Series chipset) 125W','1','B086MMS6FV',306.26,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(18,'Beelink GTR PRO Mini PC Windows 10 Pro,AMD Ryzen 5 3550H Processor(up to 3.7 GHz)8GB DDR4 256GB NVMe SSD+1TB HDD,WiFi 6,BT5.0,Dual Gigabit Ethernet,Multi-screen interactive,4K PC,Hi-Fi sound Gaming PC','1','B08LCVGH5Q',609.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(19,'fosa1 X5680 Six Core, X5680 Twelve Threads, 3.33 GHz, 12M Cache, LGA1366 CPU, 130W Power Consumption, 6.4 GT/s QPI Bus, Official Version, for mainboard','1','B08PYXW7BH',52.49,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(20,'Intel Core i9-10900K Desktop Processor 10 Cores up to 5.3 GHz Unlocked  LGA1200 (Intel 400 Series Chipset) 125W','1','B086MHSTVD',488.88,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(21,'Intel Core i5-9400 Desktop Processor 6 Cores 2. 90 GHz up to 4. 10 GHz Turbo LGA1151 300 Series 65W Processors BX80684I59400','1','B07MGZ9FJZ',214.95,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(22,'Intel Core i7-11700K Desktop Processor 8 Cores up to 5.0 GHz Unlocked LGA1200 (Intel 500 Series & Select 400 Series Chipset) 125W','1','B08X6ND3WP',397.88,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(23,'AMD Ryzen 3 3300X 4-Core, 8-Thread Unlocked Desktop Processor with Wraith Stealth Cooler','1','B0876YS2T4',179.95,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(24,'AMD Ryzen 5 2600 Processor with Wraith Stealth Cooler - YD2600BBAFBOX','1','B07B41WS48',187.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(25,'Intel Core i3-9100 Desktop Processor 4 Cores up to 4.2 GHz LGA1151 300 Series 65W','1','B07RXW4Y2K',167.83,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(26,'Intel Cerleon G5905 Desktop Processor 2 Cores 3.5 GHz LGA1200 (Intel 400 Series chipset) 58W','1','B08DHQMJ3H',57.65,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(27,'EVGA GeForce RTX 3060 XC Gaming, 12G-P5-3657-KR, 12GB GDDR6, Dual-Fan, Metal Backplate','1','B08WM28PVH',859.88,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(28,'ZOTAC Gaming GeForce GTX 1660 Super 6GB GDDR6 192-bit Gaming Graphics Card, Super Compact, ZT-T16620F-10L','1','B07Z8PWC6R',489.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(29,'ROG Strix Z590-E Gaming WiFi 6E LGA 1200(Intel 11th/10th Gen) ATX Gaming Motherboard (PCIe 4.0, 14+2 Power Stages, DDR4 5333+, Dual Intel 2.5 Gb LAN,Thunderbolt 4, 4xM.2/NVMe SSD and Aura RGB)','1','B08T6HTXF9',350.92,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(30,'ASUS ROG Strix B450-F Gaming II AMD AM4 (Ryzen 5000, 3rd Gen Ryzen ATX Gaming Motherboard (8+4 Power Stages, HDMI 2.0b/DP,2 x PCIe 3.0 x16, USB 3.2 Gen 2 Type-C, BIOS Flashback, 256Mb BIOS Flash ROM','1','B08KH1M1H4',129.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(31,'MSI MAG B550 TOMAHAWK Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX, AMD Ryzen 5000 Series processors)','1','B089CWDHFZ',155.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(32,'ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)','1','B088VSTS9H',194.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(33,'Biostar TB360-BTC PRO Core i7/i5/i3 (Intel 8th and 9th Gen) LGA1151 Intel B360 DDR4 12 GPU Mining Motherboard','1','B08YDHYDX9',240.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(34,'MSI Z390-A PRO LGA1151 (Intel 8th and 9th Gen) M.2 USB 3.1 Gen 2 DDR4 HDMI DP CFX Dual Gigabit LAN ATX Z390 Gaming Motherboard','1','B07J6Z9KJ2',129.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(35,'ASUS Prime Z390-P LGA1151 (Intel 8th and 9th Gen) ATX Motherboard for Cryptocurrency Mining(BTC) with Above 4G Decoding, 6xPCIe Slot and USB 3.1 Gen2','1','B07HCT5GBD',134.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(36,'GIGABYTE B450M DS3H V2 (AMD Ryzen AM4/Micro ATX/M.2/HMDI/DVI/USB 3.1/DDR4/Motherboard)','1','B08KWMXGQW',69.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(37,'ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)','1','B088W7RKVZ',188.56,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(38,'ASUS Prime Z590-A LGA 1200 (Intel11th/10th Gen) ATX Motherboard (14+2 DrMOS Power Stages,3X M.2, Intel 2.5 Gb LAN, USB 3.2 Front Panel Type-C, Thunderbolt 4, Aura Sync RGB Lighting)','1','B08SYWZW4S',263.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(39,'ROG Maximus XIII Hero (WiFi 6E) Z590 LGA 1200(Intel11th/10th Gen) ATX Gaming Motherboard (PCIe 4.0, 14+2 Power Stages, DDR4 5333+, Dual 2.5Gb LAN,Thunderbolt 4 onboard, 4X M.2/NVMe SSD, Aura RGB)','1','B08T6BHQC8',466.21,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(40,'MSI B550-A PRO ProSeries Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX)','1','B089CZSQB4',124.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(41,'GIGABYTE B450 AORUS PRO Wi-Fi (AMD Ryzen AM4/ATX/M.2 Thermal Guard with Onboard Wi-Fi/HDMI/DVI/USB 3.1 Gen 2/DDR4/Motherboard)','1','B07FW85VFT',109.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(42,'ASUS TUF Gaming B550M-PLUS (WiFi 6) AMD AM4 (3rd Gen Ryzen microATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, USB 3.2 Gen 2, Addressable Gen 2 RGB Header and Aura Sync)','1','B088VXTBWR',161.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(43,'GIGABYTE B460M DS3H V2 (LGA 1200/ Intel/ B460/ Micro-ATX/M.2/ SATA 6Gb/s/USB 3.2 Gen 1/ Motherboard)','1','B083GTCRHX',86.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(44,'MSI MPG Z390 Gaming Plus LGA1151 (Intel 8th and 9th Gen) M.2 USB 3.1 Gen 2 DDR4 HDMI DVI CFX ATX Z390 Gaming Motherboard','1','B07HMG1XP7',109.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(45,'GIGABYTE Z390 AORUS PRO Wi-Fi (Intel LGA1151/Z390/ATX/2xM.2 Thermal Guard/Onboard AC Wi-Fi/RGB Fusion/Gaming Motherboard)','1','B07HRZKPXM',209.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(46,'MSI Arsenal Gaming AMD Ryzen 2ND and 3rd Gen AM4 M.2 USB 3 DDR4 DVI HDMI Crossfire ATX Motherboard (B450 TOMAHAWK MAX II)','1','B07WF6ZQST',109.00,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(47,'MSI ProSeries AMD Ryzen 1st and 2ND Gen AM4 M.2 USB 3 DDR4 D-Sub DVI HDMI micro-ATX Motherboard (B450M PRO-M2 Max) (B450MPM2MAX)','1','B07XH4SK17',60.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(48,'GIGABYTE Z390 GAMING X (Intel LGA1151/Z390/ATX/2xM.2/Realtek ALC892/Intel LAN/HDMI/Gaming Motherboard)','1','B07HRZHJ6Z',129.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(49,'MSI MPG Z490 GAMING EDGE WIFI ATX Gaming Motherboard (10th Gen Intel Core, LGA 1200 Socket, DDR4, CF, Dual M.2 Slots, USB 3.2 Gen 2, Wi-Fi 6, DP/HDMI, Mystic Light RGB)','1','B0876J8436',199.95,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(50,'ASUS TUF Gaming B560M-PLUS WiFi LGA1200 (Intel11th/10th Gen) Micro ATX Gaming Motherboard (PCIe 4.0, 2X M.2 Slots,8+1 Power Stages, 2.5Gb LAN, WiFi 6, USB 3.2 Type-C, Thunderbolt 4 Support)','1','B08W6PSC52',149.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(51,'GIGABYTE Z390 UD, Intel LGA1151/Z390/ATX/M.2/Realtek ALC887/Realtek 8118 Gaming LAN/HDMI/Gaming Motherboard','1','B07HS59X7P',109.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17'),(52,'GIGABYTE GA-A320M-S2H (AMD Ryzen AM4/MicroATX/2xDDR4/HDMI/Realtek ALC887/3xPCIe/USB3.1 Gen 1/LAN/Motherboard)','1','B079NYQQJJ',59.99,1,'2021-09-02 16:49:17','2021-09-02 16:49:17');
/*!40000 ALTER TABLE `vendor_endpoints` ENABLE KEYS */;
UNLOCK TABLES;

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
  `interface` varchar(255) NOT NULL,
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
INSERT INTO `video_cards` VALUES (1,'EVGA GeForce RTX 3060 XC Gaming','EVGA','NVIDIA','GeForce RTX 3060',12,0,1882,'16',NULL),(2,'PowerColor Red Devil AMD Radeon RX 6700 XT Gaming Graphics Card','PowerColor','AMD','Radeon RX 6700 XT',12,2514,2633,'16',NULL),(3,'ZOTAC Gaming GeForce GTX 1660 Super 6GB GDDR6 192-bit Gaming Graphics Card','ZOTAC','NVIDIA','GeForce GTX 1660',6,0,1785,'8',NULL);
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

-- Dump completed on 2021-09-03 18:59:29
