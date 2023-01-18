 /*captura del button encriptar*/
 var botoneraEncriptar = document.getElementById("Encriptar"); 
 Encriptar.addEventListener("click",encriptador);
  
 /*función que permite encriptar el texto capturado del input*/
 function encriptador(){

     var textoEntradoEncriptar = document.getElementById("texto").value.toLowerCase();

     var textoCifrado = textoEntradoEncriptar.replace(/e/img,'enter');
     textoCifrado = textoCifrado.replace(/o/img,'ober');
     textoCifrado = textoCifrado.replace(/i/img,'imes');
     textoCifrado = textoCifrado.replace(/a/img,'ai');
     textoCifrado = textoCifrado.replace(/u/img,'ufat');
     
     document.getElementById("salida").innerHTML= textoCifrado;
     document.getElementById("texto").value = "";
 }

 /*captura del button desencriptar*/
 var botoneraDesencriptar = document.getElementById("Desencriptar");
 Desencriptar.addEventListener("click",desencriptador);
         
 /*función que permite desencriptar el texto capturado del input*/        
 function desencriptador(){

     var textoEntradoDesencriptar = document.getElementById("texto").value.toLowerCase();
     
     var textoDecifrado = textoEntradoDesencriptar.replace(/ufat/img,'u');
     textoDecifrado = textoDecifrado.replace(/ai/img,'a');
     textoDecifrado = textoDecifrado.replace(/imes/img,'i');
     textoDecifrado = textoDecifrado.replace(/ober/img,'o');
     textoDecifrado = textoDecifrado.replace(/enter/img,'e');
     

     document.getElementById("salida").innerHTML= textoDecifrado;
     document.getElementById("texto").value = "";

 }

 /*captura del input*/
 var boton = document.getElementById("copiar");
 boton.addEventListener("click", copiarAlPortapapeles);

function copiarAlPortapapeles() {
     
    //captura del texto de la div right
     var salida = document.getElementById("salida");

     // Crea un campo de texto "oculto"
     var inputFalso = document.createElement("input");

     // Asigna el contenido del elemento especificado al valor del campo
     inputFalso.setAttribute("value", salida.innerHTML);
     document.body.appendChild(inputFalso);
     inputFalso.select();
     document.execCommand("copy");
     document.body.removeChild(inputFalso);
     //alert("Copiado al portapapeles!");

     let refresh = document.getElementById('copiar');
     copiar.addEventListener('click', _ => {location.reload();})

     //document.getElementById("salida").innerHTML= " ";
 }
