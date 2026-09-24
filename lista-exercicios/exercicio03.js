function verificar(estoque) {
    if (estoque<5) {
        return "estoque critico"
    }

    else {
        return "estoque normal"
    }
}

console.log(verificar(5))