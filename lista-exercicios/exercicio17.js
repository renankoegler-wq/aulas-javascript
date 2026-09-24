function verificar(anoFinal) {
    for (let i = 2000;i<=anoFinal;i++) {
        let a = i%4
        if (a == 0) {
            console.log("ano bissexto!")
        }
        else {
            console.log("ano normal bah")
        }
    }
}

verificar(2026)