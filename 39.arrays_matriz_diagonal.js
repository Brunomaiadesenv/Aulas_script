// Exibir valores de uma matriz com FOR LOOP

let numeros = [
    [ 12, 7, 34, 19, 20],
    [ 10, 89, 21, 65, 66],
    [ 25, 35, 47, 17, 6],
    [ 15, 71, 52, 61, 41]
];

console.table(numeros);


//exibir somente os valores da diagonal esquerda da matriz
for (let i = 0; i < numeros.length; i++) {
 console.log(numeros[i][i]);
    
}


//exibir somente os valores da diagonal direita da matriz
let n = numeros.length
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][n - i - 1]);

}