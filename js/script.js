const altura = window.innerHeight;
const largura = window.innerWidth;

const botaoNao = document.querySelector(".botao-nao");

const larguraBotao = botaoNao.offsetWidth;
const alturaBotao = botaoNao.offsetHeight;

console.log(larguraBotao)
console.log(alturaBotao)

const texto = document.querySelector(".textinho");

let numero = 0;

function randomNumber(size, buttonSize) {
    return Math.floor(Math.random() * (size - buttonSize));
}

function nao() {
    let posicaoX = randomNumber(largura, larguraBotao);
    let posicaoY = randomNumber(altura, alturaBotao); 

    while (posicaoY > 330 && posicaoY < 530) {
        posicaoY = randomNumber(altura, alturaBotao);
    }

    botaoNao.style.left = `${posicaoX}px`;
    botaoNao.style.top = `${posicaoY}px`;

    if (numero === 0) {
        texto.innerHTML = "Como assim não vai me dar ??";
    } else if (numero === 1) {
        texto.innerHTML = "Ai voce me complica né gata";
    } else if (numero === 2) {
        texto.innerHTML = "Já deu de gracinha né ??";
    } else if (numero === 3) {
        texto.innerHTML = "Bora liberar esse rabão ai ??";
    } else if (numero === 4) {
        texto.innerHTML = "VAI ME DAR SIMMM😡😡";
    } else if (numero === 5) {
        texto.innerHTML = "Dar o cu não quer né ??";
    } else if (numero === 6) {
        texto.innerHTML = "Vamos aceitar vamos ??";
    } else if (numero === 7) {
        texto.innerHTML = "Desisto viu";
    } else if (numero === 8) {
        texto.innerHTML = "Mais se voce ainda quiser eu quero 👿👿";
        numero = 0;
    }
    numero++;
}

function sim() {
    alert("EEEEEBBBAAAAAAAAAAAAAAAAAAA VAI ME DAR A BUCETAAAAAAA");
    window.location.href = "https://vm.tiktok.com/ZMSFhBj6c/";
}