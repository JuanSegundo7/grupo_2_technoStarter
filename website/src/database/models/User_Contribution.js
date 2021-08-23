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
        User_Contribution.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        })
        User_Contribution.belongsTo(models.Proyect, {
            as: "proyect",
            foreignKey: "proyect_id",
        })
        User_Contribution.belongsTo(models.Contribution_type, {
            as: "contribution_type",
            foreignKey: "contribution_type_id",
        })
    }

    return User_Contribution
}