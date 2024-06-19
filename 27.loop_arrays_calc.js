//Manipulando os dados do array utilizando o loop for

let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23, 1];
let soma = 0


for (let i = 0; i < numeros.length; i++) {

    console.log(`valor ${i}: ${numeros[i]} +`);
    soma += numeros[i]; //Soma  = soma + numeros[i]

}

console.log(`Total: ${soma}`);

