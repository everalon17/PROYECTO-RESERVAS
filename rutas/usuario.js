var ruta=require("express").Router();
var {Alumno} = require("../conexion");
const alumno = require("../modelos/usuario");

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

ruta.get("/apartado",(req,res)=>{
    res.render("apartado")
})

ruta.get("/almacen",(req,res)=>{
    res.render("almacen");
});

module.exports=ruta;