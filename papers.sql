-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2020 a las 03:26:32
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `papers`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `rut_adm` int(9) UNSIGNED NOT NULL,
  `pasword` varchar(20) NOT NULL,
  `nombre_adm` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`rut_adm`, `pasword`, `nombre_adm`) VALUES
(10116225, 'contra', 'Amir Phelps'),
(18507479, 'contra', 'Michael Dejesus'),
(18604484, 'contra', 'Leo Sloan'),
(19045487, 'contra', 'Beck Morin'),
(19167104, 'contra', 'Fritz Horn'),
(19183476, 'contra', 'Derek Dyer'),
(19308911, 'contra', 'Grady Ellis'),
(19345789, 'contra', 'Jorge Muñoz'),
(19515711, 'contra', 'Melvin Sweet'),
(19587012, 'contra', 'Harding Langley');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adm_pap`
--

CREATE TABLE `adm_pap` (
  `id_paper` int(10) UNSIGNED NOT NULL,
  `rut_adm` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adm_pap`
--

INSERT INTO `adm_pap` (`id_paper`, `rut_adm`) VALUES
(35365054, 19515711),
(45471119, 19587012),
(75483992, 18507479),
(65533544, 10116225),
(42662681, 19308911),
(72598046, 18604484),
(85551507, 19167104),
(48729547, 19183476),
(42245544, 19045487),
(84254003, 19345789);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cli` mediumint(6) UNSIGNED NOT NULL,
  `pasword` varchar(20) NOT NULL,
  `rut_cli` int(9) UNSIGNED NOT NULL,
  `nombre_cli` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cli`, `pasword`, `rut_cli`, `nombre_cli`) VALUES
(16280, 'contra', 10047032, 'Kevyn Bradshaw'),
(131008, 'contra', 19256734, 'Serena Yang'),
(160116, 'contra', 12857034, 'Hall Lamb'),
(160601, 'contra', 18667108, 'Jennifer Robinson'),
(161419, 'contra', 10693931, 'Bo Lucas'),
(162306, 'contra', 17353901, 'Simone Branch'),
(168208, 'contra', 8172424, 'Inga Ferguson'),
(168216, 'contra', 17499790, 'Brian Atkinson'),
(169519, 'contra', 16973206, 'Clayton Barr'),
(180624, 'contra', 13806958, 'Fritz Walls');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id_orden` int(10) UNSIGNED NOT NULL,
  `monto` int(7) UNSIGNED NOT NULL DEFAULT 0,
  `estado` enum('entregada','no entregada') DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_cli` mediumint(6) UNSIGNED NOT NULL,
  `id_paper` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_orden`, `monto`, `estado`, `fecha`, `id_cli`, `id_paper`) VALUES
(178010021, 3700, 'entregada', '2020-12-30', 131008, 65533544),
(363558029, 4000, 'entregada', '2020-12-30', 161419, 42245544),
(368185047, 3300, 'entregada', '2020-12-30', 160116, 45471119),
(374504442, 9900, 'entregada', '2020-12-30', 168208, 35365054),
(485820319, 9800, 'entregada', '2020-12-30', 169519, 42662681),
(537044333, 3400, 'entregada', '2020-12-30', 160601, 75483992),
(647008749, 9500, 'entregada', '2020-12-30', 180624, 84254003),
(647008750, 9500, 'entregada', '2020-12-30', 180624, 42245544),
(752512069, 8300, 'entregada', '2020-12-30', 16280, 48729547),
(899862559, 1000, 'entregada', '2020-12-30', 168216, 72598046),
(899862560, 1000, 'entregada', '2020-12-30', 168216, 35365054),
(999517709, 3600, 'entregada', '2020-12-30', 162306, 85551507);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paper`
--

CREATE TABLE `paper` (
  `id_paper` int(10) UNSIGNED NOT NULL,
  `nombre_paper` varchar(60) NOT NULL,
  `autor` varchar(60) NOT NULL,
  `precio` mediumint(6) UNSIGNED NOT NULL,
  `fecha_lan` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paper`
--

INSERT INTO `paper` (`id_paper`, `nombre_paper`, `autor`, `precio`, `fecha_lan`) VALUES
(35365054, ' security paper', 'Lance Sweet', 9900, '2019-01-21'),
(42245544, ' tourist paper', 'Allen T. Cook', 4000, '2019-03-20'),
(42662681, ' security paper', 'Serina T. Mayo', 9800, '2019-02-20'),
(45471119, ' economy research', 'Ronan Estes', 3300, '2019-12-20'),
(48729547, ' espanish paper', 'Cadman C. Vazquez', 8300, '2019-02-20'),
(65533544, ' science paper ', 'Lucas Love', 3700, '2019-12-20'),
(72598046, ' computing paper', 'Emery R. Burton', 1000, '2019-11-21'),
(75483992, ' medic paper', 'Macon C. Walters', 3400, '2019-11-20'),
(84254003, ' kitchen paper', 'Mason G. Mejia', 9500, '2019-07-20'),
(85551507, ' english paper', 'Zenia Frost', 3600, '2019-02-20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`rut_adm`);

--
-- Indices de la tabla `adm_pap`
--
ALTER TABLE `adm_pap`
  ADD KEY `adm_pap_fk_id_paper` (`id_paper`),
  ADD KEY `adm_pap_fk_rut_adm` (`rut_adm`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cli`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`id_orden`),
  ADD KEY `orden_fk_id_cli` (`id_cli`),
  ADD KEY `orden_fk_id_paper` (`id_paper`);

--
-- Indices de la tabla `paper`
--
ALTER TABLE `paper`
  ADD PRIMARY KEY (`id_paper`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adm_pap`
--
ALTER TABLE `adm_pap`
  ADD CONSTRAINT `adm_pap_fk_id_paper` FOREIGN KEY (`id_paper`) REFERENCES `paper` (`id_paper`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `adm_pap_fk_rut_adm` FOREIGN KEY (`rut_adm`) REFERENCES `administrador` (`rut_adm`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `orden_fk_id_cli` FOREIGN KEY (`id_cli`) REFERENCES `cliente` (`id_cli`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orden_fk_id_paper` FOREIGN KEY (`id_paper`) REFERENCES `paper` (`id_paper`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
