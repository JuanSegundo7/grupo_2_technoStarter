module.exports = (sequelize, dataTypes) => {
    let alias = "Image"
    let cols = {
        id: {
            type: dataTypes.BOOLEAN,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        url_imagen: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        proyecto_id: {
            type: dataTypes.INTEGER,
            notNull: true,
        }
    }
    let config = {
        tableName: "imagenes"
    }

    const Image = sequelize.define(alias,cols,config)

    return Image
}