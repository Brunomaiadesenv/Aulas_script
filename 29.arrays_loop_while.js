const ler = require('readline-sync');

let frutas = [];
let check = true;


while (check) {

    let fruta = ler.question("Informe um nome de fruta ou digite sair para Finalizar: ").toLowerCase();

    if (fruta === 'sair') {
        check = false;
        
    } else {
        frutas.push(fruta);
        
    }
    
}

console.log("As frutas cadastradas foram: -----------------");

for (let i = 0; i < frutas.length; i++) {
   console.log(`=> ${frutas[i]}`);
    
}