/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false.*/

function verificaValor (valor) {
    if(valor % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaValor(8))