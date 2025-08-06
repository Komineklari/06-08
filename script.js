const botãoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");
    campoResultado.textContent = palavrasChave .Join (",");
}

function processaTexto (texto) {
    let palavras = texto.split(/\P{L}+/u);
     const frequencia = contaFrequencias(palavras)
    let frequencias = [];
    for(let i in palavras) {
        frequencias [i] = 0;
    }
    
    console.log(frequencias)
    
    return plalavras;
}
function contaFrequencias (palavras) {
    let frequencias = {};
    for(let i of palavras) {
        frequencias [i] = 0;
        for (let j of palavras) {
            if (i == j){
                frequencias [i]++;
            }
        }
    }

}
