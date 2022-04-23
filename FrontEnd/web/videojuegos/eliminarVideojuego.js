const URLVideojuego = "http://localhost:3312/api/v1/videojuego/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
agregarEventoEliminar();


function agregarEventoEliminar(){
    const btnEliminar = document.getElementById("eliminar");
    btnEliminar.addEventListener("click",eliminarVideojuego);
}


async function eliminarVideojuego(){
    const textId = document.getElementById("id").value;
    const resData = await fetch(URLVideojuego+textId,configFetch)
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