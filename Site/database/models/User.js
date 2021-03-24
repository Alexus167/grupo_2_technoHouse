module.exports = (sequelize, dataTypes) => {

    const alias = 'users';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        firstName : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        lastName : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(12),
            allowNull : false
        },
        cards_id : { 
            type : dataTypes.INTEGER,
            allowNull : false
        },
        adresses_id : { 
            type : dataTypes.INTEGER,
            allowNull : false
        }

    }

    const config = {
        tableName : 'users',
        timestamps : true, //si no existe ingresamos false
        underscored : true //indica que lo ingresamos manualmente a traves de un _ 
    }



    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.belongsTo(models.Product,{
            as : 'product',
            through : 'carts',
            foreignKey : 'users_id',
            otherKey : 'product_id'
        })
    }

    return User
}