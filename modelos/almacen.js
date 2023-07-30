var Sequelize = require("sequelize");
const conexion = require("../conexion");

module.exports=(conexion)=>{
    var AlmacenistaSchema = conexion.define('almacenista',{
        id_alm:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nom_al:{
            type:Sequelize.STRING,
            allowNull:false
        },
        pass_al:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return AlmacenistaSchema;
}