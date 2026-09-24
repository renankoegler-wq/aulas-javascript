const verificar = (a,b,c) => {
    let gastoTotal = 0
    for (let salarioAtual of [a,b,c]) {
        let salarioAumento = salarioAtual < 2000 ? salarioAtual*1.1 : salarioAtual
        gastoTotal = gastoTotal+salarioAtual
        console.log(salarioAumento)
    }

    console.log(gastoTotal)
}

verificar(1999,2000,1800)