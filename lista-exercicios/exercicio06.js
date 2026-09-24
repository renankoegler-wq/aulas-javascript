function verificar(idade) {
    let resposta = idade>18 ? "permitido":"bloqueado"
    return resposta
}

console.log(verificar(19))