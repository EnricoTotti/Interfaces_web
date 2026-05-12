const btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener('click', function(){
    const descricao = document.getElementById("descricao");
    const endereco = document.getElementById("endereco");

    const lista = document.getElementById("links");

    const novoLink = document.createElement("li");
    const novoEndereco = document.createElement("a");

    novoEndereco.textContent = descricao.value;
    novoEndereco.href = endereco.value;

    novoLink.append(novoEndereco);

    lista.append(novoLink);
    
    descricao.value = '';
    endereco.value = '';
    descricao.focus();

});