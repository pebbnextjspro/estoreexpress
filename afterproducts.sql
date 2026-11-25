-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2026 at 07:04 AM
-- Server version: 10.11.16-MariaDB
-- PHP Version: 8.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomm`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `CategoryName` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `CategoryImgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `CategoryColor` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `CategoryName`, `CategoryImgUrl`, `CategoryColor`) VALUES
(7, 'Head Phone', '1794276407250-349748080.png', ''),
(9, 'Ear Buds', '1794396907054-546790051.png', 'null'),
(38, 'Power Bank', '1794420108431-418131895.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `ecommproducts`
--

CREATE TABLE `ecommproducts` (
  `id` int(11) NOT NULL,
  `ProductImages` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ecommproducts`
--

INSERT INTO `ecommproducts` (`id`, `ProductImages`) VALUES
(1, 'https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/p69aygwyygmznpco7xnj.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/qlnlhbmhrlu7b81wstjz.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808464/m9el9sjt0vuver4bnoyj.webp'),
(2, 'https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/p69aygwyygmznpco7xnj.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/qlnlhbmhrlu7b81wstjz.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808464/m9el9sjt0vuver4bnoyj.webp'),
(3, 'https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/p69aygwyygmznpco7xnj.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808463/qlnlhbmhrlu7b81wstjz.png,https://res.cloudinary.com/dvqmtz83r/image/upload/v1751808464/m9el9sjt0vuver4bnoyj.webp');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `ProductName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ProductDescription` longtext DEFAULT NULL,
  `ProductCategory` int(11) DEFAULT NULL,
  `ProductSubCategory` int(11) DEFAULT NULL,
  `ProductBrand` int(11) DEFAULT NULL,
  `ProductNewPrice` double DEFAULT NULL,
  `ProductOldPrice` double DEFAULT NULL,
  `ProductsInStock` double DEFAULT NULL,
  `ProductRating` double DEFAULT NULL,
  `ProductColor` varchar(255) DEFAULT NULL,
  `ProductImages1` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ProductImages2` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ProductImages3` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ProductImages4` longtext DEFAULT NULL,
  `IsFeatured` tinyint(1) DEFAULT NULL,
  `ProductWeight` decimal(10,2) DEFAULT NULL,
  `ProductShipCharges` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `ProductName`, `ProductDescription`, `ProductCategory`, `ProductSubCategory`, `ProductBrand`, `ProductNewPrice`, `ProductOldPrice`, `ProductsInStock`, `ProductRating`, `ProductColor`, `ProductImages1`, `ProductImages2`, `ProductImages3`, `ProductImages4`, `IsFeatured`, `ProductWeight`, `ProductShipCharges`) VALUES
(25, 'Ear Buds Black', '<h2 class=\"specs-title\" style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; font-size: 36px; font-weight: bold; margin-bottom: 20px; margin-block-start: 0px !important; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Features of Luna:</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">1.39” HD Display<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">IP67 Water Resistance<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Weather Forecasting<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">BT Calling<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Smart Notifications<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Health Suites<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Workout Modes</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications of Luna:</h2><ul style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Display</strong>: Full-color touch screen</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Customization</strong>: Multiple customizable watch faces</li></ul><br>', 9, 2019, 28, 8799, 9000, 100, 5, 'black', '1794310112606-152175974.png', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum voluptates doloremque unde culpa dolor excepturi quod. At est deleniti tempora recusandae sequi illum aperiam? Voluptatum mollitia enim rem sit?', NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 100.00, 100.00),
(26, 'Storm Headphones', '<h2 class=\"specs-title\" style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; font-size: 36px; font-weight: bold; margin-bottom: 20px; margin-block-start: 0px !important; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Features of Luna:</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">1.39” HD Display<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">IP67 Water Resistance<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Weather Forecasting<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">BT Calling<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Smart Notifications<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Health Suites<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Workout Modes</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications of Luna:</h2><ul style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Display</strong>: Full-color touch screen</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Customization</strong>: Multiple customizable watch faces</li></ul>', 7, 2014, 28, 9000, 9800, 100, 3, 'white', '1794310134781-347412579.png', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum voluptates doloremque unde culpa dolor excepturi quod. At est deleniti tempora recusandae sequi illum aperiam? Voluptatum mollitia enim rem sit?', NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 100.00, 100.00),
(27, 'Fuja Head Phone', '<h2 class=\"specs-title\" style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; font-size: 36px; font-weight: bold; margin-bottom: 20px; margin-block-start: 0px !important; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Features of Luna:</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">1.39” HD Display<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">IP67 Water Resistance<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Weather Forecasting<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">BT Calling<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Smart Notifications<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Health Suites<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Workout Modes</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications of Luna:</h2><ul style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Display</strong>: Full-color touch screen</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Customization</strong>: Multiple customizable watch faces</li></ul>', 7, 2014, 28, 8000, 9000, 100, 5, 'navy', '1794310160990-131877109.webp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum voluptates doloremque unde culpa dolor excepturi quod. At est deleniti tempora recusandae sequi illum aperiam? Voluptatum mollitia enim rem sit?', NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 100.00, 100.00),
(28, 'Sigma Head Phone', '<h2 class=\"specs-title\" style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; font-size: 36px; font-weight: bold; margin-bottom: 20px; margin-block-start: 0px !important; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Features of Luna:</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">1.39” HD Display<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">IP67 Water Resistance<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Weather Forecasting<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">BT Calling<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Smart Notifications<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Health Suites<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Workout Modes</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications of Luna:</h2><ul style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Display</strong>: Full-color touch screen</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Customization</strong>: Multiple customizable watch faces</li></ul>', 7, 2014, 28, 6000, 8000, 100, 5, 'tomato', '1794310182798-270014672.png', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum voluptates doloremque unde culpa dolor excepturi quod. At est deleniti tempora recusandae sequi illum aperiam? Voluptatum mollitia enim rem sit?', NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 100.00, 100.00),
(29, 'SigmaN Headphones', '<h2 class=\"specs-title\" style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; font-size: 36px; font-weight: bold; margin-bottom: 20px; margin-block-start: 0px !important; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; margin-block-start: 0px !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Features of Luna:</h2><p style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">1.39” HD Display<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">IP67 Water Resistance<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Weather Forecasting<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">BT Calling<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Smart Notifications<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Active Health Suites<br style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Workout Modes</p><h2 style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Specifications of Luna:</h2><ul style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important; color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Display</strong>: Full-color touch screen</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\"><strong style=\"-webkit-font-smoothing: antialiased; box-sizing: border-box !important;\">Customization</strong>: Multiple customizable watch faces</li></ul>', 7, 2014, 28, 7000, 8000, 100, 4, 'peru', '1794310250761-564995935.png', NULL, NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 100.00, 100.00),
(30, 'Light Power Bank', '<h2 class=\"specs-title\" style=\"box-sizing: border-box !important; margin: 0px 0px 20px; padding: 0px; border: 0px solid; font-size: 36px; font-weight: bold; font-family: Inter, sans-serif; letter-spacing: normal; line-height: 1.2; color: rgb(51, 51, 51); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; margin-block-start: 0px !important;\">Specifications</h2><p style=\"box-sizing: border-box !important; margin: 0px 0px 1rem; padding: 0px; border: 0px solid; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; font-size: 20px; color: rgb(51, 51, 51); font-family: Inter, sans-serif; background-color: rgb(255, 255, 255); margin-block-start: 0px !important;\">Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p><p style=\"box-sizing: border-box !important; margin: 0px 0px 1rem; padding: 0px; border: 0px solid; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; font-family: Inter, sans-serif; font-size: 15px; background-color: rgb(255, 255, 255); margin-block-start: 0px !important;\">Switch towards infinite possibilities with the Luna Smartwatch, styled through a cosmic full metal body with a 1.39” HD Display and IP67 Water Resistance. With a fully functioning AI Assistant, Luna keeps you connected at every moment. Strap into the future of smartwatches with Active Weather Forecasting, BT Calling, and sleek strap designs.</p><h2 style=\"box-sizing: border-box !important; margin: 0px 0px 0.5rem; padding: 0px; border: 0px solid; font-size: 30px !important; font-weight: 600; font-family: Inter, sans-serif; letter-spacing: normal; line-height: 1.2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; background-color: rgb(255, 255, 255);\">Features of Luna:</h2><p style=\"box-sizing: border-box !important; margin: 0px 0px 1rem; padding: 0px; border: 0px solid; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; font-family: Inter, sans-serif; font-size: 15px; background-color: rgb(255, 255, 255);\">1.39” HD Display<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">IP67 Water Resistance<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">Active Weather Forecasting<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">BT Calling<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">Smart Notifications<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">Active Health Suites<br style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\">Workout Modes</p><h2 style=\"box-sizing: border-box !important; margin: 0px 0px 0.5rem; padding: 0px; border: 0px solid; font-size: 30px !important; font-weight: 600; font-family: Inter, sans-serif; letter-spacing: normal; line-height: 1.2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; background-color: rgb(255, 255, 255);\">Specifications of Luna:</h2><ul style=\"box-sizing: border-box !important; margin: 0px 0px 1rem; padding: 0px 0px 0px 2rem; border: 0px solid; list-style: none; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-font-smoothing: antialiased; font-family: Inter, sans-serif; font-size: 15px; background-color: rgb(255, 255, 255);\"><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Display</strong>: Full-color touch screen</li><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Health Tracking</strong>: Heart rate monitor, sleep analysis</li><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Activity Tracking</strong>: Steps, calories, various exercise modes</li><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Connectivity</strong>: Smart notifications for calls, texts, and social media</li><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Battery Life</strong>: Long-lasting, multi-day battery life on a single charge</li><li style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; -webkit-font-smoothing: antialiased;\"><strong style=\"box-sizing: border-box !important; margin: 0px; padding: 0px; border: 0px solid; font-weight: bolder; -webkit-font-smoothing: antialiased;\">Customization</strong>: Multiple customizable watch faces</li></ul><br class=\"Apple-interchange-newline\">', 38, 2028, 28, 7800, 9999, 111, 5, 'white', '1794420580066-589041389.png', 'data no', NULL, '[\"1794310112606-152175974.png\",\"1794310112606-152175974.png\"]', 1, 111.00, 100.00);

-- --------------------------------------------------------

--
-- Table structure for table `tblbanner`
--

CREATE TABLE `tblbanner` (
  `BannerId` int(11) NOT NULL,
  `Heading1` varchar(255) DEFAULT NULL,
  `Heading2` varchar(255) DEFAULT NULL,
  `Heading3` varchar(255) DEFAULT NULL,
  `NewPrice` int(11) DEFAULT NULL,
  `OldPrice` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `ShortDesc` longtext DEFAULT NULL,
  `BannerCategory` varchar(255) DEFAULT NULL,
  `Likes` int(11) DEFAULT NULL,
  `DisLikes` int(11) DEFAULT NULL,
  `BannerImage` varchar(255) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblbanner`
--

INSERT INTO `tblbanner` (`BannerId`, `Heading1`, `Heading2`, `Heading3`, `NewPrice`, `OldPrice`, `Rating`, `ShortDesc`, `BannerCategory`, `Likes`, `DisLikes`, `BannerImage`, `ProductId`) VALUES
(47, '#1 Our Best Product', 'Ear Buds', 'doloremque amet dicta unde ipsam quidem sed', 8799, 9000, 5, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse soluta natus enim. Voluptas cumque,\r\n     officiis impedit deleniti animi natus, doloremque amet dicta unde ipsam quidem sed eligendi dolor neque?', '', 5, 2, '1794039225255-334408071.png', 25),
(48, '#1 Our Best Product', 'Storm Headphones', 'doloremque amet dicta unde ipsam quidem sed', 9000, 9800, 3, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse soluta natus enim. Voluptas cumque,\r\n     officiis impedit deleniti animi natus, doloremque amet dicta unde ipsam quidem sed eligendi dolor neque?', '', 5, 2, '1794391506561-357043680.png', 26);

-- --------------------------------------------------------

--
-- Table structure for table `tblbrands`
--

CREATE TABLE `tblbrands` (
  `BrandId` int(11) NOT NULL,
  `BrandName` varchar(255) DEFAULT NULL,
  `BrandImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblbrands`
--

INSERT INTO `tblbrands` (`BrandId`, `BrandName`, `BrandImage`) VALUES
(2, 'Milk Pack Brand New', '1767698249243-869933096.jpeg'),
(3, 'Pepsi', '1767338275471-66124384.jpg'),
(7, 'Vegis', '1767338275471-66124384.jpg'),
(15, 'Coca Cola New', '1767696222347-424873366.png'),
(16, 'www', '1767338275471-66124384.jpg'),
(26, 'Mega Rolls', '1767696348662-16874284.jpg'),
(27, 'Nutricia', '1767338275471-66124384.jpg'),
(28, 'Vivmas', '1767338275471-66124384.jpg'),
(29, 'Layes', '1767696262830-657427862.webp'),
(31, 'Johnsons', '1767690713039-375764809.jpg'),
(32, 'New Brand', '1767692784098-609108391.jpg'),
(34, 'Pepsi', '1767694150325-450222833.png'),
(36, 'DELL Laptop', 'delllogo.png');

-- --------------------------------------------------------

--
-- Table structure for table `tblcart`
--

CREATE TABLE `tblcart` (
  `CartId` int(11) NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `ProductImages2` varchar(255) DEFAULT NULL,
  `ProductColor` varchar(255) DEFAULT NULL,
  `ProductNewPrice` float DEFAULT NULL,
  `ProductOldPrice` float DEFAULT NULL,
  `ProductQty` int(11) DEFAULT NULL,
  `UserId` varchar(255) DEFAULT NULL,
  `InvoiceNumber` varchar(255) DEFAULT NULL,
  `ProductImages1` varchar(255) DEFAULT NULL,
  `ProductShipCharges` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblnavbar`
--

CREATE TABLE `tblnavbar` (
  `NavBarId` int(11) NOT NULL,
  `MainItem` varchar(255) DEFAULT NULL,
  `SubItem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblregister`
--

CREATE TABLE `tblregister` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `UserEmail` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `UserPassword` longtext DEFAULT NULL,
  `IsVerified` tinyint(4) DEFAULT NULL,
  `ForgotPasswordCode` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `VerificationCode` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `UserDate` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblregister`
--

INSERT INTO `tblregister` (`UserID`, `UserName`, `UserEmail`, `UserPassword`, `IsVerified`, `ForgotPasswordCode`, `VerificationCode`, `UserDate`) VALUES
(78, 'shahid', 'shahidcitc@gmail.com', '$2b$10$O.fCtqEA6O3bP0HZ7t5Lzun4dUF1FHXfOGxADhYrSf30wFKyP/oqy', 1, '726338', NULL, '2025-06-23 11:59:14.963'),
(79, 'admin', 'alimalik@gmail.com', '$2b$10$x9DOjLoLznX3AUGeiltGLe0RrX5RY7LnPVcDyB9gYVHxl/tmMzjp.', 1, NULL, NULL, '2025-06-23 17:19:35.130'),
(80, 'shahid', 'fatima@gmail.com', '$2b$10$611Db4tPkrCLfzrH9nrim.wakp/SHtRews1FzAaTTUpavnnImVyNq', 1, '968294', NULL, '2025-06-23 18:06:54.730');

-- --------------------------------------------------------

--
-- Table structure for table `tblreview`
--

CREATE TABLE `tblreview` (
  `ReviewId` int(11) NOT NULL,
  `ReviewRating` int(11) DEFAULT NULL,
  `CustomerName` varchar(255) DEFAULT NULL,
  `CustomerImage` varchar(255) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `ProductImage` varchar(255) DEFAULT NULL,
  `ProductReview` varchar(255) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `EmailAddress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblreview`
--

INSERT INTO `tblreview` (`ReviewId`, `ReviewRating`, `CustomerName`, `CustomerImage`, `ProductName`, `ProductImage`, `ProductReview`, `ProductId`, `EmailAddress`) VALUES
(39, 5, 'Shahid Ali', '1794242301643-115207501.png', 'Head Phone', '1794242301645-992410042.webp', 'aq', 24, 'shahidcitc@gmail.com'),
(40, 5, 'shahidcitc@gmai', '1794242625380-82744929.png', 'Ear Buds', '1794242625397-343242920.webp', 'ss', 25, 'shahidcitc@gmail.com'),
(41, 4, 'sdss', '1794245187332-874386969.webp', 'Head Phone', '1794245187334-220190173.png', 'qwqq', 24, 'aasaahahidcitc@gmail.com'),
(42, 4, 'sdss', '1794245247304-894381415.webp', 'Head Phone', '1794245247305-333954880.png', 'qwqq', 24, 'aaaasaahahidcitc@gmail.com'),
(43, 3, 'aqaq', '1794245620535-330006475.png', 'Head Phone', '1794245620544-854980360.webp', 'aaa', 24, 'qqqashahidcitc@gmail.com'),
(44, 5, 'aa', '', 'Head Phone', '1794246161454-372919773.png', 'aa', 24, 'shahidcitc@gmail.comaa'),
(45, 5, 'aa', '1794247601904-771621501.png', 'Head Phone', '1794247601921-441337384.png', 'aa', 24, 'shahidcitc@gmail.comaaaa'),
(46, 5, 'aa', '1794247672539-485796467.png', 'Head Phone', '1794247672550-657930901.png', 'aa', 24, 'aashahidcitc@gmail.comaaaa'),
(47, 5, 'aa', '1794247768827-544203081.png', 'Head Phone', '1794247768838-565832307.png', 'aa', 24, 'aashahidcitc@gmail.comaaaaaa'),
(48, 5, 'aa', '1767171248323-55104682', 'Head Phone', '1794248631538-603124622.png', 'aa', 24, 'shahidcitc@gmail.comqw'),
(49, 5, 'aa', '1767171248323-55104682.png', 'Head Phone', '1794248671993-110318597.png', 'aa', 24, 'shahidcitc@gmail.comqwaa'),
(50, 5, 'aa', NULL, 'Head Phone', '1794251984357-787303475.png', 'aa', 24, 'shahidcitc@gmail.comqwaamm'),
(51, 5, 'aa', NULL, 'Head Phone', '1794252017058-70949922.png', 'aa', 24, 'aashahidcitc@gmail.comqwaamm'),
(52, 5, 'ee', '1767171248323-55104682.png', 'Head Phone', '1794290199024-628910656.png', 'eee', 24, 'shahidcitc@gmail.comww'),
(53, 5, 'ee', '1767171248323-55104682.png', 'Head Phone', '1794290401082-887233061.png', 'eee', 24, 'sqqhahidcitc@gmail.comww'),
(54, 5, 'qq', '1767171248323-55104682.png', 'Head Phone', '1794292721502-567304673.webp', 'qwqq', 24, 'shahidcitc@gmail.comew'),
(55, 5, 'qq', '1767171248323-55104682.png', 'Head Phone', '1794292761962-735563564.webp', 'qwqq', 24, 'shahidcitc@gmail.comewre'),
(56, 5, 'qq', '1767171248323-55104682.png', 'Storm Headphones', '1794394664989-480158921.png', 'qq', 26, 'shahidcitc@gmail.com'),
(57, 5, 'qq', '1794394696843-335826498.png', 'Sigma Head Phone', '1794394696844-989548185.png', 'qq', 28, 'shahidcitc@gmail.com'),
(58, 5, 'Shahid Ali', '1767171248323-55104682.png', 'Storm Headphones', '1794477051530-618003329.jpg', 'Ggh', 26, 'shahidcitc@gmail.comjj'),
(59, 5, 'Shahid Ali', '1767171248323-55104682.png', 'SigmaN Headphones', '1794895468167-554945595.png', 'I\'m very satisfied with the battery life and the lightweight design of these headphones, although the leather pads are a bit small in size and the high tension of the headphone causes a bit of problem', 29, 'shahidcitc@gmail.com'),
(60, 5, 'Fatima Ali', '1794895529223-194999726.png', 'SigmaN Headphones', '1794895529224-1296252.png', 'I\'m very satisfied with the battery life and the lightweight design of these headphones, although the leather pads are a bit small in size and the high tension of the headphone causes a bit of problem', 29, 'shahidcitc@gmail.com2'),
(61, 4, 'Usman Ali', '1794895662149-254667811.png', 'SigmaN Headphones', '1794895662150-171166231.png', 'پروڈکٹ بہت اچھی ہے۔ بہت اچھی کوالٹی ہے۔ ساونڈ بھی اچھا ہے۔ بہت اچھی پیکنگ میں ملی ہے۔ اس کے اندر وہ تمام خصوصیات ہیں۔ جو کسی اچھے ہیڈفون کے اندر ہوتی ہیں۔ میں لوگوں کوری کمنڈ کروں گا۔ ', 29, 'shahidcitc@gmail.com22'),
(62, 5, 'Ahmad Ali', '1794898715581-655674303.png', 'SigmaN Headphones', '1794898715582-96849016.png', 'Product is very good. i purchase it from your online store. very confident. thank your', 29, 'abc@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tblsubcategories`
--

CREATE TABLE `tblsubcategories` (
  `id` int(11) NOT NULL,
  `SubCategory` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblsubcategories`
--

INSERT INTO `tblsubcategories` (`id`, `SubCategory`, `CategoryID`) VALUES
(1016, 'Medicine', 6),
(1017, 'Tissue Paper', 1),
(1018, 'Fruits', 2),
(1019, 'Juices', 2),
(2007, 'Biscuits', 3),
(2008, 'Fanta', 3),
(2009, 'Pizza', 4),
(2010, 'Kitchen Items', 6),
(2011, 'Breads', 5),
(2012, 'Bakery', 5),
(2013, 'Grocery', 7),
(2014, 'Steples', 7),
(2015, 'Other Items', 8),
(2016, 'Pempurs', 5),
(2017, 'Pempurs', 5),
(2018, 'New Babay item', 1),
(2019, 'new meath', 9),
(2021, 'Milk', 1),
(2022, 'Juice', 37),
(2023, 'Water', 37),
(2024, 'Sear Food', 9),
(2025, 'Meat', 9),
(2026, 'Snacks', 8),
(2027, 'Cake', 8),
(2028, 'Lithium', 38);

-- --------------------------------------------------------

--
-- Table structure for table `tblusers`
--

CREATE TABLE `tblusers` (
  `UserId` int(11) NOT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `UserPassword` varchar(255) DEFAULT NULL,
  `UserEmail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblusers`
--

INSERT INTO `tblusers` (`UserId`, `UserName`, `UserPassword`, `UserEmail`) VALUES
(36, 'shahid', '123', 'shahid@gmail.com'),
(41, 'ali', '123', 'ali@gmail.com'),
(43, 'GuestUser', '123', 'guestuser@website.com');

-- --------------------------------------------------------

--
-- Table structure for table `tblwishlist`
--

CREATE TABLE `tblwishlist` (
  `WishlitId` int(11) NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `ProductImages2` varchar(255) DEFAULT NULL,
  `ProductColor` varchar(255) DEFAULT NULL,
  `ProductNewPrice` float DEFAULT NULL,
  `ProductOldPrice` float DEFAULT NULL,
  `ProductQty` int(11) DEFAULT NULL,
  `UserId` varchar(255) DEFAULT NULL,
  `InvoiceNumber` varchar(255) DEFAULT NULL,
  `ProductImages1` varchar(255) DEFAULT NULL,
  `ProductShipCharges` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ecommproducts`
--
ALTER TABLE `ecommproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblbanner`
--
ALTER TABLE `tblbanner`
  ADD PRIMARY KEY (`BannerId`);

--
-- Indexes for table `tblbrands`
--
ALTER TABLE `tblbrands`
  ADD PRIMARY KEY (`BrandId`);

--
-- Indexes for table `tblcart`
--
ALTER TABLE `tblcart`
  ADD PRIMARY KEY (`CartId`);

--
-- Indexes for table `tblnavbar`
--
ALTER TABLE `tblnavbar`
  ADD PRIMARY KEY (`NavBarId`);

--
-- Indexes for table `tblregister`
--
ALTER TABLE `tblregister`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `tblreview`
--
ALTER TABLE `tblreview`
  ADD PRIMARY KEY (`ReviewId`);

--
-- Indexes for table `tblsubcategories`
--
ALTER TABLE `tblsubcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblusers`
--
ALTER TABLE `tblusers`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `tblwishlist`
--
ALTER TABLE `tblwishlist`
  ADD PRIMARY KEY (`WishlitId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `ecommproducts`
--
ALTER TABLE `ecommproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblbanner`
--
ALTER TABLE `tblbanner`
  MODIFY `BannerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `tblbrands`
--
ALTER TABLE `tblbrands`
  MODIFY `BrandId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tblcart`
--
ALTER TABLE `tblcart`
  MODIFY `CartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=985;

--
-- AUTO_INCREMENT for table `tblnavbar`
--
ALTER TABLE `tblnavbar`
  MODIFY `NavBarId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tblregister`
--
ALTER TABLE `tblregister`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `tblreview`
--
ALTER TABLE `tblreview`
  MODIFY `ReviewId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `tblsubcategories`
--
ALTER TABLE `tblsubcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2029;

--
-- AUTO_INCREMENT for table `tblusers`
--
ALTER TABLE `tblusers`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `tblwishlist`
--
ALTER TABLE `tblwishlist`
  MODIFY `WishlitId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
