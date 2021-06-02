let spanQuantity = document.querySelector('span.badge');
let carrito = document.querySelector('#lista-carrito tbody');
let spanTotal = document.getElementById('total');
let cartHead = document.getElementById('cart-head');
let cartFooter = document.getElementById('cart-footer');
let cartEmpty = document.getElementById('cart-empty');
let btnCartEmpty = document.getElementById('btn-delete-cart');
let btnNextBuy = document.getElementById('btn-next-buy')

const urlBase = window.location.origin


const agregarItem = async (e,id) => {

    e.preventDefault()

    try {
        let response = await fetch(urlBase + '/cart/agregar/' + id)
        let result = await response.json()
        loadTable(result)
        getCart()
    } catch (error) {
        console.log(error)
    }

}


const loadTable = Cart => {
    carrito.innerHTML = "";
    Cart.forEach(product => {

        let item = `
        <td class="col-2">
        <img class="w-100" src="${product.image}"> 
        </td>
        <td class="text-center col-3">
        <a href="#" class="text-danger h5" onClick="return item('${product.id}',-1)"><i class="fas fa-minus-square"></i></a>
        <span class="h5">${product.quantity}<span>
        <a href="#" class="text-success h5" onClick="return item('${product.id}',1)"><i class="fas fa-plus-square"></i></a>
        </td>
        <td>
        ${product.name}
        </td>
       
        <td class="">
        <span>$</span><span class="float-end">${product.price}</span>
        </td>
        <td class="">
        <span>$</span><span class="float-end">${product.total}</span>
        </td>
        `
        carrito.innerHTML += item
    });
    return false
}

const getCart = async () => {
    try {
        let response = await fetch(urlBase + '/listar')
        let result = await response.json()
        console.log(result);
        showQuantity(result)
    } catch (error) {
        console.log(error)
    }
}

const showQuantity = carrito => {
    let quantity = 0;
    let total = 0;

    carrito.forEach(item => {
        quantity += item.quantity
        total += item.total
    })

    spanQuantity.innerHTML = quantity
    spanTotal.innerHTML = `<span>$</span> <span class="float-end">${total}</span>`

    if(quantity == 0){
        cartHead.setAttribute('hidden',true)
        cartFooter.setAttribute('hidden',true)
        cartEmpty.removeAttribute('hidden')
        btnCartEmpty.setAttribute('disabled',true);
        btnNextBuy.setAttribute('disabled',true);
    }else{
        cartHead.removeAttribute('hidden')
        cartFooter.removeAttribute('hidden')
        cartEmpty.setAttribute('hidden',true)
        btnCartEmpty.removeAttribute('disabled');
        btnNextBuy.removeAttribute('disabled');
    }
}

const item = async(id,type) => {
    let url;
    type == 1 ? url = urlBase + '/cart/agregar/' + id : url = urlBase + '/cart/quitar/' + id

    try {
        let response = await fetch(url)
        let result = await response.json()
        showQuantity(result)
        loadTable(result)
    } catch (error) {
        console.log(error)
    }
}

const emptyCart = async () => {
    try {
        let response = await fetch(urlBase + '/cart/vaciar')
        let result = await response.json()
        showQuantity(result)
    } catch (error) {
        console.log(error);
    }
}

btnCartEmpty.addEventListener('click',(e) => {
    e.preventDefault()
    while(carrito.firstChild){
        carrito.removeChild(carrito.firstChild)
    }
    emptyCart()
})

const mostrarInicial = async () => {
    let response = await fetch(urlBase + '/cart/listar')
    let result = await response.json()
    showQuantity(result)
    loadTable(result)
}


window.addEventListener('load',() => {
    getCart()
    mostrarInicial()
})


