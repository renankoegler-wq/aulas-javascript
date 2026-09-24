const missoes = [
    {nome: "derrotar chefe",pontos: 500},
    {nome: "encontrar tesouro",pontos:200},
    {nome: "salvar personagem", pontos: 800},
    {nome: "explorar mapa",pontos: 100}
]

function analisarMissoes() {
    for (let missaoAtual of missoes) {
        if (missaoAtual.pontos >= 500) {
            console.log(`${missaoAtual.nome} missão dificil`)
        }
        else if (missaoAtual.pontos >= 200) {
            console.log(`${missaoAtual.nome} missão média`)
        }
        else {
            console.log (`${missaoAtual.nome} missão facil`)
        }
    }
}

analisarMissoes()