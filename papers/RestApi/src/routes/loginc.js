const express = require('express');
const router = express.Router();

const passport2 = require('passport');

const conn = require('../database');

router.get('/loginc', (req,res) =>{
    res.render('loginc.ejs');
});

router.post('/loginc',passport2.authenticate('userLocal',{
    successRedirect: "/index_log",
    failureRedirect: "/loginc"
}));

router.get('/registrar', (req, res) => {
    res.render('registro.ejs')
})

router.get('/index_log',(req,res,next)=>{
    if(req.isAuthenticated()) {
        if(req.user.id_cli != undefined){
            return next();
        }   
    }
    res.redirect('/loginc');
},(req,res) =>{
        conn.query('Select * FROM paper', (err,resp,campos) => {
            res.render('index_log.ejs',{
                datos: resp
            });
        });

});
module.exports = router;