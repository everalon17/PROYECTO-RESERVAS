var ruta=require("express").Router();
var {Alumno} = require("../conexion");
var {Material} = require("../conexion");
var {Almacen} = require("../conexion");
var {Lab} = require("../conexion");

ruta.get("/",(req,res)=>{
    res.render("login");
});

ruta.post("/revisar",(req,res)=>{
    const {usuario,password} = req.body;

    Alumno.findOne({where:{usuario_alu:usuario,password_alu:password}})
        .then((alu)=>{
            if(alu){
                if(alu.usuario_alu==usuario && alu.password_alu==password){
                    res.redirect("apartado")
                }
            }else{
                res.redirect("/");
            }
        })
        .catch((err)=>{
            console.log("Error........."+err);
        });
})

ruta.get("/registro",(req,res)=>{
    res.render("registro");
});

ruta.post("/registro",(req,res)=>{
    Alumno.create(req.body)
    .then(()=>{
        res.redirect("/")
    })
    .catch((err)=>{
        console.log("Error......"+err);
        res.redirect("/");
    });
});

ruta.get("/apartado",(req,res)=>{
    res.render("apartado")
})

ruta.get("/almacen",(req,res)=>{
    res.render("almacen");
});

module.exports=ruta;