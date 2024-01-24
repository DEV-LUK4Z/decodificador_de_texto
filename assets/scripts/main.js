let texto_area = document.getElementById('texto');
let resultado = document.getElementById('resultado');
let novo_texto = [];


function mostrar_resultado(){
    return resultado.innerHTML = novo_texto.join('');
}

function Criptografar(){
    let texto = texto_area.value;
    for(i = 0; i < texto.length; i++){
        let letra = texto.charAt(i);

        if (letra == 'a'){
            novo_texto.push('ai');
        }
        else if(letra == 'e'){
            novo_texto.push('enter');
        }
        else if(letra == 'i'){
            novo_texto.push('imes');
        }
        else if(letra == 'o'){
            novo_texto.push('ober');
        }
        else if(letra == 'u'){
            novo_texto.push('ufat');
        }
        else{
            novo_texto.push(texto.charAt(i));
        }
    }
    mostrar_resultado();
}

function Descriptografar(){
    mostrar_resultado();
}

function Copiar_texto(){
    navigator.clipboard.writeText(mostrar_resultado())
    return alert('texto copiado');
}
