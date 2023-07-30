var Sequelize = require("sequelize");
const conexion = require("../conexion");

module.exports=(conexion)=>{
    var LabSchema = conexion.define('lab',{
        id_lab:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nom_lab:{
            type:Sequelize.STRING,
            allowNull:false
        },
        ubi_lab:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return LabSchema;
}