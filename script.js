function criarPost() {  
    const escolha = document.getElementById("escolherCategoria").value;
    const descricao = document.getElementById("digiPost").value;
    const escolhadefoto_1 = document.getElementById("insertImg_1").value;
    const escolhadefoto_2 = document.getElementById("insertImg_2").value;
    const escolhadefoto_3 = document.getElementById("insertImg_3").value;
    const now = new Date();
    const month = now.getMonth() + 1;

    const postElementos = {
        escolherNoticias: {
            texto: document.getElementById("texto_noticias"),
            img_1: document.getElementById("img_noticias_1"),
            img_2: document.getElementById("img_noticias_2"),
            img_3: document.getElementById("img_noticias_3"),
            registro: document.getElementById("data_noticias")
        },

        escolherDicas: {
            texto: document.getElementById("texto_dicas"),
            img_1: document.getElementById("img_dicas_1"),
            img_2: document.getElementById("img_dicas_2"),
            img_3: document.getElementById("img_dicas_3"),
            registro: document.getElementById("data_dicas")
        },

        escolherEventos: {
            texto: document.getElementById("texto_eventos"),
            img_1: document.getElementById("img_eventos_1"),
            img_2: document.getElementById("img_eventos_2"),
            img_3: document.getElementById("img_eventos_3"),
            registro: document.getElementById("data_eventos")
        }
    }

    const selecionarElementos = postElementos[escolha]
    if (selecionarElementos) {
        selecionarElementos.texto.innerText = descricao;
        selecionarElementos.img_1.src = escolhadefoto_1;
        selecionarElementos.img_2.src = escolhadefoto_2;
        selecionarElementos.img_3.src = escolhadefoto_3;
        selecionarElementos.registro.innerText = "Publicado em " + now.getDate() + "/" + month + "/" + now.getFullYear() + ", " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    }
    if (escolhadefoto_1 === "") {
        selecionarElementos.img_1.src = "Fotos/default.png";
    }
    if (escolhadefoto_2 === "") {
        selecionarElementos.img_2.src = "Fotos/default.png";
    }
    if (escolhadefoto_3 === "") {
        selecionarElementos.img_3.src = "Fotos/default.png";
    }
}


window.onload = function() {
    filtrarCategoria();
}


function filtrarCategoria() {
    const categoria = document.getElementById("filtrarCategoria").value;
    const todasCategorias = document.querySelectorAll(".categoria");

    todasCategorias.forEach(div => {
        div.style.display = "none";
    })

    if (categoria === "todas") {
        document.getElementById("noticias").style.display = "block";
        document.getElementById("dicas").style.display = "block";
        document.getElementById("eventos").style.display = "block";
    }   
    else if (categoria === "noticias") {
        document.getElementById("noticias").style.display = "block";
    }
    else if (categoria === "dicas") {
        document.getElementById("dicas").style.display = "block";
    }
    else if (categoria === "eventos") {
        document.getElementById("eventos").style.display = "block";
    }
}


function editar(button) {
    botaoId = button.id;

    if (botaoId === "editar_noticias") {
        texto = document.getElementById("texto_noticias");
        const personalizar = prompt("Editar post:");
        if (personalizar) {
            texto.innerText = personalizar;
        }
    }

    else if (botaoId === "editar_dicas") {
        texto = document.getElementById("texto_dicas");
        const personalizar = prompt("Editar post:");
        if (personalizar) {
            texto.innerText = personalizar;
        }
    }

    else if (botaoId === "editar_eventos") {
        texto = document.getElementById("texto_eventos");
        const personalizar = prompt("Editar post:");
        if (personalizar) {
            texto.innerText = personalizar;
        }
    }
}


function apagar(button) {
    botaoId = button.id;

    if (botaoId === "apagar_noticias") {
        texton = document.getElementById("texto_noticias");
        img_1n = document.getElementById("img_noticias_1");
        img_2n = document.getElementById("img_noticias_2");
        img_3n = document.getElementById("img_noticias_3");
        
        const deletar = confirm("Tem certeza que deseja apagar este post?");
        if (deletar) {
            texton.innerText = "";
            img_1n.src = "Fotos/default.png";
            img_2n.src = "Fotos/default.png";
            img_3n.src = "Fotos/default.png";
        }
    }

    else if (botaoId === "apagar_dicas") {
        textod = document.getElementById("texto_dicas");
        img_1d = document.getElementById("img_dicas_1");
        img_2d = document.getElementById("img_dicas_2");
        img_3d = document.getElementById("img_dicas_3");
        
        const deletar = confirm("Tem certeza que deseja apagar este post?");
        if (deletar) {
            textod.innerText = "";
            img_1d.src = "Fotos/default.png";
            img_2d.src = "Fotos/default.png";
            img_3d.src = "Fotos/default.png";
        }
    }

    else if (botaoId === "apagar_eventos") {
        textoe = document.getElementById("texto_eventos");
        img_1e = document.getElementById("img_eventos_1");
        img_2e = document.getElementById("img_eventos_2");
        img_3e = document.getElementById("img_eventos_3");
        
        const deletar = confirm("Tem certeza que deseja apagar este post?");
        if (deletar) {
            textoe.innerText = "";
            img_1e.src = "Fotos/default.png";
            img_2e.src = "Fotos/default.png";
            img_3e.src = "Fotos/default.png";
        }
    }
}


let contador_noticias = 0;
let contador_dicas = 0;
let contador_eventos = 0;

function nextSlide_noticias() {
    contador_noticias += 1
    const posicao = document.getElementById("carrossel_noticias");
    console.log(contador_noticias)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");

    if (contador_noticias === 1) {
        posicao.classList.add("next_1");
        
    } else if (contador_noticias === 2) {
        posicao.classList.add("next_2");
    }
    else {
        contador_noticias = 0;
    }
}
function prevSlide_noticias() {
    contador_noticias -= 1
    const posicao = document.getElementById("carrossel_noticias");
    console.log(contador_noticias)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");
    
    if (contador_noticias === 0) {
        posicao.classList.add("prev_3");

    } else if (contador_noticias === 1) {
        posicao.classList.add("prev_2");
    }
    else {
        contador_noticias = 0;
    }
}

function nextSlide_dicas() {
    contador_dicas += 1
    const posicao = document.getElementById("carrossel_dicas");
    console.log(contador_dicas)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");

    if (contador_dicas === 1) {
        posicao.classList.add("next_1");
        
    } else if (contador_dicas === 2) {
        posicao.classList.add("next_2");
    }
    else {
        contador_dicas = 0;
    }
}
function prevSlide_dicas() {
    contador_dicas -= 1
    const posicao = document.getElementById("carrossel_dicas");
    console.log(contador_dicas)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");
    
    if (contador_dicas === 0) {
        posicao.classList.add("prev_3");

    } else if (contador_dicas === 1) {
        posicao.classList.add("prev_2");
    }
    else {
        contador_dicas = 0;
    }
}

function nextSlide_eventos() {
    contador_eventos += 1
    const posicao = document.getElementById("carrossel_eventos");
    console.log(contador_eventos)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");

    if (contador_eventos === 1) {
        posicao.classList.add("next_1");
        
    } else if (contador_eventos === 2) {
        posicao.classList.add("next_2");
    }
    else {
        contador_eventos = 0;
    }
}
function prevSlide_eventos() {
    contador_eventos -= 1
    const posicao = document.getElementById("carrossel_eventos");
    console.log(contador_eventos)

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3");
    
    if (contador_eventos === 0) {
        posicao.classList.add("prev_3");

    } else if (contador_eventos === 1) {
        posicao.classList.add("prev_2");
    }
    else {
        contador_eventos = 0;
    }
}

