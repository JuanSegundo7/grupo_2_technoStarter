module.exports = (sequelize, dataTypes) => {
    let alias = "User_Contribution"
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
        contribucion_id: {
            type: dataTypes.BOOLEAN,
            notNull: true,
        }
    }
    let config = {
        tableName: "contribucion_usuarios",
        timestamps: false
    }

    const User_Contribution = sequelize.define(alias,cols,config)

    User_Contribution.associate = function(models){
        User_Contribution.belongsToMany(models.User, {
            through: "User_Contribution",
            as: "usuario",
            foreignKey: "usuario_id",
        })
        User_Contribution.belongsToMany(models.Proyect, {
            through: "User_Contribution",
            as: "proyecto",
            foreignKey: "proyecto_id",
        })
        User_Contribution.belongsToMany(models.Contribution_type, {
            through: "User_Contribution",
            as: "tipo_contribucion",
            foreignKey: "contribucion_id",
        })
    }

    return User_Contribution
}