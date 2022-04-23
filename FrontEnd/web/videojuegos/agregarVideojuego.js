const URLVideojuego = "http://localhost:3312/api/v1/videojuego/";
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
    btnRegistrar.addEventListener("click",agregarVideojuego);
}

async function agregarVideojuego(){
    const inNombre = document.getElementById("nombre").value;
    const inPresio = document.getElementById("presio").value;
    const inEmpresa = document.getElementById("empresa").value;
    const inCategoria = document.getElementById("categoria").value;
    const vid = {
        nombre:inNombre,
        presio:inPresio,
        empresa:inEmpresa,
        categoria:inCategoria,

    };

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLVideojuego,configFetch)
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