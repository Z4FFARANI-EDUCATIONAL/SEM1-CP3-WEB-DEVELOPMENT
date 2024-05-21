function criarPost() {
    const escolha = document.getElementById("escolherCategoria").value
    const descricao = document.getElementById("digiPost").value
    const escolhadefoto_1 = document.getElementById("insertImg_1").value
    const escolhadefoto_2 = document.getElementById("insertImg_2").value
    const escolhadefoto_3 = document.getElementById("insertImg_3").value

    const postElementos = {
        escolherNoticias: {
            texto: document.getElementById("texto_noticias"),
            img_1: document.getElementById("img_noticias_1"),
            img_2: document.getElementById("img_noticias_2"),
            img_3: document.getElementById("img_noticias_3")
        },

        escolherDicas: {
            texto: document.getElementById("texto_dicas"),
            img_1: document.getElementById("img_dicas_1"),
            img_2: document.getElementById("img_dicas_2"),
            img_3: document.getElementById("img_dicas_3")
        },

        escolherEventos: {
            texto: document.getElementById("texto_eventos"),
            img_1: document.getElementById("img_eventos_1"),
            img_2: document.getElementById("img_eventos_2"),
            img_3: document.getElementById("img_eventos_3")
        }
    }

    const selecionarElementos = postElementos[escolha]
    if (selecionarElementos) {
        selecionarElementos.texto.innerText = descricao
        selecionarElementos.img_1.src = escolhadefoto_1
        selecionarElementos.img_2.src = escolhadefoto_2
        selecionarElementos.img_3.src = escolhadefoto_3
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
        img = document.getElementById("img_noticias_1")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img.src = "Fotos/noneimg.jpg"
        }
    }

    else if (botaoId === "apagar_dicas") {
        texto = document.getElementById("texto_dicas")
        img = document.getElementById("img_dicas_1")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img.src = "Fotos/noneimg.jpg"
        }
    }

    else if (botaoId === "apagar_eventos") {
        texto = document.getElementById("texto_eventos")
        img = document.getElementById("img_eventos_1")
        
        const deletar = confirm("Tem certeza que deseja excluir essa publicação?")
        if (deletar) {
            texto.innerText = ""
            img.src = "Fotos/noneimg.jpg"
        }
    }
}



s




