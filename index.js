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

// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2021,
//     ligar: function(){
//         console.log(`O ${this.modelo} carro está ligado.`)
//     }
// }
// carro.ligar()  // O carro está ligado.


// carro.desligar = function(){
//     console.log(`O ${this.modelo} carro está desligado.`)
// }
// carro.desligar()


// ------------------------------------------------------------
// ------------  Variáveis: Objetos - Operações ---------------
// ------------------------------------------------------------

// 1. Método Object.keys: Retorna um array com os nomes das prorpiedades enumeráveis de um objeto.
// 2. Método Object.values: Retorna um array com os valores das propriedades enumeráveis de um objeto.
// 3. Método Object.entries: Retorna um array de arrays, onde cade sub-array contém um par chave-valor.


// const chaves = Object.keys(carro)
// console.log(chaves)  // ['marca', 'modelo', 'ano', 'ligar', 'desligar']


// const valores = Object.values(carro)
// console.log(valores)  // ['Toyota', 'Corolla', 2022, [Function: ligar], [Function (anonymous)] ]


// const entradas = Object.entries(carro)
// console.log(entradas) 
// // [['marca', 'Toyota'], ['modelo', 'Corolla], ['ano', 2022], ['ligar', [Function: ligar]], ['desligar', [Function (anonymous)] ]
// console.log(entradas[0])  // [ 'marca', 'Toyota' ]

// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// -----------------  Condicionais - If/Else  -----------------
// ------------------------------------------------------------

// If/Else: Executa um bloco de código se uma condição for cerdadeira; caso contrário, executa outro bloco de código.

// 1. if
// 2. if / else
// 3. if / else if / else

// const idade = 20

// if (idade >= 18){
//     console.log('Adulto')
// }


// if(idade >= 18) {
//     console.log('Adulto')
// } else {
//     console.log('Menor de idade')
// }


// const nota = 85

// if (nota >= 90) {
//     console.log('A')
// } else if (nota >= 80) {
//     console.log('B') 
// } else if (nota >= 70) {
//     console.log('C')
// } else if (nota >= 60) {
//     console.log('D')
// } else {
//     console.log('F')
// }

// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// ------------------  Condicionais - Switch  -----------------
// ------------------------------------------------------------

// Switch: Executa um bloco de código entre vários, baseado no valor de uma expressão.

// const dia = 'terça'

// switch (dia) {
//     case 'segunda':
//         console.log('Hoje é segunda-feira')
//         break
//     case 'terça':
//         console.log('Hoje é terça-feira')
//         break
//     default:
//         console.log('Hoje não é segunda nem terça-feira')
// }


// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// --------------------  Loops - For Loop  --------------------
// ------------------------------------------------------------

// For Loop: Executa um bloco de código um numero específico de vezes

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }


// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// -------------------  Loops - For ...in  --------------------
// ------------------------------------------------------------

// 1. For ...in com Arrays: Itera sobre todos os índices de um array.
// 2. For ...in com Objetos: Itera sobre todas as propriedades enumeráveis de um objeto.

// const frutas = ['maça', 'banana', 'laranja']

// for (const indice in frutas) {
//     console.log(`${indice}: ${frutas[indice]}`)
// }


// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     cidade: 'São Paulo'
// }

// for (const i in pessoa) {
//     console.log(`${i}: ${pessoa[i]}`)
// }

// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// -------------------  Loops - For ...of  --------------------
// ------------------------------------------------------------


// 1. For ...of com Arrays: Itera sobre todos os elementos de um array.
// 2. For ...of com Strings: Itera sobre os caracteres de uma string.

// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     console.log(numero)
// }


// const saudacao = 'Olá'

// for (const letra of saudacao) {
//     console.log(letra)
// }


// ------------------------------------------------------------
// -----------------  Estruturas de controle: -----------------
// ------------------- Loops - While Loop ---------------------
// ------------------------------------------------------------

// While Loop Executa um bloco de código enquanto uma condição for verdadeira.

// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }


// ------------------------------------------------------------
// -----  Estruturas de controle: - Loops - Do While Loop -----
// ------------------------------------------------------------

// Do While Loop: Executa um bloco de código pelo menos uma vez, e depois continua a execução enquanto uma consição for verdadeira.

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 5)


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// ------------------------------------------------------------

// Declaração de Função: Bloco de código que pode ser reutilizado. Pode receber parâmetros e retornar um valor.

//              Parametro
// function saudacao(nome) {
//     return `Olá, ${nome}`
// }
// console.log(saudacao('Maria'))
//                  Argumento


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// ----------  Funções Anônimas e Arrow Functions -------------
// ------------------------------------------------------------

// Funções Anônimas e Arrow Functions: Formas alternativas de declarar funções, com sintaxe mais concisa.

// 1. Função anônima
// 2. Arrow Functions
// Arrow function reduzida

// const saudacaoAnonima = function(nome) {
//     return `Olá, ${nome}`
// }
// console.log(saudacaoAnonima('João'))


// const saudacaoArrow = (nome) => {
//     return `Olá, ${nome}`
// }
// console.log(saudacaoArrow('Ana'))


// const saudacaoArrowReduzida = (nome) => `Olá, ${nome}`
// console.log(saudacaoArrowReduzida('Pedro'))


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// ------------  Funções Com return vs Sem return -------------
// ------------------------------------------------------------

// 1. Com return: A função retorna um valor que pode ser usado posteriormente.
// 2. Sem return: A função executa uma ação, mas não retorna um valor.

// function soma(a, b) {
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)


// function mostrarMensagem(mensagem) {
//     console.log(mensagem)
// }
// mostrarMensagem('Olá, Mundo!')


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// -------------  Escopo de Função e de Bloco -----------------
// ------------------------------------------------------------

// 1. Escopo de Função: variáveis definidas dentro de uma função não são acessíveis fora dela.
// 2. Escolo de Bloco: Variáveis definidas dentro de um bloco ( {} ) são acessíveis apenas dentro deste bloco.

// function exemploEscopo() {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem)
// }
// exemploEscopo()
// // console.log(mensagem)


// if (true) {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem)
// }
// // console.log(mensagem)


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// ------------------  Funções Assíncronas --------------------
// ------------------------------------------------------------

// Funções Assíncronas: Funções que permitem o uso de operações assíncronas, como chamadas de rede sem bloquear o fluxo do programa.

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://api.exemplo.com/dados')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error)
//     }
// }
// fetchData()


// ------------------------------------------------------------
// -------------------  Funções e Escopo ----------------------
// -------------------  Funções Callbaks ----------------------
// ------------------------------------------------------------

// 2. Callbacks: Funções passadas como argumentos para outras funções, permitindo a execução assíncrona de código após a conclusão de uma operação.

// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Dados recebidos')
//     }, 1000)
// }
// fetchData((mensagem) => {
//     console.log(mensagem)
// })


// ------------------------------------------------------------
// -------------  Tratamento de Erros e Exceções --------------
// ----------------------  Try/Catch --------------------------
// ------------------------------------------------------------

// Try/Catch: Blocos de código que permitem capturar e tratar erros durante a execução de operações assíncronas

// try {
//     const resultado = someFunction()
//     console.log(resultado)
// } catch (error) {
//     console.error('Erro:', error)
// }


// ------------------------------------------------------------
// --------------------  Uso de Módulos -----------------------
// --------------  Require/Import Statements ------------------
// ------------------------------------------------------------

// Importação e Exportação de Módulos: Permite a modularização do código, facilitando a organização e reutilização de funcionalidades em diferentes partes do projeto.

// 1. modulo.js
// 2. index.js

// export function saudacao(nome) {
//     return `Olá, ${nome}`
// }


// import {saudacao} from './modulo.js'
// console.log(saudacao('Maria'))


