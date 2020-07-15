-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 15, 2020 at 10:22 AM
-- Server version: 5.7.26
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expanse_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `category` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`) VALUES
(9, 'Books'),
(13, 'rent'),
(11, 'Computer'),
(12, 'salary');

-- --------------------------------------------------------

--
-- Table structure for table `expanse_master`
--

DROP TABLE IF EXISTS `expanse_master`;
CREATE TABLE IF NOT EXISTS `expanse_master` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `uid` int(5) NOT NULL,
  `E_name` varchar(30) NOT NULL,
  `category` varchar(25) NOT NULL,
  `desc` varchar(150) NOT NULL,
  `amount` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expanse_master`
--

INSERT INTO `expanse_master` (`id`, `uid`, `E_name`, `category`, `desc`, `amount`) VALUES
(2, 70, 'electricity bill', 'rent', 'house Bill', 7000);

-- --------------------------------------------------------

--
-- Table structure for table `income_master`
--

DROP TABLE IF EXISTS `income_master`;
CREATE TABLE IF NOT EXISTS `income_master` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `uid` int(4) NOT NULL,
  `i_name` varchar(30) NOT NULL,
  `category` varchar(25) NOT NULL,
  `desc` varchar(150) NOT NULL,
  `amount` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `income_master`
--

INSERT INTO `income_master` (`id`, `uid`, `i_name`, `category`, `desc`, `amount`) VALUES
(1, 1, 'salary', 'regular', 'october month salary', 70000),
(8, 67, 'march salary', 'salary', 'monthly salary', 50000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `email`) VALUES
(65, 'mitesh', 'baraiy@gmail.com'),
(70, 'harshbhai', 'harshpandya@gmail.com'),
(67, 'shubham', 'shubham@gmail.com'),
(69, 'harshjit', 'acharyaharshjit@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
