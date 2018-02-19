-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: josulocal
-- ------------------------------------------------------
-- Server version	5.7.18-log

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
-- Table structure for table `contacttype`
--

DROP TABLE IF EXISTS `contacttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacttype` (
  `cTypeId` varchar(100) NOT NULL,
  `contactTypeInfo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacttype`
--

LOCK TABLES `contacttype` WRITE;
/*!40000 ALTER TABLE `contacttype` DISABLE KEYS */;
INSERT INTO `contacttype` VALUES ('CT1','firstName'),('CT10','state'),('CT11','country'),('CT12','dob'),('CT13','landline'),('CT14','fax'),('CT15','companyName'),('CT16','position'),('CT17','industry'),('CT18','companyWebsite'),('CT19','gender'),('CT2','lastName'),('CT20','branch'),('CT21','passoutYear'),('CT22','percentage'),('CT3','mobile'),('CT4','primaryEmail'),('CT5','secondaryEmail'),('CT6','collegeName'),('CT7','address'),('CT8','zipcode'),('CT9','city');
/*!40000 ALTER TABLE `contacttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `createdDate` date DEFAULT NULL,
  `courseId` varchar(10) NOT NULL,
  `courseName` varchar(10) DEFAULT NULL,
  `courseDescription` text,
  `courseDuration` varchar(10) DEFAULT NULL,
  `schedule` varchar(50) DEFAULT NULL,
  `collegeId` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`courseId`),
  KEY `collegeId` (`collegeId`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`collegeId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursestudent`
--

DROP TABLE IF EXISTS `coursestudent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coursestudent` (
  `studentId` varchar(100) DEFAULT NULL,
  `courseId` varchar(10) DEFAULT NULL,
  KEY `studentId` (`studentId`),
  KEY `courseId` (`courseId`),
  CONSTRAINT `coursestudent_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `user` (`uId`),
  CONSTRAINT `coursestudent_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `course` (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursestudent`
--

LOCK TABLES `coursestudent` WRITE;
/*!40000 ALTER TABLE `coursestudent` DISABLE KEYS */;
/*!40000 ALTER TABLE `coursestudent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobactivity`
--

DROP TABLE IF EXISTS `jobactivity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobactivity` (
  `activityId` int(11) NOT NULL AUTO_INCREMENT,
  `jobId` varchar(100) DEFAULT NULL,
  `studentId` varchar(100) DEFAULT NULL,
  `empId` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`activityId`),
  KEY `jobId` (`jobId`),
  KEY `studentId` (`studentId`),
  KEY `empId` (`empId`),
  CONSTRAINT `jobactivity_ibfk_1` FOREIGN KEY (`jobId`) REFERENCES `jobinfo` (`jobId`),
  CONSTRAINT `jobactivity_ibfk_2` FOREIGN KEY (`studentId`) REFERENCES `user` (`uId`),
  CONSTRAINT `jobactivity_ibfk_3` FOREIGN KEY (`empId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobactivity`
--

LOCK TABLES `jobactivity` WRITE;
/*!40000 ALTER TABLE `jobactivity` DISABLE KEYS */;
INSERT INTO `jobactivity` VALUES (1,'J31','U1','U0','Applied'),(2,'J31','U10','U0','Sent'),(3,'J31','U3','U0','Sent'),(4,'J31','U5','U0','Sent'),(5,'J31','U9','U0','Sent'),(6,'J32','U1','U0','Applied'),(7,'J32','U10','U0','Sent'),(8,'J32','U3','U0','Sent'),(9,'J32','U5','U0','Sent'),(10,'J32','U9','U0','Sent');
/*!40000 ALTER TABLE `jobactivity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobinfo`
--

DROP TABLE IF EXISTS `jobinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobinfo` (
  `jobId` varchar(100) NOT NULL,
  `jobTitle` varchar(255) DEFAULT NULL,
  `jobDesc` text,
  `empId` varchar(100) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `jobTypeId` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`jobId`),
  KEY `empId` (`empId`),
  KEY `jobTypeId` (`jobTypeId`),
  CONSTRAINT `jobinfo_ibfk_1` FOREIGN KEY (`empId`) REFERENCES `user` (`uId`),
  CONSTRAINT `jobinfo_ibfk_2` FOREIGN KEY (`jobTypeId`) REFERENCES `jobtype` (`jobTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobinfo`
--

LOCK TABLES `jobinfo` WRITE;
/*!40000 ALTER TABLE `jobinfo` DISABLE KEYS */;
INSERT INTO `jobinfo` VALUES ('J0','Mean stack developer','Minimum 2-4 years of experience and troubleshooting.','U0','AngularJS, NodeJS, MongoDB, HTML, CSS3','JT2'),('J1','Architech','10 years expereince','U0','data sciences, nodejs , angularjs','JT2'),('J10','iOs','iOS developer','U0','swift, c, c++','JT1'),('J11','Angular','1-2 years experience','U0','C, c++, Java, Javascript','JT2'),('J12','AngularJS','1 YEAR EXP','U0','jAVASCRIPT','JT2'),('J13','ASSSSSSSSSSSSSS','ASSSSSSSSSSSSSS','U0','ASSSSSSSSSSSSSS','JT2'),('J14','FFNHFHH','HJKJKHHK','U0','KJKHKH','JT2'),('J15','NHFHH','JHKKHKJHKJ','U0','H,KKKHK','JT2'),('J16','FVBVF','SDFS','U0','DSFS','JT2'),('J17','ZX','SDA','U0','SAD','JT2'),('J19','ASdsas','ASDAS','U0','aS','JT1'),('J2','Angular','Minimum 2-4 years of experience and troubleshooting.','U0','Angular, HTML, css, javascript, bootstrap','JT1'),('J20','SAD','ASD','U0','SAD','JT2'),('J21','SAD','ASD','U0','ASD','JT2'),('J22','asd','asd','U0','asd','JT1'),('J23','asdas','asdsa','U0','asdsa','JT1'),('J24','asdas','asdsa','U0','asdsa','JT1'),('J25','kjhgfdsdfghjkl;\'e','dfcgvhbjkml,','U0','sdfghjkl','JT1'),('J26','/.,mnbvcA','ASDXFGVHJNK','U0','SDFGCVHBNKL','JT1'),('J27',';LKJHGFD','QESDFGHBNM,./','U0','QSDFGHJKL;\'','JT1'),('J28','SDF','SDLK','U0','SDLKJ','JT1'),('J29','SAD','ASSD','U0','SAD','JT1'),('J3','Accounting','Minimum 2-4 years of experience and troubleshooting.','U0','accounts, tally','JT2'),('J30','SADSA','ASDASD','U0','SDAS','JT1'),('J31','asd','asdsa','U0','asdas','JT1'),('J32','AngularJS developer','Good communication skills, 2015, 2016, 2017 passouts are allowed.','U0','Javascript, OOPS, HTML, CSS','JT1'),('J4','HR','HR','U0','HR, managment','JT1'),('J5','Manager','Manager','U0','Manager, ','JT2'),('J6','UX Designer','2015 to 2017 passouts are eligible','U0','creativity, Photoshop, basics of html and css','JT2'),('J7','Fresher','2016, 2017, 2018 passouts are eligible','U0','C, Java, Data Structures, C++, Excellent communication skills.','JT2'),('J8','UI developer','Creativity UI designer','U0','HTML, css, bootstrap','JT1'),('J9','Designer','Photoshop designer','U0','photshop, illustrator','JT2');
/*!40000 ALTER TABLE `jobinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobtype`
--

DROP TABLE IF EXISTS `jobtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobtype` (
  `jobTypeId` varchar(10) NOT NULL,
  `jobTypeInfo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`jobTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobtype`
--

LOCK TABLES `jobtype` WRITE;
/*!40000 ALTER TABLE `jobtype` DISABLE KEYS */;
INSERT INTO `jobtype` VALUES ('JT1','Immediate'),('JT2','Pipeline');
/*!40000 ALTER TABLE `jobtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `date` double DEFAULT NULL,
  `uId` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `acToken` varchar(100) DEFAULT NULL,
  KEY `uId` (`uId`),
  CONSTRAINT `login_ibfk_1` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (NULL,'U0','$2a$10$K0ztQbgTAwmr.5o.eiGaw.wbA862zlzqIQX6C6ilC3O8hpq2EJql.',1,'NA41iMYrbl'),(1493788117255,'U1','$2a$10$Z4maa0Nkwy8UMsm.bYUV/O3e3ag5zeKyFY2pJlOMhumwIIYwcOPk.',1,'U3qeaYDAGQ'),(1493789358656,'U2','$2a$10$4sCRkzUy5rfbc7.EDiguzOOtYjr5Q5C7Bglok0kPkJfzCRLhlTqkO',1,'zY7y27nakZ'),(1493808087032,'U3','$2a$10$L7eLigAw2dBKAdRVEklH3eCtJUclApFu8D.VSkE2GtqGTnCPcjv86',1,'udWdTBnVem'),(1493810213437,'U4','$2a$10$OwA.tYvLtbUqPLqG38W9.eUYoO7B3ps1oULYreT6iYArNZ2/bWd72',1,'sdWbXPfdte'),(1493817714888,'U5','$2a$10$MobqPTq.cmaigbe/hWsHd.9NW24nBqHfJJjUC8nM8pohqAWY8ewj2',1,'XY53k7Fe0V'),(1493883660093,'U6','$2a$10$xbh5qY12jiBXXqxRI9r03e3H9UvZ6gmgg7gpZW7SiNg8q4xvBlT4i',1,'i7RF3ukl6h'),(1493984738963,'U7','$2a$10$H89t15GE0zILq7eRhMom5eRsdGZBt4LV5YtuYOpqoPNojwODzYk1u',1,'cnYZeg8kLw'),(1493993766466,'U8','$2a$10$mtNXerIzwzZI0B0j2YB/oeEx1t4LGPL16JUaV0Szv6eLFO7ob9icG',1,'I4Z4uZCove'),(1494053207109,'U9','$2a$10$wBUZLaImrDUp6eTO8DawOegRPQRubf8CaYS0Itc35vh3QjuklrNRC',1,'b5LFxfOE59'),(NULL,'U10','$2a$10$kL8yWII/3vFdbNRCEs55zOqwLoTpnHHNJMrdirSGnN38GcFWdDIna',1,'MwbsUWNM9X'),(NULL,'U11','$2a$10$9Gr1U4rx8Lq19XC2aa5eK.0j6eg689Dwjh6zgXCt82X2D1lEDrHCK',1,'nkEi9qjplc'),(1494764861330,'U10','$2a$10$kL8yWII/3vFdbNRCEs55zOqwLoTpnHHNJMrdirSGnN38GcFWdDIna',0,'MwbsUWNM9X'),(1494764911521,'U10','$2a$10$kL8yWII/3vFdbNRCEs55zOqwLoTpnHHNJMrdirSGnN38GcFWdDIna',0,'MwbsUWNM9X'),(1494765431099,'U10','$2a$10$kL8yWII/3vFdbNRCEs55zOqwLoTpnHHNJMrdirSGnN38GcFWdDIna',0,'MwbsUWNM9X'),(1494858355702,'U10','$2a$10$kL8yWII/3vFdbNRCEs55zOqwLoTpnHHNJMrdirSGnN38GcFWdDIna',1,'MwbsUWNM9X');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pipelinejobactivity`
--

DROP TABLE IF EXISTS `pipelinejobactivity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pipelinejobactivity` (
  `pipelineJobId` varchar(10) NOT NULL,
  `jobId` varchar(100) DEFAULT NULL,
  `empId` varchar(100) DEFAULT NULL,
  `adminId` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pipelineJobId`),
  KEY `jobId` (`jobId`),
  KEY `empId` (`empId`),
  KEY `adminId` (`adminId`),
  CONSTRAINT `pipelinejobactivity_ibfk_1` FOREIGN KEY (`jobId`) REFERENCES `jobinfo` (`jobId`),
  CONSTRAINT `pipelinejobactivity_ibfk_2` FOREIGN KEY (`empId`) REFERENCES `user` (`uId`),
  CONSTRAINT `pipelinejobactivity_ibfk_3` FOREIGN KEY (`adminId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pipelinejobactivity`
--

LOCK TABLES `pipelinejobactivity` WRITE;
/*!40000 ALTER TABLE `pipelinejobactivity` DISABLE KEYS */;
INSERT INTO `pipelinejobactivity` VALUES ('P0','J1','U0','U11'),('P1','J6','U0','U11'),('P10','J20','U0','U11'),('P11','J0','U0','U11'),('P2','J7','U0','U11'),('P3','J11','U0','U11'),('P4','J12','U0','U11'),('P5','J13','U0','U11'),('P6','J14','U0','U11'),('P7','J15','U0','U11'),('P8','J16','U0','U11'),('P9','J17','U0','U11');
/*!40000 ALTER TABLE `pipelinejobactivity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profileimage`
--

DROP TABLE IF EXISTS `profileimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profileimage` (
  `uId` varchar(100) DEFAULT NULL,
  `profileImage` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profileimage`
--

LOCK TABLES `profileimage` WRITE;
/*!40000 ALTER TABLE `profileimage` DISABLE KEYS */;
INSERT INTO `profileimage` VALUES ('U0','profilePic-student'),('U10','profilePic-student'),('U3','profilePic-student'),('U5','profilePic-student'),('U9','profilePic-student'),('U2','profilePic-college'),('U6','profilePic-college'),('U8','profilePic-college'),('U0','designer'),('U4','designer'),('U7','designer'),('U11','designer');
/*!40000 ALTER TABLE `profileimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transferjob`
--

DROP TABLE IF EXISTS `transferjob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transferjob` (
  `transferId` int(11) NOT NULL AUTO_INCREMENT,
  `collegeId` varchar(100) DEFAULT NULL,
  `pipelineJobId` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`transferId`),
  KEY `collegeId` (`collegeId`),
  KEY `pipelineJobId` (`pipelineJobId`),
  CONSTRAINT `transferjob_ibfk_1` FOREIGN KEY (`collegeId`) REFERENCES `user` (`uId`),
  CONSTRAINT `transferjob_ibfk_2` FOREIGN KEY (`pipelineJobId`) REFERENCES `pipelinejobactivity` (`pipelineJobId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transferjob`
--

LOCK TABLES `transferjob` WRITE;
/*!40000 ALTER TABLE `transferjob` DISABLE KEYS */;
INSERT INTO `transferjob` VALUES (1,'U2','P11'),(2,'U8','P11'),(3,'U2','P0'),(4,'U8','P0');
/*!40000 ALTER TABLE `transferjob` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uId` varchar(100) NOT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `typeId` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uId`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `usertype` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('U0','naveen23','UT3'),('U1','Tharun05','UT1'),('U10','hari2208','UT1'),('U11','admin','UT4'),('U2','IITM','UT2'),('U3','mdmujaheduddin','UT1'),('U4','Sharon','UT3'),('U5','surabhi','UT1'),('U6','krishnakanth','UT2'),('U7','sadas','UT3'),('U8','sanjeevini','UT2'),('U9','smathe','UT1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userauth`
--

DROP TABLE IF EXISTS `userauth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userauth` (
  `uId` varchar(100) DEFAULT NULL,
  `authToken` varchar(1000) DEFAULT NULL,
  `date` double DEFAULT NULL,
  KEY `uId` (`uId`),
  CONSTRAINT `userauth_ibfk_1` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userauth`
--

LOCK TABLES `userauth` WRITE;
/*!40000 ALTER TABLE `userauth` DISABLE KEYS */;
INSERT INTO `userauth` VALUES ('U1','zbtJ8QG5YnUcLDN2oUkQ',1494831973447),('U4','GjZDy4mODKjcAh8Zu83k',1494832807973),('U4','gFvC7jgGZV5V73Xl0nFH',1494832807994),('U4','bwCLDwdLKKUubuEHgtjY',1494833662564),('U4','1wETYRUE2J3aSSBjCmKn',1494834453476),('U1','TzBgUE0UIVb9oZEjS77o',1494834697510),('U1','CxF6Y0AEcNMVD7dGbMJb',1494837818323),('U1','qICBBEyTlgVrA9vW4Oba',1494838979550),('U11','L81sTNSPLhLy6cnZAWLR',1494842485209),('U1','VDBlILJZ5hahIzF6K8zr',1494842610266),('U11','s3OPdbvICYxZTOLhV2gt',1494842635289),('U11','1HnBgJtnuvYtq4B7SwwB',1494842660156),('U11','2QPXQgg9ptp1cbEpOaR7',1494842692606),('U1','6kRizwviACexPDCONsRP',1494842731967),('U1','bVfFFUeMx46LOrcjZ7IG',1494842741992),('U11','gSklqF3ciGTLMNZUkwUS',1494842760766),('U11','HNer5C7YzMCORIiBKvGQ',1494842808442),('U1','ONpIUsQffviTuIrT9HA4',1494844591420),('U1','5fpIavKMvlnrsiWjsy7K',1494847542574),('U0','q51GUqOHWI2sDfhiTOqN',1494848133474),('U1','zIR5pBSXwwLSLWNgfR0j',1494848228378),('U1','DCh5DEZaiaG3H7V1Kqu8',1494848245007),('U0','6Kb9x0530zR3QfJ1I0ez',1494848296019),('U0','RCemwUAQZ4QIeE0KdCpH',1494848326277),('U0','hQLJgcyPWNCBL2hlAxn9',1494848396698),('U1','JMGkxKlFdpplnAMFa9Z0',1494848623998),('U11','gpyMRbhP0mDsrhWON4Pl',1494851010902),('U1','7yAccxqKnmfffiGpyXmq',1494854190919),('U0','ADenlouO1TcFKo3msJkg',1494855345639),('U0','pkRG9wmkSSgshjnhExuO',1494855537143),('U11','lbZEdH2x2AcJQ1R9rlHu',1494855708501),('U11','OVoDfRlELTx87WDVLJOc',1494856250371),('U11','oZmzTQoChtufXkXhT4IO',1494856250994),('U11','C2qDrlsRT4jxNxi4HkSr',1494856251426),('U11','ZRkrily4wVnmJ8V5umHC',1494856251826),('U11','gbbpOniGdIciHrwF7W95',1494856252227),('U11','FEQtd4yTVbB1EBDgEo2H',1494856252675),('U11','5R0KBPnZDDyjFrJJnalq',1494856253093),('U11','2hJIywD0qcqaKxvgFAC1',1494856443387),('U0','vB5wXmzgR899hxenONCb',1494857135209),('U1','E9Xdm3yyo00mzD33DIA1',1494858728976),('U11','cS4xymqzi3gH5jj6YKfL',1494858801358),('U0','mQzDAzaTkBrEGqj5QXur',1494858965228),('U10','11dqBdydom9v7iFnhBA6',1494859828909),('U11','J5RFIAZplGB2DsiYNGTJ',1494860094063),('U0','lbHnkou0DZgfkoHU1hUs',1494911554110),('U0','AAx1YpnJX9A2MSo2devN',1494911554455),('U11','DDdTKyI4n9aF0cG73c6L',1494913164105),('U0','bG6OGNfGE4jpElCTm6xh',1494913860518),('U1','NXzpBMS54gqLtmvCq306',1494915493718),('U1','24BHqa5N4O0KdWInJblr',1494915527878),('U1','HATvxrBbwzXsYDAdg4aI',1494915629090),('U1','6XQ62giQbZ8IJ1YqXA01',1494915709431),('U1','S6w4BF9PT9UXoYH3Nuue',1494916206657),('U1','FEz0bJpQjTs3ho1T05G7',1494916284585),('U1','gNuWvV7rBpfd5bhlifpd',1494916475325),('U1','W6LE5upzwMT2qW3vq4Ny',1494916566036),('U1','cwbQEX7xQBFkiNNBELsW',1494916615362),('U1','zmyFEs0yX8qTCzgvD6pQ',1494916678253),('U1','04Z2f9S5wK5NIEqgSajB',1494916835082),('U1','6XQwxkXA8CW2pBe8jY2j',1494916848473),('U1','CVdRZnYCDAGVTnRyi8s0',1494917086710),('U1','RyyaPY4pmCn2H2FF5ROI',1494917197127),('U1','pas9yQK71r5zxeQmvUP2',1494926973067),('U1','T3V4PTu0m65nQfmMp7Xq',1494927711415),('U1','gaRG7DwkYzj07QKGhoRs',1494927711646),('U1','a9gRJ1AI6csugWiBZvNl',1494929327776),('U1','aPnJuQZtk2zNVxW8PHN2',1494930955188),('U0','1l12icKKFkJfnnyaajxY',1494937700473),('U0','1my0g03tOXqLXQKJM8Iu',1494938193564),('U0','ui2n3aJXXigPhTg8xsoE',1494938670374);
/*!40000 ALTER TABLE `userauth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercontact`
--

DROP TABLE IF EXISTS `usercontact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usercontact` (
  `contactId` int(11) NOT NULL AUTO_INCREMENT,
  `cTypeId` varchar(100) DEFAULT NULL,
  `uId` varchar(100) DEFAULT NULL,
  `contactInfo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`contactId`),
  KEY `cTypeId` (`cTypeId`),
  KEY `uId` (`uId`),
  CONSTRAINT `usercontact_ibfk_1` FOREIGN KEY (`cTypeId`) REFERENCES `contacttype` (`cTypeId`),
  CONSTRAINT `usercontact_ibfk_2` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercontact`
--

LOCK TABLES `usercontact` WRITE;
/*!40000 ALTER TABLE `usercontact` DISABLE KEYS */;
INSERT INTO `usercontact` VALUES (1,'CT1','U0','Naveen'),(2,'CT2','U0','Vedala'),(3,'CT4','U0','vedala.naveen23@gmail.com'),(4,'CT3','U0','9703522523'),(5,'CT14','U0','4343432'),(6,'CT7','U0','KhajaGuda'),(7,'CT8','U0','50008'),(8,'CT9','U0','Hyderbad'),(9,'CT10','U0','Telangana'),(10,'CT11','U0','India'),(11,'CT16','U0','Techincal Manager'),(12,'CT17','U0','IT'),(13,'CT15','U0','Digital Lync'),(14,'CT18','U0','http://digital-lync.com'),(15,'CT1','U1','tharun'),(16,'CT2','U1','dillikar'),(17,'CT4','U1','tharundillikar@gmail.com'),(18,'CT3','U1','9000900317'),(19,'CT12','U1','05081995'),(20,'CT7','U1','chevellla'),(21,'CT8','U1','500008'),(22,'CT9','U1','Hyderabad'),(23,'CT10','U1','Telangana'),(24,'CT11','U1','India'),(25,'CT6','U1','IITM'),(26,'CT1','U2','IIT'),(27,'CT2','U2','Madras'),(28,'CT4','U2','nvedala@digital-lync.com'),(29,'CT6','U2','IITM'),(30,'CT7','U2','Madras'),(31,'CT8','U2','300021'),(32,'CT9','U2','Chennai'),(33,'CT10','U2','Tamilnadu'),(34,'CT11','U2','India'),(35,'CT3','U2','7896543210'),(36,'CT13','U2','0802435462'),(37,'CT1','U3','mohammmed'),(38,'CT2','U3','mujahed uddin'),(39,'CT4','U3','mdmujaheduddin1990@gmail.com'),(40,'CT3','U3','1234567891'),(41,'CT12','U3','14-07-1994'),(42,'CT7','U3','Ibrahimpatnam'),(43,'CT8','U3','5000001'),(44,'CT9','U3','hyderabad'),(45,'CT10','U3','TS'),(46,'CT11','U3','india'),(47,'CT6','U3','sri indu college of Engg and  tech'),(48,'CT1','U4','Sharon'),(49,'CT2','U4','Sofia'),(50,'CT4','U4','vedala.naveen23@gmail.com'),(51,'CT3','U4','9032100906'),(52,'CT14','U4','040'),(53,'CT7','U4','Banjara Hills Road NO 12'),(54,'CT8','U4','500034'),(55,'CT9','U4','Hyderabad'),(56,'CT10','U4','Telangana'),(57,'CT11','U4','India'),(58,'CT16','U4','HR'),(59,'CT17','U4','Finance'),(60,'CT15','U4','Royal Bank of Spain'),(61,'CT18','U4','www.rbs@com'),(62,'CT1','U5','Nihanth'),(63,'CT2','U5','surabhi'),(64,'CT4','U5','nihanth.digischool@gmail.com'),(65,'CT3','U5','9090909090'),(66,'CT12','U5','22081995'),(67,'CT7','U5','IITH Main Road, Near NH-65, Sangareddy, Khandi, Telangana 502285'),(68,'CT8','U5','122342'),(69,'CT9','U5','Hyderabad'),(70,'CT10','U5','Telangana'),(71,'CT11','U5','India'),(72,'CT6','U5','IIT hyderabad'),(73,'CT1','U6','krishnkanth'),(74,'CT2','U6','cheedalla'),(75,'CT4','U6','krishnakanth.cheedalla@gmail.com'),(76,'CT6','U6','holymary institute of technology and science'),(77,'CT7','U6','ghatkesar'),(78,'CT8','U6','50049'),(79,'CT9','U6','hyderabad'),(80,'CT10','U6','telengana'),(81,'CT11','U6','india'),(82,'CT3','U6','9493967663'),(83,'CT13','U6','040242525'),(84,'CT1','U7','sdas'),(85,'CT2','U7','sdasd'),(86,'CT4','U7','tharundillikar@gmail.com'),(87,'CT3','U7','1212121212'),(88,'CT14','U7','1212'),(89,'CT7','U7','aasdsad'),(90,'CT8','U7','12312'),(91,'CT9','U7','assd'),(92,'CT10','U7','sadasdsa'),(93,'CT11','U7','assdas'),(94,'CT16','U7','sadad'),(95,'CT17','U7','asd'),(96,'CT15','U7','asdd'),(97,'CT18','U7','asddsa'),(98,'CT1','U8','sanjeevini'),(99,'CT2','U8','rao'),(100,'CT4','U8','sanju.sanjeevini@gmail.com'),(101,'CT6','U8','JNTU hyderabad'),(102,'CT7','U8','L.B nagar'),(103,'CT8','U8','500008'),(104,'CT9','U8','Hyderbad'),(105,'CT10','U8','Telangana'),(106,'CT11','U8','India'),(107,'CT3','U8','9022023311'),(108,'CT13','U8','9090990902'),(109,'CT1','U9','sahithi'),(110,'CT2','U9','mathe'),(111,'CT4','U9','smathe@digital-lync.com'),(112,'CT3','U9','9494946295'),(113,'CT12','U9','10/07/2017'),(114,'CT7','U9','vivekananda nagar'),(115,'CT8','U9','500072'),(116,'CT9','U9','hyderabad'),(117,'CT10','U9','telangana'),(118,'CT11','U9','India'),(119,'CT6','U9','Gitam university'),(120,'CT1','U10','hari'),(121,'CT2','U10','poorna'),(122,'CT4','U10','hkalahasti@digital-lync.com'),(123,'CT3','U10','9030229478'),(124,'CT12','U10','22081196'),(125,'CT7','U10','rjy'),(126,'CT8','U10','53301'),(127,'CT9','U10','hyderabad'),(128,'CT10','U10','ts'),(129,'CT11','U10','india'),(130,'CT6','U10','giet'),(131,'CT20','U10','ECE'),(132,'CT21','U10','2016'),(133,'CT20','U1','ECE'),(134,'CT21','U1','2015'),(135,'CT20','U3','CSE'),(136,'CT21','U3','2017'),(137,'CT20','U5','ECE'),(138,'CT21','U5','2014'),(140,'CT20','U9','CSE'),(141,'CT21','U9','2012'),(142,'CT1','U11','Lync'),(143,'CT2','U11','Admin'),(144,'CT3','U11','9009009000'),(145,'CT4','U11','vsurabhi@digital-lync.com'),(146,'CT8','U11','500008'),(147,'CT9','U11','Hyderabad'),(148,'CT10','U11','Telangana'),(149,'CT11','U11','India'),(150,'CT1','U10','as'),(151,'CT2','U10','saa'),(152,'CT4','U10','assd@gmail.com'),(153,'CT3','U10','1212121212'),(154,'CT12','U10','asd'),(155,'CT7','U10','assd'),(156,'CT8','U10','1223'),(157,'CT9','U10','asd'),(158,'CT10','U10','asd'),(159,'CT11','U10','asd'),(160,'CT20','U10','EEE'),(161,'CT21','U10','1'),(162,'CT6','U10','1'),(163,'CT1','U10','asd'),(164,'CT2','U10','asd'),(165,'CT4','U10','asdas@gmail.com'),(166,'CT3','U10','1221121221'),(167,'CT12','U10','sad'),(168,'CT7','U10','asd'),(169,'CT8','U10','123'),(170,'CT9','U10','sd'),(171,'CT10','U10','assd'),(172,'CT11','U10','asd'),(173,'CT20','U10','ECE'),(174,'CT21','U10','2'),(175,'CT6','U10','3'),(176,'CT1','U10','asd'),(177,'CT2','U10','asd'),(178,'CT4','U10','asd@gmail.com'),(179,'CT3','U10','2121211221'),(180,'CT12','U10','asd'),(181,'CT7','U10','asdd'),(182,'CT8','U10','123'),(183,'CT9','U10','aads'),(184,'CT10','U10','assdd'),(185,'CT11','U10','assd'),(186,'CT20','U10','ECE'),(187,'CT21','U10','2010'),(188,'CT6','U10','BVC Engineering College'),(189,'CT1','U10','Rajesh'),(190,'CT2','U10','Bonam'),(191,'CT4','U10','haripoornakumar@gmail.com'),(192,'CT6','U10','BVC Engineering college'),(193,'CT7','U10','Amalapuram'),(194,'CT8','U10','4234321'),(195,'CT9','U10','Amalapuram'),(196,'CT10','U10','Andhra pradesh'),(197,'CT11','U10','India'),(198,'CT3','U10','0990990233'),(199,'CT13','U10','4543876');
/*!40000 ALTER TABLE `usercontact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usertype` (
  `typeId` varchar(10) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES ('UT1','Student'),('UT2','College'),('UT3','Employer'),('UT4','Admin');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-16 18:40:44
