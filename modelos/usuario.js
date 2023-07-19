var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    var AlumnosSchema = conexion.define('alumno',{
        mat_alu: Sequelize.INTEGER,
        grupo_alu: Sequelize.STRING,
        nom_alu: Sequelize.STRING
    })
    return AlumnosSchema;
}