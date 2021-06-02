const db = require('../database/models');


const verify = (cart, id) => {
    let pos = -1;
    for (let i = 0; i < cart.length; i++) {
        
        if(cart[i].id == id){
            pos = i
            break
        }
    }
    return pos
}

module.exports = {
    addItem : (req,res) => {
        let cart = req.session.cart;
        let id = req.params.id;

        db.Product.findOne({
            where : {
                id
            },
            include : [
                {association : 'category'}]
        })
        .then(product => {
            console.log(product);
            let pos = verify(cart,id)

            if(pos == -1) {
                let item = {
                    id : product.id,
                    name : product.name,
                    image : product.image,
                    price : product.price,
                    total : product.price,
                    quantity : 1
                };
                cart.push(item)

            }else{

                let item = cart[pos]
                item.quantity = item.quantity + 1
                item.total = item.quantity * item.price
                cart[pos] = item
            }
            req.session.cart = cart
            res.status(200).json(req.session.cart)
        })


    },
    removeItem : (req,res) => {
        let cart = req.session.cart;
        let id = req.params.id;

        let pos = verify(cart,id)

        let item  = cart[pos]

        if(item.quantity > 1){
            item.quantity = item.quantity - 1
            item.total = item.quantity * item.price
            cart[pos] = item
            req.session.cart = cart
            return res.status(200).json(req.session.cart)
        }else{
            cart.splice(item,1)
            req.session.cart = cart
            return res.status(200).json(req.session.cart)
        }

    },
    showCart : (req,res) => {
        return res.status(200).json(req.session.cart)
    },
    emptyCart : (req,res) => {
        req.session.cart = []
        return res.status(200).json(req.session.cart)
    },
}