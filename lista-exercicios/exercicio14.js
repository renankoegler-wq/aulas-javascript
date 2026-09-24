const calculadora = (a,b,c) => {
    let total = 0
    for (let item of [a,b,c]) {
        total = total+item
    }

    return total
}

console.log(calculadora(1,150,1))