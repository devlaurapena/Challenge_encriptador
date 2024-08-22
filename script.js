const textArea=document.querySelector(".input-mensaje");
const mensaje=document.querySelector(".mensaje");
var copiarTexto = document.querySelector(".mensaje");
  

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncrip(){
    const textoEncrip = encriptar(textArea.value);
    mensaje.value=textoEncrip;
    textArea.value="";
    mensaje.style.backgroundImage = "none";

}
function btnDesEncrip(){
    const textodesEncrip = desencriptar(textArea.value);
    mensaje.value=textodesEncrip;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function copiar() {  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copiarTexto.value);
    }



function encriptar(stringUsuario){
let matrix=[["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrix)
    stringUsuario=stringUsuario.toLowerCase();
    for(let i = 0; i<matrix.length;i++){
        if(stringUsuario.includes(matrix[i][0])){
            stringUsuario=stringUsuario.replaceAll(matrix[i][0], matrix[i][1]);
        }
    }
    return stringUsuario; 
}
function desencriptar(stringUsuario){
    let matrix=[["enter","e"], ["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
        console.table(matrix)
        stringUsuario=stringUsuario.toLowerCase();
        for(let i = 0; i<matrix.length;i++){
            if(stringUsuario.includes(matrix[i][0])){
                stringUsuario=stringUsuario.replaceAll(matrix[i][0], matrix[i][1]);
            }
        }
        return stringUsuario; 
    }

