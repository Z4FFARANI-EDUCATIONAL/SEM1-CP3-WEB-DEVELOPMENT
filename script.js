function criarPost() {
    const escolha = document.getElementById("escolherCategoria").value
    const descricao = document.getElementById("digiPost").value
    const escolhadefoto_1 = document.getElementById("insertImg_1").value
    const escolhadefoto_2 = document.getElementById("insertImg_2").value
    const escolhadefoto_3 = document.getElementById("insertImg_3").value
    const now = new Date()

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
        selecionarElementos.texto.innerText = descricao
        selecionarElementos.img_1.src = escolhadefoto_1
        selecionarElementos.img_2.src = escolhadefoto_2
        selecionarElementos.img_3.src = escolhadefoto_3
        selecionarElementos.registro.innerText = "Data e Hora: " + now.getDate() + "/" + now.getMonth(1) + "/" + now.getFullYear() + ", " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    } 
}


window.onload = function() {
    filtrarCategoria()
}


function filtrarCategoria() {
    const categoria = document.getElementById("filtrarCategoria").value
    const todasCategorias = document.querySelectorAll(".categoria")

    todasCategorias.forEach(div => {
        div.style.display = "none"
    })

    if (categoria === "todas") {
        document.getElementById("noticias").style.display = "block"
        document.getElementById("dicas").style.display = "block"
        document.getElementById("eventos").style.display = "block"
    }   
    else if (categoria === "noticias") {
        document.getElementById("noticias").style.display = "block"
    }
    else if (categoria === "dicas") {
        document.getElementById("dicas").style.display = "block"
    }
    else if (categoria === "eventos") {
        document.getElementById("eventos").style.display = "block"
    }
}


function editar(button) {
    botaoId = button.id

    if (botaoId === "editar_noticias") {
        texto = document.getElementById("texto_noticias")
        const personalizar = prompt("Editar publicação:")
        if (personalizar) {
            texto.innerText = personalizar
        }
    }

    else if (botaoId === "editar_dicas") {
        texto = document.getElementById("texto_dicas")
        const personalizar = prompt("Editar publicação:")
        if (personalizar) {
            texto.innerText = personalizar
        }
    }

    else if (botaoId === "editar_eventos") {
        texto = document.getElementById("texto_eventos")
        const personalizar = prompt("Editar publicação:")
        if (personalizar) {
            texto.innerText = personalizar
        }
    }
}


function apagar(button) {
    botaoId = button.id

    if (botaoId === "apagar_noticias") {
        texto = document.getElementById("texto_noticias")
        img_1 = document.getElementById("img_noticias_1")
        img_2 = document.getElementById("img_noticias_2")
        img_3 = document.getElementById("img_noticias_3")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img_1.src = "Fotos/noneimg.jpg"
            img_2.src = "Fotos/noneimg.jpg"
            img_3.src = "Fotos/noneimg.jpg"
        }
    }

    else if (botaoId === "apagar_dicas") {
        texto = document.getElementById("texto_dicas")
        img_1 = document.getElementById("img_dicas_1")
        img_2 = document.getElementById("img_dicas_2")
        img_3 = document.getElementById("img_dicas_3")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img_1.src = "Fotos/noneimg.jpg"
            img_1.src = "Fotos/noneimg.jpg"
            img_1.src = "Fotos/noneimg.jpg"
        }
    }

    else if (botaoId === "apagar_eventos") {
        texto = document.getElementById("texto_eventos")
        img_1 = document.getElementById("img_eventos_1")
        img_2 = document.getElementById("img_eventos_2")
        img_3 = document.getElementById("img_eventos_3")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img_1_.src = "Fotos/noneimg.jpg"
            img_2.src = "Fotos/noneimg.jpg"
            img_3.src = "Fotos/noneimg.jpg"
        }
    }
}


let contador = 1;

function nextSlide_noticias() {
    const posicao = document.getElementById("carrossel_noticias")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("next_1")
        contador = 2

    } else if (contador === 2) {
        posicao.classList.add("next_2")
        contador = 3

    } else if (contador === 3) {
        posicao.classList.add("next_3")
        contador = 1
    }
}
function prevSlide_noticias() {
    const posicao = document.getElementById("carrossel_noticias")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("prev_1")
        contador = 3

    } else if (contador === 2) {
        posicao.classList.add("prev_2")
        contador = 1  

    } else if (contador === 3) {
        posicao.classList.add("prev_3")
        contador = 2
    }
}


function nextSlide_dicas() {
    const posicao = document.getElementById("carrossel_dicas")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("next_1")
        contador = 2

    } else if (contador === 2) {
        posicao.classList.add("next_2")
        contador = 3 

    } else if (contador === 3) {
        posicao.classList.add("next_3")
        contador = 1
    }
}
function prevSlide_dicas() {
    const posicao = document.getElementById("carrossel_dicas")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("prev_1")
        contador = 3

    } else if (contador === 2) {
        posicao.classList.add("prev_2")
        contador = 1  

    } else if (contador === 3) {
        posicao.classList.add("prev_3")
        contador = 2
    }
}


function nextSlide_eventos() {
    const posicao = document.getElementById("carrossel_eventos")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("next_1")
        contador = 2

    } else if (contador === 2) {
        posicao.classList.add("next_2")
        contador = 3 

    } else if (contador === 3) {
        posicao.classList.add("next_3")
        contador = 1
    }
}
function prevSlide_eventos() {
    const posicao = document.getElementById("carrossel_eventos")

    posicao.classList.remove("next_1", "next_2", "next_3", "prev_1", "prev_2", "prev_3")

    if (contador === 1) {
        posicao.classList.add("prev_1")
        contador = 3

    } else if (contador === 2) {
        posicao.classList.add("prev_2")
        contador = 1  

    } else if (contador === 3) {
        posicao.classList.add("prev_3")
        contador = 2
    }
}


function time() {

}

