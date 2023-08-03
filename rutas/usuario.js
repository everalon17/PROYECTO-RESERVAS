var ruta=require("express").Router();
var {Alumno} = require("../conexion");
var {Reserva} = require("../conexion")
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
                    //req.session.alu = alu;
                    res.redirect("inicio")
                }
            }else{
                res.redirect("/");
            }
        })
        .catch((err)=>{
            console.log("Error........."+err);
            res.redirect("/");
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
    res.render("apartado");
})

ruta.post("/apartado",(req,res)=>{

    /*const {hor_r, lab} = req.body;

    req.body.laboratorio = lab;*/

    Reserva.create(req.body)
    .then(()=>{
        res.redirect("/apartado")
    })
    .catch((err)=>{
        console.log("Error......"+err);
    });

});

ruta.get("/almacen",(req,res)=>{
    res.render("almacen");
});

ruta.get("/reserva",(req,res)=>{
    res.render("reserva");
});

ruta.get("/inicio",(req,res)=>{
    res.render("inicio");
});


module.exports=ruta;