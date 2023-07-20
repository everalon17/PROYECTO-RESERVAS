var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    var AlumnosSchema = conexion.define('alumno',{
        id_alu:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        usuario_alu:{
            type:Sequelize.STRING
        },
        password_alu:{
            type:Sequelize.STRING
        },
        grupo_alu:{
            type:Sequelize.STRING,
        },
        nom_alu:{
            type:Sequelize.STRING
        }
    });
    return AlumnosSchema;
}