// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

console.log('Minha ideia é maior que a da minha amiga', minhaIdade > idadeAmiga)
console.log('Minha diferencia de idade é:', minhaIdade % idadeAmiga)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro, e nao vou passear de carro'

// !b && d // E 
// (b && a) && !d 
// a || d // 0U
// c && !d
