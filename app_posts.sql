-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2022 at 06:19 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_posts`
--

CREATE TABLE `app_posts` (
  `post_id` int(11) NOT NULL,
  `post_name` varchar(500) NOT NULL,
  `post_content` varchar(2000) NOT NULL,
  `post_url` varchar(500) NOT NULL,
  `post_likes` int(10) NOT NULL,
  `post_dislikes` int(10) NOT NULL,
  `post_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_posts`
--

INSERT INTO `app_posts` (`post_id`, `post_name`, `post_content`, `post_url`, `post_likes`, `post_dislikes`, `post_deleted`) VALUES
(1, 'Test Post 1 ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida egestas nibh, at molestie mi cursus ac. Sed rhoncus dui id ipsum viverra dapibus.', '61d7ccdd23778.jpg', 2, 1, 0),
(2, 'Test Post 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida egestas nibh, at molestie mi cursus ac. Sed rhoncus dui id ipsum viverra dapibus.', '61d7ccf47f56e.jpg', 1, 0, 0),
(3, 'Test Post 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida egestas nibh, at molestie mi cursus ac. Sed rhoncus dui id ipsum viverra dapibus.', '61d7cd00c72c5.jpg', 1, 0, 0),
(4, 'Test Post 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida egestas nibh, at molestie mi cursus ac. Sed rhoncus dui id ipsum viverra dapibus.', '61d7cd06e9709.jpg', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_posts`
--
ALTER TABLE `app_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_posts`
--
ALTER TABLE `app_posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
