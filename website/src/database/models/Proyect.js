module.exports = (sequelize, dataTypes) => {
    let alias = "Proyect"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            notNull: true,
        },
        contribucion_actual: {
            type: dataTypes.FLOAT,
            unsigned: true,
            notNull: true,
            defaultValue: 0,
        },
        contribucion_final: {
            type: dataTypes.FLOAT,
            unsigned: true,
            notNull: true,
        },
        texto: {
            type: dataTypes.TEXT,
            notNull: true,
        },
        fecha_inicial: {
            type: dataTypes.DATE,
            notNull: true,
        },
        fecha_limite: {
            type: dataTypes.DATE,
            notNull: true,
        },
        categoria_id: {
            type: dataTypes.BOOLEAN,
            notNull: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            notNull: true,
        },
    }
    let config = {
        tableName: "proyectos",
        timestamps: false
    }

    const Proyect = sequelize.define(alias,cols,config)

    Proyect.associate = function(models){
        Proyect.belongsTo(models.Category, {
            as: "categoria",
            foreignKey: "categoria_id",
        })
        Proyect.belongsTo(models.User, {
            as: "autor",
            foreignKey: "usuario_id",
        })
        Proyect.hasMany(models.Image, {
            as: "imagenes",
            foreignKey: "proyecto_id",
        })
        Proyect.belongsToMany(models.User_Contribution, {
            through: "User_Contribution",
            as: "contribucion_usuarios",
            foreignKey: "proyecto_id",
        })
        Proyect.hasMany(models.Contribution_type, {
            as: "contribuciones",
            foreignKey: "proyect_id",
        })
    }
    return Proyect
}