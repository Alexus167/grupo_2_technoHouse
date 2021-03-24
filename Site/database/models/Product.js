module.exports = (sequelize, dataTypes) => {

    const alias = 'products';

    const cols = {

        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        discount : {
            type : dataTypes.INTEGER.UNSIGNED,
        },
        categories_id : { 
            type : dataTypes.INTEGER,
            allowNull : false
        } 

    }

    const config = {
        tableName : 'products',
        timestamps : true, //si no existe ingresamos false
        underscored : true //indica que lo ingresamos manualmente a traves de un _ 
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Category,{
            as : 'category',
            foreignKey : 'categories_id'
        })
    }

    Product.associate = function(models){
        Product.belongsTo(models.User,{
            as : 'user',
            through : 'carts',
            foreignKey : 'products_id',
            otherKey : 'users_id'
        })
    }

    return Product
}