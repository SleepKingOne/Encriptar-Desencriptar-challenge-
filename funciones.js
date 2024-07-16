
//FUNCION ENCRIPTAR ----
function encriptar(){
    let texto = document.getElementById("TextoIn").value;
    let subtitle = document.getElementById("subtitle");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen-cifrado");
    let resultadoDescriptado =document.getElementById("ResultadoDes");
    let botonCoipar = document.getElementById("BotonCopiar");
    let textCifrado = texto 
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober") 
    .replace(/u/gi, "ufat"); 

if (texto.length != 0){
    document.getElementById("ResultadoDes").value = textCifrado;
    subtitle.textContent="";
    parrafo.textContent="";
    imagen.style.display = "none";
    resultadoDescriptado.style.display="flex";
    botonCoipar.style.display="flex";
    document.getElementById("TextoIn").value = "";
}
else{
    alert("Debes ingresar algún texto")
    subtitle.textContent="Ningun Mensaje fue encontrado";
    parrafo.textContent="Ingresa el texto que desees encriptar o desencriptar";
    imagen.style.display = "flex";
    resultadoDescriptado.style.display="none";
    botonCoipar.style.display="none";
}
}
// FUNCION COPIAR ---------
function copiarText(){
    let textoCopy = document.getElementById("ResultadoDes");

    textoCopy.select();
    textoCopy.setSelectionRange(0,9999);
    navigator.clipboard.writeText(textoCopy.value);

}
//FUNCION DESENCRIPTAR ----
function desencriptar(){
    let texto = document.getElementById("TextoIn").value;
    let subtitle = document.getElementById("subtitle");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen-cifrado");
    let resultadoDescriptado =document.getElementById("ResultadoDes");
    let botonCoipar = document.getElementById("BotonCopiar");

    let textCifrado = texto 
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o") 
    .replace(/ufat/gi, "u"); 

    if (texto.length != 0){
        document.getElementById("ResultadoDes").value = textCifrado;
        subtitle.textContent="";
        parrafo.textContent="";
        imagen.style.display = "none";
        resultadoDescriptado.style.display="flex";
        botonCoipar.style.display="flex";
        document.getElementById("TextoIn").value = "";
    }
    else{
        alert("Debes ingresar algún texto")
        subtitle.textContent="Ningun Mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que desees encriptar o desencriptar";
        imagen.style.display = "flex";
        resultadoDescriptado.style.display="none";
        botonCoipar.style.display="none";
        
    }
}
TextoEncrip = document.getElementById("TextoIn");
    TextoEncrip.addEventListener('input', () => {
            // Convertir a minúsculas y eliminar caracteres especiales
            TextoEncrip.value = TextoEncrip.value
                .toLowerCase()
                .replace(/[^a-z\s]/g, ''); // Permite solo letras minúsculas y espacios
        });