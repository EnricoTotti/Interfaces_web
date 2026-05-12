


const btnSalvar = document.getElementById("btnSalvar");
btnSalvar.addEventListener('click', function(){
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");

    const novaOpcao = document.createElement("option");

    novaOpcao.textContent = descricao.value;
    novaOpcao.value = valor.value;

    const produtos = document.getElementById("produtos");
    produtos.append(novaOpcao)

    descricao.value = '';
    valor.value = '';
    descricao.focus();
});

