var opciones = document.getElementById("tip_cuenta")
var campoAdd = document.getElementById("permiso")
var btnReg = document.getElementById("btnReg")
var pin = document.getElementById("pin");
var registro = document.getElementById("registro");

var usu = document.getElementById("usuario_alu");
var pass = document.getElementById("password_alu");
var gru = document.getElementById("grupo_alu");
var nom = document.getElementById("nom_alu");
var pin = document.getElementById("pin");
var mensajeU = document.getElementById("mensajeU")
var mensajeP = document.getElementById("mensajeP")
var mensajeG = document.getElementById("mensajeG")
var mensajeN = document.getElementById("mensajeN")
var mensajePI = document.getElementById("mensajePI")


opciones.addEventListener("change",(e)=>{
    var opSelect = opciones.value;
    
    campoAdd.style.display = 'none';
    if(opSelect=="admin almacen" || opSelect=="admin labs"){
        campoAdd.style.display='block';
    }else{
        compoAdd.disable=false;
    }
});

btnReg.addEventListener("click",(e)=>{
    if(opciones.value=="Selecciona una cuenta"){
        e.preventDefault();
    }
    if(usu.value=="" || pass.value=="" || gru.value=="" || nom.value==""){
        e.preventDefault();
    }
    if(opciones.value=="admin almacen" || opciones.value=="admin labs"){
        if(pin.value!="8916" || pin.value==""){
            e.preventDefault();
            mensajePI.innerHTML="Pin incorrecto";
            mensajePI.classList.add("error");
            pin.classList.add("errorInput");
        }else{
            mensajePI.innerHTML="";
            mensajePI.classList.remove("error");
            pin.classList.remove("errorInput");
        }
    }
});

usu.addEventListener("blur",(e)=>{
    if(usu.value == ""){
        mensajeU.innerHTML="Espacio vacio";
        mensajeU.classList.add("error");
        usu.classList.add("errorInput");
    }else{
        mensajeU.innerHTML="";
        mensajeU.classList.remove("error");
        usu.classList.remove("errorInput");
    }
});  

pass.addEventListener("blur",(e)=>{
    if(pass.value == ""){
        mensajeP.innerHTML="Espacio vacio";
        mensajeP.classList.add("error");
        pass.classList.add("errorInput");
    }else{
        mensajeP.innerHTML="";
        mensajeP.classList.remove("error");
        pass.classList.remove("errorInput");
    }
});  

gru.addEventListener("blur",(e)=>{
    if(gru.value == ""){
        mensajeG.innerHTML="Espacio vacio";
        mensajeG.classList.add("error");
        gru.classList.add("errorInput");
    }else{
        mensajeG.innerHTML="";
        mensajeG.classList.remove("error");
        gru.classList.remove("errorInput");
    }
});  

nom.addEventListener("blur",(e)=>{
    if(nom.value == ""){
        mensajeN.innerHTML="Espacio vacio";
        mensajeN.classList.add("error");
        nom.classList.add("errorInput");
    }else{
        mensajeN.innerHTML="";
        mensajeN.classList.remove("error");
        nom.classList.remove("errorInput");
    }
});   