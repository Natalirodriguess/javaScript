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
book1.color = 'white'

console.log(book1)

//criando construtor 
function CriandoBook(title, author, pages){ // primeira letra, maiuscula
    this.title = title;
    this.author = author;
    this.pages = pages
}

let bookUm = new CriandoBook('TituloUm', 'AutorUm', 402)
console.log(bookUm)

// Objetos já construídos
console.log(Math.min(1,3,4,1,2,5,9,7))