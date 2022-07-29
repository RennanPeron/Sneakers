let productItem = {
    name: "Fall Limited Edition Sneakers",
    price: "250.00",
    hasDiscount: true,
    discountValue: "50.00",
    discountedPrice: "125.00"
}

// let price = document.getElementById("price");

let applyDiscount = () => {
    let price = document.getElementById("price")
    
    if(productItem.hasDiscount) {
        price.innerHTML = productItem.discountedPrice
        
    }
    
}