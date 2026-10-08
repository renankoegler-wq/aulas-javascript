const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

const produtoComDesconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco * 0.9
    }
    })

    console.log(produtoComDesconto)