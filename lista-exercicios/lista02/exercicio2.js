const elementosFakes =[
    {
        tagName: 'DIV',
        style: { color:'blue',display:'flex'},
        classList: ['container','active']
    },
    {
        tagName:'H1',
        style: { color:'red',display:'block' },
        classList:['title']
    },
    {
        tagName:'BUTTON',
        style: { color:'white',display:'block'},
        classList: ['BigInt','btn-primary']
    }
]

for (posicao in elementosFakes) {
    if (elementosFakes[posicao].style.color === 'blue') {
        console.log(`Na posição ${posicao} tem um estilo com a cor azul!`)
    }
}