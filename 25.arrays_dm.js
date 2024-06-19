// Arrays Manipulação de dados

let animais = ["gato", "cachorro", "girafa","leão","macaco", "banana"]

let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23, 1]

console.log("------------Exibindo os itens iniciando com arrays------------");
console.log(animais);
console.log(numeros);

//Adicionar um valor no final do Array
animais.push("coelho");
numeros.push(88);
console.log("------------Exibindo novos dados nos arrays------------");
console.log(animais);
console.log(numeros);

//Excluir um valor no final do Array
animais.pop();
numeros.pop();
console.log("------------Excluir dados no final do arrays------------");
console.log(animais);
console.log(numeros);

//Adicionar um valor no inicio do array
animais.unshift("jacare");
numeros.unshift("jacare");(99);
console.log("------------adicionar dados no inicio do arrays------------");
console.log(animais);
console.log(numeros);


//excluir um valor no inicio do array
animais.shift("jacare");
numeros.shift("jacare");(99);
console.log("------------Exibindo os arrays sem os primeiros dados------------");
console.log(animais);
console.log(numeros);


//organizar os dados do array em ordem alfabetica
animais.sort();
numeros.sort();
console.log("------------Exibindo os arrays em ordem alfabetica------------");
console.log(animais);
console.log(numeros);

//organizar os dados do array em ordem contraria
animais.reverse();
numeros.reverse();
console.log("------------Exibindo os arrays em ordem contraria------------");
console.log(animais);
console.log(numeros);
