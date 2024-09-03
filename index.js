// ------------------------------------------------------------
// ---------------------   Iniciando  -------------------------
// ------------------------------------------------------------


// console.log("Hello, word!!!");

// ------------------------------------------------------------
// ---------------   Variaveis e constantes  ------------------
// ------------------------------------------------------------

// var nomeVar = 'João'
// console.log(nomeVar) // João
// nomeVar = 'Pedro'
// console.log(nomeVar)

// let nomeLet = 'Maria'
// console.log(nomeLet) // Maria
// nomeLet = 'Joana'
// console.log(nomeLet) // Joana

// const nomeConst = 'José'
// console.log(nomeConst) // José
// nomeConst = 'NovoValor' // *Isso dará um erro

// ------------------------------------------------------------
// --------------  Tipos de Dados Primitivo  ------------------
// ------------------------------------------------------------

// const nome = 'João'  // String
// console.log(nome, typeof nome)  // João string

// const idade = 25  // Number
// console.log(idade, typeof idade)  // 25 number

// const estudante = true // Boolean
// console.log(estudante, typeof estudante) // true boolean

// const cidade = null  // null
// console.log(cidade, typeof cidade)  // null object

// let pais  // Undefined
// console.log(pais, typeof pais)  // underfined undefined


// ------------------------------------------------------------
// --------------  Tipos de Dados Referencia  -----------------
// ------------------------------------------------------------

// 1- Object: Coleção de propriedades -------------------------
// 2- Array: Lista ordenada de valores. -----------------------
// 3- Function: Bloco de código reutilizável ------------------

// const pessoa = {
//     nome: 'João',
//     idade: 25
// }
// console.log(pessoa)  // { nome: 'Jõao', idade: 25 }


// const frutas = ['maça', 'banana', 'laranja']
//--------------    0       1         2        ---------------
// console.log(frutas)  // ['maça', 'banana', 'laranja']


// function saudacao(){
//     return 'Olá, Mundo!'
// }
// console.log(saudacao())  // Olá, Mundo!


// ------------------------------------------------------------
// --------------  Variáveis: Arrays --------------------------
// ------------------------------------------------------------

// Estrutura de dados que armazena uma coleção de elementos, permitindo armazenar múltiplos valores em uma única variável.

// 1. Declaração de um Array Vazio
// 2. Inicialização de um Array com Elementos
// 3. Acesando elementos do Array
// 4. Modificando elementos do Array

// const frutas = []
// console.log(frutas) // []

// const numeros = [1, 2, 3, 4, 5]

// console.log(numeros[0])  // 1
// console.log(numeros[2])  // 3

// numeros[2] = 10
// console.log(numeros) // [1, 2, 10, 4, 5]


// ------------------------------------------------------------
// -------  Variáveis: Arrays - Operações principais  ---------
// ------------------------------------------------------------

// 1. Adicionar elementos - push: Adiciona um ou mais elementos ao final do array.
// 2. Remover elementos - pop: Remove o útimo elemento do array.
// 3. Remover elementos - shift: Remove o primeiro elemento do array.
// 4. Encontrar elementos - indexOf: Retorna o primeiro índice em que um elemento pode ser encontrado no array.
// 5. Remover elementos específicos - splice: Adiciona/Remove elementos do array.

// const frutas = []
// console.log(frutas)  // []


// frutas.push('maçã')
// frutas.push('banana', 'laranja')
// console.log(frutas)  // ['maça', 'banana', 'laranja']


// frutas.pop()
// console.log(frutas)  // ['maçã', 'banana']


// frutas.shift()
// console.log(frutas)  // ['banana']


// const indice = frutas.indexOf('banana')
// console.log(indice)  // 0


// frutas.splice(indice,1)  // Remove 1 elementos a partir do índice 0
// console.log(frutas)  // []


// ------------------------------------------------------------
// -----------------  Variáveis: Objetos  ---------------------
// ------------------------------------------------------------

// Estrutura de dados que armazena pares chave-valor, permitindo armazenar dados relacionados e métodos.

// 1. Declaração de um objeto vazio
// 2. Inicialização de um objeto com propriedades
// 3. Acessando propriedades do objeto
// 4. Modificando propriedades do objeto
// 5. Adicionando novas propriedades

// const pessoa = {}
// console.log(pessoa)  // {}


// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2021
// }
// console.log(carro)  // {marca: 'Toyota', modelo: 'Corolla', ano: 2021}


// console.log(carro.marca)  // Toyota
// console.log(carro.modelo)  // Corolla


// carro.ano = 2022
// console.log(carro)  // {marca: 'Toyota', modelo: 'Corolla', ano: 2022}


// carro.cor = 'Prata'
// console.log(carro)  // {marca: 'Toyota', modelo: 'Corolla', ano: 2022, cor: 'Prata'}


// ------------------------------------------------------------
// ------------  Variáveis: Objetos - Métodos -----------------
// ------------------------------------------------------------

// É possivel adicionar funções aos objetos. Nesse caso, chamamos essas funções de Métodos.

// 1. Adicionar durante a criação
// 2. Adicionar após a criação

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    ligar: function(){
        console.log(`O ${this.modelo} carro está ligado.`)
    }
}
carro.ligar()  // O carro está ligado.


carro.desligar = function(){
    console.log(`O ${this.modelo} carro está desligado.`)
}
carro.desligar()


// ------------------------------------------------------------
// ------------  Variáveis: Objetos - Operações ---------------
// ------------------------------------------------------------

// 1. Método Object.keys: Retorna um array com os nomes das prorpiedades enumeráveis de um objeto.
// 2. Método Object.values: Retorna um array com os valores das propriedades enumeráveis de um objeto.
// 3. Método Object.entries: Retorna um array de arrays, onde cade sub-array contém um par chave-valor.


const chaves = Object.keys(carro)
console.log(chaves)  // ['marca', 'modelo', 'ano', 'ligar', 'desligar']


const valores = Object.values(carro)
console.log(valores)  // ['Toyota', 'Corolla', 2022, [Function: ligar], [Function (anonymous)] ]


const entradas = Object.entries(carro)
console.log(entradas) 
// [['marca', 'Toyota'], ['modelo', 'Corolla], ['ano', 2022], ['ligar', [Function: ligar]], ['desligar', [Function (anonymous)] ]
console.log(entradas[0])  // [ 'marca', 'Toyota' ]

// ------------------------------------------------------------
// ------------  Variáveis: Objetos - Operações ---------------
// ------------------------------------------------------------

