var Sequelize = require("sequelize");
var AlumnoModelo = require("./modelos/alumno");
var MaterialModelo = require("./modelos/material");
var AlmacenModelo = require("./modelos/almacen");
var LabModelo = require("./modelos/lab");
var ReservaModelo = require("./modelos/reserva");
require("dotenv").config();

var db=process.env.DB_MYSQL_REMOTO;
var usuario=process.env.USUARIO_MYSQL_REMOTO;
var password=process.env.PASSWORD_MYSQL_REMOTO;
var host=process.env.HOST_MYSQL_REMOTO;
var port=process.env.PORT_MYSQL_REMOTO;

var conexion = new Sequelize(db,usuario,password,{
    host:host,
    port:port,
    dialect:"mysql",
    dialectOptions:{
        ssl:{
            rejectUnauthorized:true
        },
    }
});

var Alumno=AlumnoModelo(conexion);
var Material=MaterialModelo(conexion);
var Almacen=AlmacenModelo(conexion);
var Lab=LabModelo(conexion);
var Reserva=ReservaModelo(conexion);

/*Alumno.hasOne(Reserva,{foreignKey: 'id_alu'});
Reserva.belongsTo(Alumno,{foreignKey: 'id_alu'});

Lab.hasOne(Reserva,{foreignKey: 'id_lab'});
Reserva.belongsTo(Lab,{foreignKey: 'id_lab'});
*/

conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a mysql");
})
.catch((err)=>{
    console.log("Error al conectarse a mysql"+err);
})

module.exports={
    Alumno:Alumno,
    Material:Material,
    Almacen:Almacen,
    Lab:Lab,
    Reserva:Reserva
}