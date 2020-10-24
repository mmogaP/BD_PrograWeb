-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2020 a las 02:34:12
-- Versión del servidor: 5.7.30-log
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `rut_adm` int(8) UNSIGNED NOT NULL,
  `nombre_adm` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`rut_adm`, `nombre_adm`) VALUES
(10116225, 'Amir Phelps'),
(18507479, 'Michael Dejesus'),
(18604484, 'Leo Sloan'),
(19045487, 'Beck Morin'),
(19167104, 'Fritz Horn'),
(19183476, 'Derek Dyer'),
(19308911, 'Grady Ellis'),
(19345789, 'Jorge Muñoz'),
(19515711, 'Melvin Sweet'),
(19587012, 'Harding Langley');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adm_pap`
--

CREATE TABLE `adm_pap` (
  `id_paper` int(10) UNSIGNED NOT NULL,
  `rut_adm` int(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `rut_cli` int(8) UNSIGNED NOT NULL,
  `nombre_cli` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cli`, `rut_cli`, `nombre_cli`) VALUES
(16280, 10047032, 'Kevyn Bradshaw'),
(131008, 19256734, 'Serena Yang'),
(160116, 12857034, 'Hall Lamb'),
(160601, 18667108, 'Jennifer Robinson'),
(161419, 10693931, 'Bo Lucas'),
(162306, 17353901, 'Simone Branch'),
(168208, 8172424, 'Inga Ferguson'),
(168216, 17499790, 'Brian Atkinson'),
(169519, 16973206, 'Clayton Barr'),
(180624, 13806958, 'Fritz Walls');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id_orden` int(10) UNSIGNED NOT NULL,
  `monto` int(7) UNSIGNED NOT NULL DEFAULT '0',
  `estado` enum('entregada','no entregada') DEFAULT 'no entregada',
  `fecha` date DEFAULT NULL,
  `id_cli` mediumint(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_orden`, `monto`, `estado`, `fecha`, `id_cli`) VALUES
(178010021, 3700, 'no entregada', '2020-12-30', 131008),
(363558029, 4000, 'no entregada', '2020-12-30', 161419),
(368185047, 3300, 'no entregada', '2020-12-30', 160116),
(374504442, 9900, 'no entregada', '2020-12-30', 168208),
(485820319, 9800, 'no entregada', '2020-12-30', 169519),
(537044333, 3400, 'no entregada', '2020-12-30', 160601),
(647008749, 9500, 'no entregada', '2020-12-30', 180624),
(752512069, 8300, 'no entregada', '2020-12-30', 16280),
(899862559, 1000, 'no entregada', '2020-12-30', 168216),
(999517709, 3600, 'no entregada', '2020-12-30', 162306);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paper`
--

CREATE TABLE `paper` (
  `id_paper` int(10) UNSIGNED NOT NULL,
  `nombre_paper` varchar(60) NOT NULL,
  `autor` varchar(60) NOT NULL,
  `precio` mediumint(6) UNSIGNED NOT NULL,
  `fecha_lan` date DEFAULT NULL,
  `id_orden` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paper`
--

INSERT INTO `paper` (`id_paper`, `nombre_paper`, `autor`, `precio`, `fecha_lan`, `id_orden`) VALUES
(35365054, ' security paper ', 'Lance Sweet', 9900, '2019-01-21', 374504442),
(42245544, ' tourist paper ', 'Allen T. Cook', 4000, '2019-03-20', 363558029),
(42662681, ' security paper ', 'Serina T. Mayo', 9800, '2019-02-20', 485820319),
(45471119, ' economy research', 'Ronan Estes', 3300, '2019-12-20', 368185047),
(48729547, ' espanish paper ', 'Cadman C. Vazquez', 8300, '2019-02-20', 752512069),
(65533544, ' science paper ', 'Lucas Love', 3700, '2019-12-20', 178010021),
(72598046, ' computing paper ', 'Emery R. Burton', 1000, '2019-11-21', 899862559),
(75483992, ' medic paper ', 'Macon C. Walters', 3400, '2019-11-20', 537044333),
(84254003, ' kitchen paper ', 'Mason G. Mejia', 9500, '2019-07-20', 647008749),
(85551507, ' english paper ', 'Zenia Frost', 3600, '2019-02-20', 999517709);

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
  ADD KEY `orden_fk_id_cli` (`id_cli`);

--
-- Indices de la tabla `paper`
--
ALTER TABLE `paper`
  ADD PRIMARY KEY (`id_paper`),
  ADD KEY `paper_fk_id_orden` (`id_orden`);

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
  ADD CONSTRAINT `orden_fk_id_cli` FOREIGN KEY (`id_cli`) REFERENCES `cliente` (`id_cli`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `paper`
--
ALTER TABLE `paper`
  ADD CONSTRAINT `paper_fk_id_orden` FOREIGN KEY (`id_orden`) REFERENCES `orden` (`id_orden`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
