var Sequelize = require("sequelize");
const conexion = require("../conexion");

module.exports=(conexion)=>{
    var  MaterialesSchema = conexion.define('materiale',{
        id_mat:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nom_mat:{
            type:Sequelize.STRING,
            allowNull:false
        },
        cant_mat:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        med_mat:{
            type:Sequelize.STRING,
            allowNull:false
        },
        tipo_mat:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    return MaterialesSchema;
}