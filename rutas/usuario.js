var ruta=require("express").Router();
const { Model } = require("sequelize");
var Usuario=require("../modelos/usuario");

ruta.get("/",(req,res)=>{
    res.render("login");
});

ruta.post("/revisar",(req,res)=>{
    if(req.body.username=="Alumno" && req.body.password=="123"){
        //req.session.username=req.body.username;
        res.redirect("/apartado");
    }
    if(req.body.username=="Almacen" && req.body.password=="321"){
        res.redirect("/almacen");
    }
})

ruta.get("/apartado",(req,res)=>{
    res.render("apartado")
})

ruta.get("/almacen",(req,res)=>{
    res.render("almacen");
});

module.exports=ruta;