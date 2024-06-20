//Utilizando Arrays bidimensionais - MATRIZ

let usuarios = [
    {nome: "Marta Rocha", idade: 46, email: "marta@gmail.com"},
    {nome: "Marcos Senna", idade: 24, email: "marcos@gmail.com"},
    {nome: "Luiz Silva", idade: 19, email: "lulu@gmail.com"},
    {nome: "Jonas Maia", idade: 21, email: "jonas@gmail.com"}
]

//exibir toda a tabelas
console.table(usuarios);
//exibir somente o nome
console.log(usuarios[1].nome);
//exibir toda a linha
console.log(usuarios[3]);

usuarios.push(nome: "Rogerio Matias", idade: 22, email: "rogerio@gmail.com");
