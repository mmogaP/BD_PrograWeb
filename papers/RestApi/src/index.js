const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');
const { captureRejectionSymbol } = require('events');
const conn = require('./database');

//npm run dev

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs'); 

// Middleware (funciones que se procesan antes de llegar a rutas)

console.log(__dirname)
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/sass', express.static(path.join(__dirname, 'public/sass')));
app.use('/images', express.static(path.join(__dirname, 'public/images_2')));
app.use('/css', express.static(path.join(__dirname, 'public/css_2')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts_2')));
app.use('/js', express.static(path.join(__dirname, 'public/js_2')));
app.use('/sass', express.static(path.join(__dirname, 'public/vendor_2')));

app.use(express.json()); //Transfomar a formato JSON 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('el secreto'));

app.use(session({
     secret: 'el secreto',
     resave: true, //la sesión se guardar cada vez
     saveUninitialized: true    //Si inicializamos y no le guardamos nada igual va a guardar
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('adminLocal', new PassportLocal({
     passReqToCallback: true
}, function(req,username,password,done){
     conn.query('select * from administrador where rut_adm = ?',username, function(err,rows){
          if (rows.length > 0){
               const user = rows[0];
               if(username == user.rut_adm && password == user.pasword){
                    return done(null,{id: user.rut_adm, nombre: user.nombre_adm});
               }
          }
          return done(null,false);
     });
}));

passport.use('userLocal', new PassportLocal({
     passReqToCallback: true
}, function(req,username,password,done){
     conn.query('select * from cliente where id_cli = ?',username, function(err,rows){
          if (rows.length > 0){
               const user = rows[0];
               if(username == user.id_cli && password == user.pasword){
                    return done(null,{id: user.id_cli, nombre: user.nombre_adm});
               }
          }
          return done(null,false);
     });

}
));

//Serialización, parar la información para identificar usuario en passport
passport.serializeUser(function(user,done){
     done(null,user.id);
});

passport.deserializeUser(function(id,done){
     conn.query('select * from administrador where rut_adm = ?', id, function(err,rows){
          done(null, rows[0]);
     });
});

passport.deserializeUser(function(id,done){
     conn.query('select * from cliente where id_cli = ?',id, function(err,rows){
          done(err, rows[0]);
     });
});

app.use(require('./public/js/s'))

// Rutas (URL)
app.use(require('./routes/cliente'));
app.use(require('./routes/orden'));
app.use(require('./routes/paper'));
app.use(require('./routes/administrador'));
app.use(require('./routes/login'));
app.use(require('./routes/loginc'));


// Iniciando Servidor
app.listen(app.get('port'), () => {
     console.log('Servidor en puerto ',app.get('port'))
});