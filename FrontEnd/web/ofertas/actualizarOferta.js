const URLOferta = "http://localhost:3000/api/v1/oferta/";
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



agregarEventoActualizar();

function agregarEventoActualizar() {
    const btnActualizar = document.getElementById("actualizar");
    btnActualizar.addEventListener("click", actualizarOferta);
}

async function actualizarOferta() {
    const inNombre = document.getElementById("nombreOferta").value;
    const inDescuento = document.getElementById("descuento").value;
    const id = document.getElementById("ofertas").value;
    const update = {
        nombre:inNombre,
        descuento: inDescuento
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLOferta, id, configFetch)
        .then(res => res.json());

    alert(resData.status);
}


async function agregarCampos(event) {
    const id = document.getElementById("ofertas").value;


    if (!/^ *$/.test(id)) {
        configFetch.method = "GET";
        const data = await fetch(URLOferta + id, configFetch)
            .then(res => res.json())
            .catch(error => null);
        cambiarValores(data);
    }
}

function cambiarValores(data) {
    const inNombre = document.getElementById("nombreOferta");
    const inDescuento = document.getElementById("descuento");

    inNombre.value = data.nombre;
    inDescuento.value = data.descuento;
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

function agregarEventoRegresar() {
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click", () => {
        regresar(_id)
    });
}

function regresar(_id) {
    window.location = `../menuInicio.html?usuario=${_id}`;
}