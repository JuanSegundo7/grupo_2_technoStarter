module.exports = (sequelize, dataTypes) => {
    let alias = "Image"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
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
        tableName: "imagenes",
        timestamps: false
    }

    const Image = sequelize.define(alias,cols,config)

    Image.associate = function(models){
        Image.belongsTo(models.Proyect, {
            as: "proyecto",
            foreignKey: "proyecto_id",
        })
    }
    return Image
}