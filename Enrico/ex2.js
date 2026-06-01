let proximoId = 1;

listaProdutos = [];

function salvarProduto() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const qtd = parseInt(document.getElementById("estoqueInicial").value);

    if (nome === "" || isNaN(qtd)) {
        alert("Valores inválidos");
        return;
    }
    
    const novoProduto = {
        id: proximoId,
        nome: nome,
        estoque: qtd
    };
    listaProdutos.push(novoProduto);

    const tabelaBody = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
    const novaLinha = tabelaBody.insertRow();
    novaLinha.id = proximoId;

    const celulaId = novaLinha.insertCell(0);
    const celulaNome = novaLinha.insertCell(1);
    const celulaEstoque = novaLinha.insertCell(2);

    celulaId.innerHTML = novoProduto.id;
    celulaNome.innerHTML = novoProduto.nome;
    celulaEstoque.innerHTML = novoProduto.estoque;

    proximoId++;
}

function atualizarProduto(){
    const idDigitado = parseInt(document.getElementById("idProduto").value);
    const qtdMovimentacao = parseInt(document.getElementById("quantidadeMovimentacao").value);
    
    const elementoOperacao = document.querySelector('input[name="operacao"]:checked');

    if (isNaN(idDigitado) || isNaN(qtdMovimentacao) || qtdMovimentacao <= 0 || !elementoOperacao) {
        alert("Por favor, preencha o ID e uma quantidade válida.");
        return;
    }

    const operacao = elementoOperacao.value;
    const produto = listaProdutos.find(p => p.id === idDigitado);

    if (!produto) {
        alert("Produto com o ID informado não foi encontrado!");
        return;
    }

    if (operacao === "adicionar") {
        produto.estoque += qtdMovimentacao;
    } 
    else { 
        if (produto.estoque - qtdMovimentacao < 0) {
            alert("Operação inválida: Estoque insuficiente.");
            return;
        }
        produto.estoque -= qtdMovimentacao;
    }
    
    const linhaTabela = document.getElementById(idDigitado);
    
    if (linhaTabela) {
        linhaTabela.cells[2].innerHTML = produto.estoque;
    }

    document.getElementById("idProduto").value = "";
    document.getElementById("quantidadeMovimentacao").value = "";
}



window.onload = function () {
    const btnSalvar = document.getElementById("btnSalvar");
    const btnAtualizar = document.getElementById("btnAtualizar")

    btnSalvar.addEventListener('click', function () {
        salvarProduto();
    });

    btnAtualizar.addEventListener('click', function () {
        atualizarProduto();
    });
}