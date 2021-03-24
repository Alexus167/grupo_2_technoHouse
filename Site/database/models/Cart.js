module.exports = (sequelize, dataTypes) => {


    const alias = 'carts';

    const cols = {

        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        price : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        users_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        products_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
    }

    const config = {
        tableName : 'carts',
        timestamps : true, //si no existe ingresamos false
        underscored : true //indica que lo ingresamos manualmente a traves de un _ 
    }


    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = function(models){
        Product.belongsToMany(models.Product,{
            as : '',
            foreignKey : 'categories_id'
        })
    }

    return Cart
}