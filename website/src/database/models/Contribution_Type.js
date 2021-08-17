module.exports = (sequelize, dataTypes) => {
    let alias = "contribution_type"
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
            type: dataTypes.NUMBER(15),
            notNull: true,
            unsigned: true
        }
    }
    let config = {
        tableName: "tipo_contribucion"
    }

    const contribution_type = sequelize.define(alias,cols,config)

    return contribution_type
}