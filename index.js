var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")

var right = window.document.getElementById("seta-direita")
var left = window.document.getElementById("seta-esquerda")

function rolarDireita() {
    bruna.style = "display:none"
    samantha.style = "display:flex"
    right.style = "display:none"
    left.style = "display:flex; margin-top:55px"
}

function rolarEsquerda() {
    bruna.style = "display:flex"
    samantha.style = "display:none"
    right.style = "display:flex; margin-top:55px"
    left.style = "display:none"
}
