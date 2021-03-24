module.exports = (sequelize, dataTypes) => {

    const alias = 'admins';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(12),
            allowNull : false
        },
        users_id : {
            type : dataTypes.INTEGER,
        },
        products_id : { 
            type : dataTypes.INTEGER,
            allowNull : false
        }

    }

    const config = {
        tableName : 'admins',
        timestamps : false
    }


    const Admin = sequelize.define(alias, cols, config)

    return Admin
}