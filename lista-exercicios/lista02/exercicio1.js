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

for (const indice in elementosFakes) {
  console.log(`${indice}:`, elementosFakes[indice]);
}