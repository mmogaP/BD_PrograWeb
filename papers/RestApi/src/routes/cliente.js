const express = require('express');
const router = express.Router();

const conn = require('../database');

router.get('/cliente', (req,res) => {
    conn.query('Select * from cliente ', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/cliente/buscarordenes', (req,res) =>{
    const { id } = req.params;
    conn.query('select * from cliente join orden where  cliente.id_cli = orden.id_cli;', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/cliente/buscarpapers', (req,res) =>{
    const { id } = req.params;
    conn.query('select * from cliente join orden join paper where cliente.id_cli=orden.id_cli and paper.id_orden=orden.id_orden', [id], (err, resp, campos) => {
        if(!err){
            res.json(resp); 
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});


router.get('/cliente/cambiar', (req,res) =>{
    const { id } = req.params;
    conn.query('update cliente set nombre_cli = "Claudio Yang" where nombre_cli = "Serena Yang"', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/cliente/ingresar', (req,res) =>{
    const { id } = req.params;
    conn.query('insert into cliente (id_cli, rut_cli, nombre_cli) values (123465, 12345678-9, "Rodrigo Maturana")', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});


router.get('/cliente/borrar', (req,res) =>{
    const { id } = req.params;
    conn.query('delete from cliente where nombre_cli = "Rodrigo Maturana"', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/cliente/drop', (req,res) =>{
    const { id } = req.params;
    conn.query('drop table nueva', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});
router.get('/cliente/agregartabla', (req,res) =>{
    const { id } = req.params;
    conn.query('create table nueva(dato varchar(1))', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/cliente/alter1', (req,res) =>{
    const { id } = req.params;
    conn.query('alter table cliente add fechadenacimiento date', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/cliente/alter2', (req,res) =>{
    const { id } = req.params;
    conn.query('alter table cliente drop fechadenacimiento', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});
module.exports = router;