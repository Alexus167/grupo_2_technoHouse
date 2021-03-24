const Product = require("./Product");

module.exports = (sequelize, dataTypes) => {

    const alias = 'categories';

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
        }
    }

    const config = {
        tableName : 'categories',
        timestamps : false
    }



    const Category = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.hasMany(models.Products,{
            as : 'products',
            foreignKey : 'categories_id'
        })
    }


    return Category
}