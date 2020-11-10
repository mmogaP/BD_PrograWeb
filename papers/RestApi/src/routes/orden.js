const express = require('express');
const router = express.Router();

const conn = require('../database');

router.get('/orden/', (req,res) => {
    conn.query('SELECT orden.id_orden, orden.monto, cliente.nombre_cli, (SELECT AVG(monto) FROM orden) from orden inner join cliente on orden.id_cli = cliente.id_cli', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/orden/autor', (req,res) => {
    conn.query('SELECT paper.nombre_paper, paper.autor,paper.precio, orden.fecha from paper inner join orden on paper.id_paper = orden.id_paper where autor = (select autor from paper where autor = "Allen T. Cook")', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/orden/total', (req,res) => {
    conn.query('select cliente.rut_cli, cliente.nombre_cli, orden.id_orden, orden.fecha, orden.monto, (select SUM(precio) from paper) AS total_monto_ordenes from cliente join orden on cliente.id_cli = orden.id_cli', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/orden', (req,res) => {
    conn.query('Select * from orden', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/orden/buscarpapers', (req,res) =>{
    const { id } = req.params;
    conn.query('select * from paper join orden where  paper.id_orden = orden.id_orden', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/orden/ingresar', (req,res) =>{
    const { id } = req.params;
    conn.query('insert into orden (id_orden, monto, estado, fecha, id_cli, ) values(243581324, 10000,"no entregada", "20/04/01", 123465);', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

module.exports = router;