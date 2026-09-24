const verificar = (a, b, c) => {
    let nomeBuscado = "lucas"

    for (let nome of [a, b, c]) {
        let resposta
        
        if (nome == nomeBuscado) {
            resposta = true
        } else {
            resposta = false
        }
        
        console.log(resposta)
    }
}

verificar("marcos","joão","lucas")