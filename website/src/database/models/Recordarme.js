module.exports = (sequelize, dataTypes) => {
    let alias = "Recordarme"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            notNull: true,
        },
        proyecto_id: {
            type: dataTypes.INTEGER,
            notNull: true,
        },
    }
    let config = {
        tableName: "recordarme",
        timestamps: false
    }

    const Recordarme = sequelize.define(alias,cols,config)

    Recordarme.associate = function(models){
        Recordarme.belongsToMany(models.Proyect, {
            through: "Recordarme",
            as: "proyecto",
            foreignKey: "proyecto_id",
        })
        Recordarme.belongsToMany(models.User, {
            through: "Recordarme",
            as: "usuario",
            foreignKey: "usuario_id",
        })
    }
    return Recordarme
}