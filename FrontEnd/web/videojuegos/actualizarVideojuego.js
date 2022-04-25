const URLVideojuego = "http://localhost:3000/api/v1/videojuego/";
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
    btnActualizar.addEventListener("click", actualizarVideojuego);
}

async function actualizarVideojuego() {
    const inNombre = document.getElementById("nombre").value;
    const inPrecio = document.getElementById("precio").value;
    const inEmpresa = document.getElementById("empresa").value;
    const inCategoria = document.getElementById("categoria").value;
    const update = {
        nombre:inNombre,
        precio: inPrecio,
        empresa:inEmpresa,
        categoria: inCategoria
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLVideojuego, configFetch)
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
    const inPrecio = document.getElementById("precio").value;
    const inEmpresa = document.getElementById("empresa").value;
    const inCategoria = document.getElementById("categoria").value;

    inNombre.value = data.nombre;
    inPrecio.value = data.precio;
    inEmpresa.value = data.empresa;
    inCategoria.value = data.categoria;
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