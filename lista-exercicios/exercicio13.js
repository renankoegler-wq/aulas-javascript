const verificar = (valorCompra) => {
    let resposta =valorCompra > 150 ? "sem frete":"cobrar frete"
    console.log(resposta)
}

verificar(151)