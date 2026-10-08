const apiProdutos = [ 
    { id: 101, nome: 'monitor led', preco: 899.9 }, 
    { id: 102, nome: 'teclado mecanico', preco: 250.0 }, 
    { id: 103, nome: 'mouse gamer', preco: 125.45 } 

]

const produtosFormatados = apiProdutos.map((item) => {
    return {
      ...item, 
      
      nome: item.nome[0].toUpperCase() + item.nome.slice(1),
      
      precoFormatado: `R$ ${item.preco.toFixed(2)}`
    };
  });

  console.log(produtosFormatados)