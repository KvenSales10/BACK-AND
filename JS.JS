
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let genero = prompt("Digite seu gênero:");
let estado_civil = prompt("Digite seu estado civil:");


idade = parseInt(idade);


let classificacao_idade = "";

if (idade < 18) {
    classificacao_idade = "menor de idade";
} else {
    classificacao_idade = "maior de idade";
}


let mensagem = `Nome: ${nome}
Idade: ${idade}
Gênero: ${genero}
Estado Civil: ${estado_civil}
Classificação: ${classificacao_idade}`;

alert(mensagem);


console.log("===== DADOS DO USUÁRIO =====");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Gênero:", genero);
console.log("Estado Civil:", estado_civil);
console.log("Classificação:", classificacao_idade);
