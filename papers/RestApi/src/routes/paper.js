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

router.get('/modificar', (req,res) => {
    conn.query('Select * FROM paper', (err,resp,campos) => {
        res.render('modificar.ejs',{
        });
    });
});

router.post('/cambiar', function(req, res) {
    conn.query('UPDATE paper SET nombre_paper = ?, autor = ? , precio = ?, fecha_lan = ? WHERE id_paper = ?',
        [req.body.nombre_paper, req.body.autor ,req.body.precio, req.body.fecha_lan ,req.body.id_paper],
        function() {
            res.redirect('/Admin');
            
        }
    );
});

router.get('/cambiar/:id', (req,res) =>{
    const { id } = req.params;
    conn.query('update paper set precio = 0 where id_paper = ?', [id], (err, resp, campos) => {
        if(!err){
            //res.json(resp); Mostar Arreglo Json
            //res.json(resp[0]); //Mostrar Objeto 
            res.redirect('/Admin')
        }else{
            console.log(err);
        }   
    });
});

router.get('/ganancias', (req,res)=>{
    conn.query('select paper.nombre_paper, paper.autor, sum(paper.precio),sum(paper.precio)as total from cliente join orden join paper where cliente.id_cli=orden.id_cli and orden.id_paper=paper.id_paper group by  paper.id_paper', (err,resp,campos) => {
            res.render('busqueda.ejs',{
            datos: resp
        });
    });
});

router.get('/vendidos', (req,res)=>{
    conn.query('select paper.nombre_paper, paper.autor,count(paper.id_paper)as total from cliente join orden join paper  where cliente.id_cli=orden.id_cli and orden.id_paper=paper.id_paper group by paper.id_paper', (err,resp,campos) => {
            res.render('busqueda.ejs',{
            datos: resp
        });
    });
});

router.get('/buscar/:b', (req,res) => {
    const { b } = req.params;
    conn.query('Select * from paper where nombre_paper= ?',[b],(err,resp,campos) => {
        if(!err){
            console.log(resp[0]);
            res.json(resp[0]); //Mostrar Objeto 
        }else{
            console.log(err);
        }    //datos: resp
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

router.get('/index', (req,res) => {
    conn.query('Select * FROM paper', (err,resp,campos) => {
        res.render('index.ejs',{
            datos: resp
        });
    });
});

router.get('/paper/porPrecio', (req,res) => {
    conn.query('select orden.id_orden , orden.fecha, paper.precio from orden join paper on orden.id_paper = paper.id_paper where paper.precio between 3000 and 6000', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/paper/porPrecio2', (req,res) => {
    conn.query('select orden.id_orden , orden.fecha, paper.precio from orden join paper on orden.id_paper = paper.id_paper where paper.precio not between 3000 and 6000', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});



router.get('/paper/autorVendido', (req,res) => {
    conn.query('select orden.id_orden, paper.nombre_paper, paper.autor, paper.precio, sum(precio) AS Total_ganacia_autor from orden join paper on orden.id_paper = paper.id_paper where paper.autor = "Cadman C. Vazquez"', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});

router.get('/paper/Cliente', (req,res) => {
    conn.query('select cliente.nombre_cli, count(paper.nombre_paper)as total from cliente join orden join paper where cliente.id_cli=orden.id_cli and orden.id_paper=paper.id_paper group by cliente.id_cli', (err, resp, campos) => {
        if(!err){
            res.json(resp);
        }else{
            console.log(err);
        }
    });
});
module.exports = router;