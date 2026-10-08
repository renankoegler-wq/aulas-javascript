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

elementosFakes.forEach((tag,posicao) => {
    console.log(`a tag da posição ${posicao} tem o nome: ${tag.tagName}`)
    console.log(`na posiçao ${posicao} a quantidade de clases são ${tag.classList.length}`)
})