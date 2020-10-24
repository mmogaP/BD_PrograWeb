const express = require('express');
const router = express.Router();

const conn = require('../database');

router.get('/administrador', (req,res) => {
    conn.query('Select * from administrador', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});
/*
router.get('/', (req,res) => {
    //res.render('index.ejs');
    conn.query('Select * FROM jugador', (err,resp,campos) => {
        console.log(resp);
        res.render('p.ejs',{
            datos: resp
        });
    });
});*/


router.get('/administrador/cambiar', (req,res) =>{
    const { id } = req.params;
    conn.query('update administrador set nombre_adm = "Andres Gonzalez" where nombre_adm ="Amir Phelps"', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});

router.get('/administrador/borrar', (req,res) =>{
    const { id } = req.params;
    conn.query('delete from administrador where nombre_adm =  "Beck Morin"', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }   
    });
});


module.exports = router;