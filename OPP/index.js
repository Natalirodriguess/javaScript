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

// criando uma fatory
function createBook (title, author, pages){ //factory

    const book = { // criando este objeto 'book'
        title: title,
        author: author,
        pages: pages,
        printBook : function(){
            console.log('Printing...')
        }
    }

    return book
}
const book1 = createBook('livro1', 'autor1', 306)
const book2 = createBook('livro2', 'autor2', 406)

console.log(book1)
console.log(book2)


// criando propriedade exclusiva de um objeto