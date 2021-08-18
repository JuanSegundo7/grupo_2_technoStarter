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
        tableName: "usuarios"
    }

    const User = sequelize.define(alias,cols,config)

    return User
}