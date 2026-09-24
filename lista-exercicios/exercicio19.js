function verificar(distanciaParede) {
    let passos = 0

    while (true) {
        passos++
        if (passos >= distanciaParede) {
            console.log("bateu e parou!")
            break
        }

        console.log(`passo atual: ${passos}`)
    } 
}

verificar(100)