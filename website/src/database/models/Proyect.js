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
        imagenes_id: {
            type: dataTypes.INTEGER,
            notNull: true,
        }
    }
    let config = {
        tableName: "proyectos",
        timestamps: false
    }

    const Proyect = sequelize.define(alias,cols,config)

    Proyect.associate = function(models){
        Proyect.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
        })
    }

    return Proyect
}