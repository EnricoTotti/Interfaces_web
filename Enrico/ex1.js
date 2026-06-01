//ex1

function adicionarTexto(){
    //pegar o valor do texto
    const novotexto = document.getElementById("campotexto");
    const campotexto = document.getElementById("texto");
    const texto =  document.createElement("p");
    texto.textContent = novotexto.value;
    campotexto.append(texto);
};    


function diminuirTexto(){
    const campotexto = document.getElementById("texto");
    let tamanho = window.getComputedStyle(campotexto).fontSize;
    var novoTamanho = parseInt(tamanho) - 1;
    campotexto.style.fontSize = novoTamanho + "px"; 
}

function aumentarTexto(){
    const campotexto = document.getElementById("texto");
    let tamanho = window.getComputedStyle(campotexto).fontSize;
    var novoTamanho = parseInt(tamanho) + 1;
    campotexto.style.fontSize = novoTamanho + "px";
}

function adicionarNegrito(){
    const campotexto = document.getElementById("texto");
    
    if(campotexto.style.fontWeight == "bold"){
        campotexto.style.fontWeight = "normal";
    }
    else{
        campotexto.style.fontWeight = "bold";
    }
    
}

function adicionarItalico(){
    const campotexto = document.getElementById("texto");
    
    if(campotexto.style.fontStyle == "italic"){
        campotexto.style.fontStyle = "normal";
    }
    else{
        campotexto.style.fontStyle = "italic";
    }
    
}

window.onload = function(){
    const btnSalvar = document.getElementById("btnSalvar");
    const btnDiminuir = document.getElementById("diminuir");
    const btnAumentar = document.getElementById("aumentar");
    const btnNegrito = document.getElementById("negrito");
    const btnItalico = document.getElementById("italico");

    btnSalvar.addEventListener('click', function(){
        adicionarTexto();
    });

    btnDiminuir.addEventListener('click', function(){
        diminuirTexto();
    });

    btnAumentar.addEventListener('click', function(){
        aumentarTexto();
    });

    btnNegrito.addEventListener('click', function(){
        adicionarNegrito();
    });

    btnItalico.addEventListener('click', function(){
        adicionarItalico();
    });
}