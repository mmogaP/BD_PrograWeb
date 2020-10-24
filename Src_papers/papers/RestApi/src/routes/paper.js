const express = require('express');
const router = express.Router();

const conn = require('../database');

//-------------------------- ESTOO MODIFIQUE
router.get('/admin', (req,res) => {
    conn.query('Select * FROM paper', (err,resp,campos) => {
        res.render('IngresoPaper.ejs',{
            datos: resp
        });
    });
});

router.post('/ingreso',(req, res) => {
    const {id_paper, nombre_paper, autor, precio, fecha_lan} = req.body;
    conn.query('INSERT into paper SET? ',{
        id_paper: id_paper,
        nombre_paper: nombre_paper,
        autor: autor,
        precio: precio,
        fecha_lan: fecha_lan
    }, (err, result) => {
        if(!err) {
            res.redirect('/Admin');
        } else {
            console.log(err);
        }
    });
});

router.get('/eliminar/:id', (req,res) =>{
    const { id } = req.params;
    conn.query('DELETE from paper WHERE id_paper = ?', [id], (err, resp, campos) => {
        if(!err){
            res.redirect('/Admin')
        }else{
            console.log(err);
        }
    });
});

router.get('/', (req,res) => {
    conn.query('Select * FROM paper', (err,resp,campos) => {
        res.render('index.ejs',{
            datos: resp
        });
    });
});

router.get('/buscar', (req,res) => {
    const { buscado } = req.params;
    conn.query('Select * from paper where nombre=?', (err,resp,campos) => {
        res.render('contacto.ejs',{
            datos: resp
        });
    });
});

module.exports = router;