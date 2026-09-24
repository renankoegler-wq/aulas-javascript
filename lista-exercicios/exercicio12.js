const verificar = (nota1,nota2,nota3) => {
    for (let aluno of [nota1,nota2,nota3]) {
        if (aluno >= 7) {
            console.log("passado!")
        }

        else {
            console.log("reprovado!")
        }
    }
}

verificar(1,8,7)