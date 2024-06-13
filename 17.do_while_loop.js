// Estrutura de repetição do While

const ler = require("readline-sync");

let soma = 0, num = 0;

do {

    soma += num;
    num = ler.questionInt("Digite um numero ou -1 para sair: ")



}while (num > 0) {

    console.log("A soma dos numeros digitados é: ", soma);
    
}