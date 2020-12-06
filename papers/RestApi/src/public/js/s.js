const express = require('express');
const router = express.Router();

const fs = require('fs');
  
router.get('/escribir', (req,res)=>{
  const { dato } = req.params;
  fs.writeFile("./compras.txt", [dato], function (req, err) {
    if (err) {
        return console.log(err);
    } 
    console.log("Compras realizadas");
  });
  res.redirect("/catalogo_log");
});

module.exports = router;