console.log('Hello world!');

let primeiroNome = 'Natalí';
let sobrenome = 'Rodrigues da Silva Chaves';

let idade = 25;
console.log(primeiroNome + ' ' + sobrenome+ ' de idade: ' + idade)
// Conceito de constante (valor fixo)
const valorFixo = 30;
//valorFixo = 20;

 // Operadores de atribuição
 let numeroUm = 20
 
 console.log(numeroUm)

 //Comparação
 console.log(numeroUm>22)
 console.log(numeroUm === 20) //igualdade - verifica tipo e valor
  console.log('Tipo e valor (===) : ' + (numeroUm === '20')) // igualdade - verifica apenas o valor
 console.log('Apenas valor (==) : ' + (numeroUm == '20')) // igualdade - verifica apenas o valor
 console.log(numeroUm!== 20) //desigualdade

 // Operador ternário
 let direcao = 90;
 let velocidade = 90 > 120 ? 'Acima da velocidade' : 'Abaixo da velocidade'
 console.log(velocidade)

// operadores logicos
//and &&
// or ||
// not !

//operadores logicos com string
let corCliente = null //undefined //'Branco'
let corEstoque = 'Preto'
let corVendida = corCliente || corEstoque

console.log(corVendida)


// switch case

let mesAno = '3'

switch (mesAno){
    case '1':
        console.log("Janeiro")
        break
    case '2':
        console.log('Fevereiro')
        break
    case '3' :
        console.log('Março')
        break
    default:
        console.log('Mês invalido')
}

// for loop

for(let i = 10; i<=20; i++){
    console.log('Numero: ' + i)
}

// while loop 
let i = 1
while (i <= 10){
    console.log('Numero while: ' , i++) //vantagem : variável do lado de fora do looping, podendo usar variáveis setadas anteriormente
}

// do while loop

i = 1
do {
    console.log("Numero do while: " + i )
    i++
} while (i<=10)