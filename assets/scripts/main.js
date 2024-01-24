let texto_area = document.getElementById('texto');
let resultado = document.getElementById('resultado');

function Criptografar(){
    let texto = texto_area.value;
    resultado.innerHTML = texto.replace(/i/g, 'imes').replace(/e/g, 'enter').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');    
}

function Descriptografar(){
    let texto = texto_area.value;
    resultado.innerHTML = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

function Copiar_texto(){
    navigator.clipboard.writeText(mostrar_resultado())
    return alert('texto copiado');
}
