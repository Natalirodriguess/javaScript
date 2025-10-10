let livro = {
    titulo: 'Hábito atômicos',
    autor: 'James clear',
    paginas: '306',
    capitulos : {
        capitulo1 : 'fundamentos',
        capitulo2 : 'primeira lei'
    },
    imprimirLivro: function () {
        console.log('Imprimindo....')
    }
}

livro.imprimirLivro()
console.log(livro.autor)

