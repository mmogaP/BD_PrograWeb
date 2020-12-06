const express = require('express');
const router = express.Router();

const passport = require('passport');

const conn = require('../database');

router.get('/loginadm', (req,res) =>{
    res.render('login.ejs');
});

router.post('/login',passport.authenticate('adminLocal',{
    successRedirect: "/Admin",
    failureRedirect: "/loginadm"
}));

router.get('/Admin', (req,res,next)=>{
    if(req.isAuthenticated()) {
        if(req.user.rut_adm != undefined){
            return next();
        }   
    }
    res.redirect('/loginadm');
},(req,res) =>{
    conn.query('Select * FROM paper', (err,resp,campos) => {
        res.render('IngresoPaper.ejs',{
            datos: resp
        });
    });
});

router.post('/ingreso',(req,res,next)=>{
    if(req.isAuthenticated()) {
        if(req.user.rut_adm != undefined){
            return next();
        }   
    }
    res.redirect('/loginadm');
},(req, res) => {
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


router.post('/registro', (req, res) => {
    const{ id_cli, contraseña, rut_cli, nombre_cli } = req.body;
    conn.query('INSERT into cliente SET? ',{
        id_cli: id_cli,
        pasword: contraseña,
        rut_cli: rut_cli,
        nombre_cli: nombre_cli
    }, (err, result) => {
        if(!err) {
            res.redirect('/loginc');
        } else {
            console.log(err);
        }
    });
});
module.exports = router;