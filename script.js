
function janela(){
    let categoria = document.getElementById("Categoria")
    if (categoria.value === "janela_1") {
        
        }
}

function criarPost() {
    let descricao = document.getElementById("digiPost").value
    let texto = document.getElementById("nomePost")
    let imgPost_1 = document.getElementById("imgPost_1")
    let escolhadefoto = document.getElementById("insertImg_1").value

    texto.innerText = descricao
    imgPost_1.src = escolhadefoto
}

