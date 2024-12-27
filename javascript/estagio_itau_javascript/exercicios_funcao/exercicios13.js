/* Faça um algoritmo que calcule o fatorial de um número. 
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaDaSemana (numero) {
    switch (numero){
        case 1:
            return "fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "dia util"
        case 7:
            return "fim de semana"
        default:
            return "invalido"
    }
}

console.log(diaDaSemana(7))