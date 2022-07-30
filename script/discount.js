let productItem = {
    name: "Fall Limited Edition Sneakers",
    price: "250.00",
    hasDiscount: true,
    discountValue: "50",
    discountedPrice: "125.00"
}

let applyDiscount = () => {
    let price = document.getElementById("price")
    
    if(productItem.hasDiscount) {
        price.innerHTML = productItem.discountedPrice
        // VALOR EM PORCENTAGEM DO DESCONTO
        var discount = document.createElement("p")
        discount.setAttribute("id", "discount")
        var percent = document.createTextNode(productItem.discountValue + "%")
        discount.appendChild(percent)
        var element = document.getElementById("price-value");
        element.appendChild(discount);
        // VALOR DO PREÇO ORIGINAL
        var discountedPrice = document.createElement("p")
        discountedPrice.setAttribute("id", "originalPrice")
        var value = document.createTextNode("$" + productItem.price)
        discountedPrice.appendChild(value)
        var element = document.getElementById("price-info");
        element.appendChild(discountedPrice);
    }
    
}