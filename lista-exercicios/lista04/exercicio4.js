const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparRepetidos (array) {
    const arrayLimpo = [...new Set(array)]
    console.log(arrayLimpo)
}

limparRepetidos(nomesRepetidos)