const URLOferta = "http://localhost:3000/api/v1/oferta/";
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
    const textId = document.getElementById("ofertas").value;
    const resData = await fetch(URLOferta+textId,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}


async function agregarLista(){
    const selectOferta = document.getElementById("ofertas");
    selectOferta.innerHTML = "";
    const data = await obtenerListaOferta();
    data.forEach(x=>{
        selectOferta.innerHTML += `<option value="${x._id}">${x.nombre}</option>`;
    });
}

async function obtenerListaOferta(){
    return await fetch(URLOferta,{method:"GET",mode:"cors",headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json());
}

function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}