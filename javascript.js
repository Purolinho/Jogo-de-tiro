var inimigo0 = document.getElementById("inimigo0")
var inimigo1 = document.getElementById("inimigo1")
var inimigo2 = document.getElementById("inimigo2")
var inimigo3 = document.getElementById("inimigo3")
var inimigo4 = document.getElementById("inimigo4")

var body = document.getElementById("body")


var inimigosMortos = [];
var quantidade_mortos = 0

var tempo = 0
var atualizartempo = setInterval(() => {
    tempo++
}, 1000);


var jogo = document.getElementById("jogo").style.marginTop = "40vh"

var vida = 50
var acertou = false

function atualizarVida() {

    var BarraVida = document.getElementById("vida")
    BarraVida.style.width = vida + "vw"
    if(vida <= 0) {
        clearInterval(atualizartempo)
        var tela = document.getElementById("tela")
        tela.style.zIndex = 1
        tela.style.opacity = '100%'
        var reiniciar = document.getElementById("reiniciar").addEventListener("click", jogarNovamente)
        var derrotaMorte = document.getElementById("derrota/mortes").innerHTML = "Inimigos mortos: " + quantidade_mortos
        var derrotaTempo = document.getElementById("derrota/tempo").innerHTML = "Tempo de jogo: " + tempo + " segundos"

        function jogarNovamente() {
            location.href = "index.html"
        }
    }

}

setInterval(atualizarVida, 100)


function escolher() {

    var inimigo = Math.floor(Math.random() * 5)

    switch (inimigo) {
        case 0:
            if(inimigo0.classList.contains("morto") == false) {
            inimigosMortos.push("inimigo0")
            aparecer(inimigo0)
            }
            break;
            
        case 1:
            if(inimigo1.classList.contains("morto") == false) {
            aparecer(inimigo1)
            inimigosMortos.push("inimigo1")
            }
            break;
    
        case 2:
            if(inimigo2.classList.contains("morto") == false) {
            aparecer(inimigo2)
            inimigosMortos.push("inimigo2")
            }
            break;
    
        case 3:
            if(inimigo3.classList.contains("morto") == false) {
            aparecer(inimigo3)
            inimigosMortos.push("inimigo3")
            }
            break;
    
        case 4:
            if(inimigo4.classList.contains("morto") == false) {
            aparecer(inimigo4)
            inimigosMortos.push("inimigo4")
            }
            break;
    }
}

setInterval(escolher, 500)

inimigo0.addEventListener("click", atirar)
inimigo1.addEventListener("click", atirar)
inimigo2.addEventListener("click", atirar)
inimigo3.addEventListener("click", atirar)
inimigo4.addEventListener("click", atirar)


var InimigoAtirar;

function aparecer(e) {
    e.style.marginTop = "0vh"

    InimigoAtirar = setTimeout(() => {
        acertou = true
    }, 3500);

    setTimeout(() => {
        e.classList.remove("morto")
        e.style.backgroundColor = "wheat"
    }, 2000);
    
    if(acertou == true) {
        vida -= 6
        body.style.background = "radial-gradient(black, red)"
        setTimeout(() => {
            body.style.background = "black"
        }, 200);
    }
}


function atirar() {
    let key = this
    key.classList.add("morto")
    key.style.transition = "0"
    key.style.backgroundColor = "black"
    key.style.transition = "0.5s"
    key.style.marginTop = "62vh"
    acertou = false
    quantidade_mortos++
    var quantidade = document.getElementById("quantidade").innerHTML = "Inimigos Mortos: " + quantidade_mortos
    clearInterval(InimigoAtirar)

}
