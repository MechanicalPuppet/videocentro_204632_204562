const URLCliente = "http://localhost:3000/api/v1/cliente/";
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

agregarEventoEliminar();


function agregarEventoEliminar(){
    const btnEliminar = document.getElementById("eliminar");
    btnEliminar.addEventListener("click",eliminarCliente);
}


async function eliminarCliente(){
    const textId = document.getElementById("cliente").value;
    const resData = await fetch(URLCliente+textId,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}

async function agregarLista(){
    const selectCliente = document.getElementById("cliente");
    selectCliente.innerHTML = "";
    const data = await obtenerListaOferta();
    data.forEach(x=>{
        selectCliente.innerHTML += `<option value="${x._id}">${x.usuario}</option>`;
    });
}

async function obtenerListaOferta(){
    return await fetch(URLCliente,{method:"GET",mode:"cors",headers: {
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