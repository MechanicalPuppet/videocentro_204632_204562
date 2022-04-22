const URLOferta = "http://localhost:3312/api/v1/oferta/";
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

agregarEventoId();
agregarEventoRegresar();
agregarEventoActualizar();

function agregarEventoActualizar() {
    const btnActualizar = document.getElementById("actualizar");
    btnActualizar.addEventListener("click", actualizarOferta);
}

async function actualizarOferta() {
    const inNombre = document.getElementById("nombre").value;
    const inDescuento = document.getElementById("descuento").value;
    const update = {
        nombre:inNombre,
        descuento: inDescuento
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLOferta, configFetch)
        .then(res => res.json());

    alert(resData.status);
}

function agregarEventoId() {
    const inNombre = document.getElementById("nombre");
    inNombre.addEventListener("keyup", agregarCampos)
}

async function agregarCampos(event) {
    const id = event.path[0].value;


    if (!/^ *$/.test(id)) {
        configFetch.method = "GET";
        const data = await fetch(URLOferta + id, configFetch)
            .then(res => res.json())
            .catch(error => null);
        cambiarValores(data);
    }
}

function cambiarValores(data) {
    const inNombre = document.getElementById("nombre");
    const inDescuento = document.getElementById("descuento");

    inNombre.value = data.nombre;
    inDescuento.value = data.descuento;
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