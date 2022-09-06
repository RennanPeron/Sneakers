const addToCart = (item = productItem ) => {
    // ELEMENTOS HTML
    var count = document.getElementById("cart-count")
    var quantity = document.querySelector(".cart-add")
    var checkout = document.querySelector(".cart-item--checkout")
    var emptyCart = document.querySelector(".cart-items--empty")

    if (parseInt(quantity.innerHTML) != 0){
        // CRIAR OS ELEMENTOS 
        // DIV
        const cartItemProduct = document.createElement("div")
        const cartItemInfo = document.createElement("div")
        // P
        const cartItemTitle = document.createElement("h3")
        const cartItemValue = document.createElement("p")
        const deleteCartItem = document.createElement("p")
        const multiples = document.createElement("span")
        // IMG
        const cartItemImg = document.createElement("img")
        cartItemImg.src = item.image

        //  ADICIONAR AS CLASSES 
        cartItemProduct.classList.add("cart-item--product")
        cartItemInfo.classList.add("cart-item--info")
        cartItemValue.classList.add("cart-item-value")
        deleteCartItem.classList.add("delete-cart-item")
        cartItemImg.classList.add("cart-item-img")
        multiples.classList.add("multiples")

        // VALORES DO PRODUTO - innerText? 
        if(item.hasDiscount) {
            cartItemValue.innerHTML =  "$" + item.discountedPrice
        } else {
            cartItemValue.innerHTML = "$" + item.price
        }
        multiples.setAttribute('data', quantity.innerHTML)
        multiples.innerHTML = ` x${quantity.innerHTML} $${(quantity.innerHTML * Number(cartItemValue.innerHTML.split("$")[1]))}.00 `

        cartItemTitle.innerHTML = item.name
        
        // CONFIGURANDO A HIERARQUIA
        cartItemValue.appendChild(multiples)

        cartItemInfo.appendChild(cartItemTitle)
        cartItemInfo.appendChild(cartItemValue)

        cartItemProduct.appendChild(cartItemImg)
        cartItemProduct.appendChild(cartItemInfo)
        cartItemProduct.appendChild(deleteCartItem)

        // ADICIONANDO O PRODUTO AO CARRINHO
        document.querySelector(".cart-items").appendChild(cartItemProduct)
        
        deleteCartItem.addEventListener("click", () => {
            document.querySelector(".cart-items").removeChild(deleteCartItem.parentNode)
            count.innerHTML = count.innerHTML - multiples.getAttribute("data")
            checkCount(count, checkout, emptyCart)
        })
        }
    // ADICIONAR A QUANTIDADE AO CARRINHO
    count.innerHTML = parseInt(quantity.innerHTML) + parseInt(count.innerHTML)
    checkCount(count, checkout, emptyCart)
}

const checkCount = (count, checkout, emptyCart) => {
    if (parseInt(count.innerHTML) == 0) {
        count.setAttribute("class", "no-count")
        checkout.classList.add("hide")
        emptyCart.classList.remove("hide")
    } else {    
        count.removeAttribute("class")
        checkout.classList.remove("hide")
        emptyCart.classList.add("hide")
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

const closeCart = () => {
    document.querySelector("#cart-box").classList.add("close")
}