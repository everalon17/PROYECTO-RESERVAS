var express = require("express");
var path = require("path");
var usuarioRutas= require("./rutas/usuario");
const session = require("cookie-session");
require("dotenv").config();

var app=express();
app.set("view engine","ejs");
app.use("/web",express.static(path.join(__dirname,"web")));
app.use(express.urlencoded({extended:true}));
app.use("/",usuarioRutas);
app.use(session({
    name:'session',
    keys:[process.env.SECRETO_SESION]
    /*secret:process.env.SECRETO_SESION,
    resave:true,
    saveUninitialized:true*/
}));

var port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});