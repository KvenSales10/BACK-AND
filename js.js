function iniciarCompra() {
    const cliente = {
        nome: prompt('Digite seu nome:'),
        cpf: prompt('Digite seu CPF:'),
        saldo: parseFloat(prompt('Digite seu saldo disponível:'))
    };

    const produtos = [
        { nome: 'Notebook', preco: 2500.00 },
        { nome: 'Mouse Gamer', preco: 150.00 },
        { nome: 'Teclado Mecânico', preco: 300.00 },
        { nome: 'Monitor 27', preco: 1200.00 }
    ];

    const listaProdutos = produtos.map(p => ${p.nome} (R$ ${p.preco.toFixed(2)})).join('\n');
    const produtoDesejadoNome = prompt(Produtos disponíveis:\n${listaProdutos}\n\nDigite o nome do produto que deseja comprar:);

    const produtoEmEstoque = produtos.find(p => p.nome.toLowerCase() === produtoDesejadoNome.toLowerCase());

    if (!produtoEmEstoque) {
        alert('Compra falhou: Produto não encontrado em estoque.');
        return;
    }

    const precoProduto = produtoEmEstoque.preco;

    if (cliente.saldo >= precoProduto) {
        cliente.saldo -= precoProduto;
        alert(Parabéns pela compra, ${cliente.nome}!\nVocê comprou: ${produtoEmEstoque.nome}.\nSeu novo saldo é: R$ ${cliente.saldo.toFixed(2)}.);
    } else {
        alert(Saldo insuficiente, ${cliente.nome}.\nProduto: R$ ${precoProduto.toFixed(2)}\nSeu saldo atual: R$ ${cliente.saldo.toFixed(2)});
    }
}