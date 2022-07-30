const addToCart = () => {
    var price = document.getElementById("price")
    var count = document.getElementById("cart-count")
    // CRIAR UM ARRAY DE PRODUTOS

    // SOMAR O PREÇO TOTAL DOS PRODUTOS

    // CONTAR A QUANTIDADE DE PRODUTOS

    // ADICIONAR ESSA QUANTIDADE AO CARRINHO
    count.innerHTML ++
    if (count.innerHTML == 0) {
        console.log("É zero")
        count.setAttribute("class", "no-count")
    } else {
        count.removeAttribute("class")
    }
}