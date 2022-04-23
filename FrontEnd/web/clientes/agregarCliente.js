const URLCliente = "http://localhost:3312/api/v1/videojuego/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
agregarEventoRegistrar();



function agregarEventoRegistrar(){
    const btnRegistrar = document.getElementById("registrarse");
    btnRegistrar.addEventListener("click",agregarCliente);
}

async function agregarCliente(){
    const inUsuario = document.getElementById("usuario").value;
    const inContraseña = document.getElementById("contraseña").value;
    const inDireccion = document.getElementById("direccion").value;
    const inTelefono = document.getElementById("telefono").value;



    const vid = {
        usuario:inUsuario,
        contraseña:inContraseña,
        direccion:inDireccion,
        telefono:inTelefono,
    };

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLCliente,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}





function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}