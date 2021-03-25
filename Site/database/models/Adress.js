module.exports = (sequelize, dataTypes) => {

    const alias = 'addresses';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        streeth : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        number : {
            type : dataTypes.INTEGER(4),
            allowNull : false
        },
        pc : {
            type : dataTypes.INTEGER(4),
            allowNull : false
        },
        state : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        town : {
            type : dataTypes.STRING(45),
            allowNull : false
        }

    }

    const config = {
        tableName : 'addresses',
        timestamps : false
    }


    const Adress = sequelize.define(alias, cols, config)

    return Adress
}