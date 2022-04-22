document.getElementById('ocultar').style.display = 'none';
document.getElementById('ocultardos').style.display = 'none';



document.getElementById('btnOcultar').style.display = 'none'
document.getElementById('btnMostrar').style.display = 'none';



if(  document.getElementById("ocultar").style.display = 'none')
{
    document.getElementById('btnMostrar').style.display = 'block';
} else{
    document.getElementById('btnOcultar').style.display = 'block';
}


function Ocultar(){
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('btnOcultar').style.display = 'none';
    document.getElementById('btnMostrar').style.display = 'block';
}

function Mostrar(){
    document.getElementById("ocultar").style.display = 'block';
    document.getElementById("ocultardos").style.display = 'none';
    document.getElementById('btnOcultar').style.display = 'block';
    document.getElementById('btnMostrar').style.display = 'none';
}

function OcultarPerfil(){
    document.getElementById("ocultar").style.display = 'none';
    document.getElementById("ocultardos").style.display = 'block';
    document.getElementById('btnOcultar').style.display = 'none';
    document.getElementById('btnMostrar').style.display = 'block';
}
