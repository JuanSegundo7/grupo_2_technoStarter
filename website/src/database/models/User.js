module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(15),
            notNull: true,
        },
        apellido: {
            type: dataTypes.STRING(30),
            notNull: true,
        },
        email: {
            type: dataTypes.STRING(80),
            notNull: true,
        },
        admin: {
            type: dataTypes.BOOLEAN(),
            notNull: true,
        },
        clave: {
            type: dataTypes.STRING(200),
            notNull: true,
        },
        ubicacion: {
            type: dataTypes.STRING(80),
            notNull: true,
        },
        avatar: {
            type: dataTypes.STRING(80),
            notNull: true,
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)

    User.associate = function(models){
        User.hasMany(models.Proyect, {
            as: "proyecto",
            foreignKey: "usuario_id",
        })
        User.belongsToMany(models.User_Contribution, {
            through: "User_Contribution",
            as: "contribucion_usuarios",
            foreignKey: "usuario_id",
        })
    }
    return User
}