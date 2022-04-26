const URLInventario = "http://localhost:3000/api/v1/inventario/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};


agregarEventoEliminar();


function agregarEventoEliminar(){
    const btnEliminar = document.getElementById("eliminar");
    btnEliminar.addEventListener("click",eliminarVideojuego);
}


async function eliminarVideojuego(){
    const textId = document.getElementById("inventario").value;
    const nuevo = document.getElementById("nuevo").value;
    const body= JSON.stringify({
        unidadesExistencia:nuevo
    });

    configFetch.body = body;

    const resData = await fetch(URLInventario+textId,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}

async function agregarLista(){
    const selectInventario = document.getElementById("inventario");
    selectInventario.innerHTML = "";
    const data = await obtenerListaOferta();
    data.forEach(x=>{
        selectInventario.innerHTML += `<option value="${x._id}">${x._id}</option>`;
    });
}

async function obtenerListaOferta(){
    return await fetch(URLInventario,{method:"GET",mode:"cors",headers: {
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