const express = require('express');
const router = express.Router();

const conn = require('../database');

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