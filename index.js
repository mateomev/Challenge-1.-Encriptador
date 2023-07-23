function encriptar(){

    let textoInput = document.getElementById("textoInput").value;
    let mensajeFeedback = document.getElementById("mensajeFeedback");
    let ingresaTexto = document.getElementById("ingresaTexto");

    var tEcriptado = textoInput
        //modificadores de método replace: i=insensitivo a mayusculas y minusculas; g=global; afecta a todas las palabras que encuentre y no solo a la primera; m=multiple, afecta a multiples líneas
        .replace(/e/gm, "enter")
        .replace(/i/gm, "imes")
        .replace(/a/gm, "ai")
        .replace(/o/gm, "ober")
        .replace(/u/gm, "ufat");
    
    
    if (textoInput.length !=0) {
        document.getElementById("textoInput").value = tEcriptado;
        mensajeFeedback.textContent = "Mensaje Encriptado";
        ingresaTexto.textContent = "";

    }else{
        alert("No se ha ingresado un mensaje aun");
        mensajeFeedback.textContent = "Ningún mensaje ingresado";
        ingresaTexto.textContent = "Ingresa el texto a encriptar";
    }
}

function desencriptar(){

    let textoInput = document.getElementById("textoInput").value;
    let mensajeFeedback = document.getElementById("mensajeFeedback");
    let ingresaTexto = document.getElementById("ingresaTexto");

    var tEcriptado = textoInput
        .replace(/enter/gm, "e")
        .replace(/imes/gm, "i")
        .replace(/ai/gm, "a")
        .replace(/ober/gm, "o")
        .replace(/ufat/gm, "u");
    
    
    if (textoInput.length !=0) {
        document.getElementById("textoInput").value = tEcriptado;
        mensajeFeedback.textContent = "Mensaje Desencriptado";
        ingresaTexto.textContent = "";

    }else{
        alert("No se ha ingresado un mensaje aun");
        mensajeFeedback.textContent = "Ningún mensaje ingresado";
        ingresaTexto.textContent = "Ingresa el texto a encriptar";
    }
}