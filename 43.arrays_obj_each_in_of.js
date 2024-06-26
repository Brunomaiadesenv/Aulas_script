//Exibindo as informações de um objeto/array com loop FOR EACH IN OF

let produtos = [
    { nome: "Camiseta", preco: 29.99, quantidade: 100 },
    { nome: "Tênis", preco: 129.99, quantidade: 50 },
    { nome: "Mochila", preco: 79.90, quantidade: 80 },
    { nome: "Celular", preco: 1499.00, quantidade: 20 },
    { nome: "Livro", preco: 39.90, quantidade: 120 },
    { nome: "Fone de Ouvido", preco: 99.99, quantidade: 60 },
    { nome: "Calça Jeans", preco: 69.90, quantidade: 90 },
    { nome: "Relógio", preco: 199.50, quantidade: 30 }
];

// Nomes dos produtos valores maiores que 500 reais
produtos.forEach(produto => {
    if (produto.preco > 500) {
        console.log(`Produto: ${produto.nome} - Valor: ${produto.preco}`);
               
    }

})

console.log("-----------------------------------------------------------");

//nome dosprodutos com valores menores que 300, soma total de cada um e valor geral
let soma , total = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 300) {
        soma = produtos[produto].preco * produtos[produto].quantidade;
        total += soma; // total = total + soma
        console.log(`=> Produto : ${produtos[produto].nome} - Total: ${soma.toFixed(2)}`);      
    }
}

console.log(`Resultado Geral: ${total.toFixed(2)}`);


//Nome dos produtos maiores que 800 e com quantidades no estoque menor que 3
for (const produto of produtos) {
    if(produtos.preco > 800 && produto.quantidade < 3) {

        console.log(`=> Produto: ${produto.nome} - quantidade: ${produto.preco}`);
        
    }
    
}