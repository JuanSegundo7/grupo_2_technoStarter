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
        tableName: "imagenes",
        timestamps: false
    }

    const Image = sequelize.define(alias,cols,config)

    Image.associate = function(models){
        Image.belongsToMany(models.Proyect, {
            as: "proyect",
            foreignKey: "proyect_id",
        })
    }
    return Image
}