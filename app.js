
/*Solo minusulas*/
/*No acentos ni caracteres especiales*/
/*Encriptar y desencriptar*/
/*boton con funcion ctrl+c"*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeError = document.querySelector(".mensaje-error")
var msjResultado = document.querySelector(".mensaje-encriptado-desencriptado")
var resultado = document.querySelector("#msj-resultado");
var botonCopiar = document.querySelector("#btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarDiv();
    var mensaje = recuperarTexto();
    resultado.textContent = encriptarTexto(mensaje);
}

function desencriptar(){
    ocultarDiv();
    var mensaje = recuperarTexto();
    resultado.textContent = desencriptarTexto(mensaje);
}

function recuperarTexto(){
    var mensaje = document.querySelector("#mensaje");
    return mensaje.value;
}

function ocultarDiv(){
    mensajeError.classList.add("ocultar");
    msjResultado.classList.remove("ocultar");

}

function encriptarTexto (resultado){
    var texto = resultado;
    var textoFinal = "";

    for (var i=0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal= textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal= textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal= textoFinal + "imes"
        }
        else  if(texto[i] == "o"){
            textoFinal= textoFinal + "ober"
        }
        else  if(texto[i] == "u"){
            textoFinal= textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    console.log(textoFinal);
    return textoFinal;
}

function desencriptarTexto (resultado){
    var texto = resultado;
    var textoFinal = "";

    for (var i=0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal= textoFinal + "a"
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal= textoFinal + "e"
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal= textoFinal + "i"
            i=i+3;
        }
        else  if(texto[i] == "o"){
            textoFinal= textoFinal + "o"
            i=i+3;
        }
        else  if(texto[i] == "u"){
            textoFinal= textoFinal + "u"
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    console.log(textoFinal);
    return textoFinal;
    
}

const btnCopiar = document.querySelector("#btn-copiar");
 btnCopiar.addEventListener("click", copiar = () => {
    var contenido= document.querySelector("#msj-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("texto copiado");
 })
