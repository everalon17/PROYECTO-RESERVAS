var ruta=require("express").Router();
var {Alumno} = require("../conexion");
const alumno = require("../modelos/usuario");
//const { Model } = require("sequelize");
//var Usuario=require("../modelos/usuario");

ruta.get("/",(req,res)=>{
    res.render("login");
});

ruta.post("/revisar",(req,res)=>{
    (Alumno.findOne({where:{mat_alu:req.body.username}}))
    .then(()=>{
        console.log();
        res.render("apartado");
    })
    .catch((err)=>{
        console.log("Error......."+err);
    })


    /*if(req.body.username=="Alumno" && req.body.password=="123"){
        //req.session.username=req.body.username;
        res.redirect("/apartado");
    }
    if(req.body.username=="Almacen" && req.body.password=="321"){
        res.redirect("/almacen");
    }*/
})

ruta.get("/apartado",(req,res)=>{
    res.render("apartado")
})

ruta.get("/almacen",(req,res)=>{
    res.render("almacen");
});

module.exports=ruta;