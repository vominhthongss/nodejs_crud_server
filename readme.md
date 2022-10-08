#### create project
    mkdir node-rest-crud-api
    cd node-rest-crud-api
#### init project
    npm init --yes
    npm install  
### set up framwork expressjs & mysql driver
    npm install express --save
    npm install mysql --save
    npm install body-parser --save
### create database and table
CREATE DATABASE nodejs_mysql;

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
 `id` int(11) NOT NULL,
 `task` varchar(200) NOT NULL,
 `status` tinyint(1) NOT NULL DEFAULT '1',
 `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) VALUES
(1, 'Find bugs', 1, '2019-04-10 23:50:40'),
(2, 'Review code', 1, '2019-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2019-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2019-04-10 23:50:40'),
(5, 'Push to prod', 1, '2019-04-10 23:50:50');

### RUN
    npm start