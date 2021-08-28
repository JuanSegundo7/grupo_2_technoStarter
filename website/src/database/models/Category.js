module.exports = (sequelize, dataTypes) => {
    let alias = "Category"
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
        tableName: "categorias",
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models){
        Category.hasMany(models.Proyect, {
            as: "proyecto",
            foreignKey: "categoria_id"
        })
    }

    return Category
}