function verificar(a,b,c) {
    let x = 0
    let resposta = []
    for (let i of [a,b,c]) {
        resposta[x] = i > 1 ? "concluido":"pendente"
        console.log(resposta[x])
    }
}

verificar(1,0,3)