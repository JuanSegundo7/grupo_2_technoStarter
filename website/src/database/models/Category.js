module.exports = (sequelize, dataTypes) => {
    let alias = "category"
    let cols = {
        id: {
            type: dataTypes.BOOLEAN,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(15),
            notNull: true,
        }
    }
    let config = {
        tableName: "categorias"
    }

    const category = sequelize.define(alias,cols,config)

    return category
}