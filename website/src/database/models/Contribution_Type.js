module.exports = (sequelize, dataTypes) => {
    let alias = "Contribution_type"
    let cols = {
        id: {
            type: dataTypes.BOOLEAN,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(6),
            notNull: true,
        },
        monto: {
            type: dataTypes.FLOAT,
            notNull: true,
            unsigned: true
        }
    }
    let config = {
        tableName: "tipo_contribucion",
        timestamps: false
    }

    const Contribution_type = sequelize.define(alias,cols,config)

    Contribution_type.associate = function(models){
        Contribution_type.belongsToMany(models.User_Contribution, {
            through: "User_Contribution",
            as: "contribucion_usuarios",
            foreignKey: "contribucion_id",
        })
        Contribution_type.belongsTo(models.Proyect, {
            as: "proyecto",
            foreignKey: "proyect_id",
        })
    }

    return Contribution_type
}