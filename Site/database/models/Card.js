module.exports = (sequelize, dataTypes) => {


    const alias = 'cards';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        userNum : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        expirationDate : {
            type : dataTypes.INTEGER(4),
            allowNull : false
        },
        securityCode : {
            type : dataTypes.INTEGER(4),
            allowNull : false
        },
    }

    const config = {
        tableName : 'cards',
        timestamps : false
    }


    const Card = sequelize.define(alias, cols, config)

    return Card
}