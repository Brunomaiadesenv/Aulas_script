// Blocos de Variaveis Locais e Globais

let num1 = 100; // Variavel Global
    {

        let num2= 30; // Variavel Local
        console.log(num1);
        console.log(num2);
            {
                console.log(num2);
            }
    }

console.log(num1);
// console.log(num2);
