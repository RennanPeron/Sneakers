const addToCart = () => {
    // var price = document.getElementById("price")
    var count = document.getElementById("cart-count")
    var quantity = document.querySelector(".cart-add")
    // CRIAR UM ARRAY DE PRODUTOS

    // SOMAR O PREÇO TOTAL DOS PRODUTOS

    // CONTAR A QUANTIDADE DE PRODUTOS

    // ADICIONAR ESSA QUANTIDADE AO CARRINHO
    count.innerHTML = quantity.innerHTML
    if (parseInt(count.innerHTML) == 0) {
        count.setAttribute("class", "no-count")
    } else {
        count.removeAttribute("class")
    }
}

const quantityAdd = (btn) => {
    var quantity = document.querySelector(".cart-add")
    if(btn){
        quantity.innerHTML ++
    }
    else {
        if(quantity.innerHTML == 0) {
            return
        } else {
            quantity.innerHTML --
        }
    }
}

const openCart = () => {
    document.querySelector("#cart-box").classList.toggle("close")
}