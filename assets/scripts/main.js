let texto_area = document.getElementById('texto');
let resultado = document.getElementById('resultado');
let novo_texto = [];


function mostrar_resultado(){
    return resultado.innerHTML = novo_texto.join('');
}

function Criptografar(){
    let texto = texto_area.value;

    novo_texto.push((texto.replace(/i/g, 'imes')).replace(/e/g, 'enter').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat'));
    mostrar_resultado();
}

function Descriptografar(){
    let texto = texto_area.value;
    novo_texto.push((texto.replace(/ai/g, 'a')).replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u'));
    mostrar_resultado();
}

function Copiar_texto(){
    navigator.clipboard.writeText(mostrar_resultado())
    return alert('texto copiado');
}
