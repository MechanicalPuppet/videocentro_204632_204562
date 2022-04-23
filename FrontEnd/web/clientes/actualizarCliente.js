const URLCliente = "http://localhost:3312/api/v1/oferta/";
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
    btnActualizar.addEventListener("click", actualizarCliente);
}

async function actualizarCliente() {
    const inNombre = document.getElementById("usuario").value;
    const inContraseña = document.getElementById("contraseña").value;
    const inDireccion = document.getElementById("direccion").value;
    const inTelefono = document.getElementById("telefono").value;
    const update = {
        usuario:inNombre,
        contraseña:inContraseña,
        direccion:inDireccion,
        telefono: inTelefono
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLCliente, configFetch)
        .then(res => res.json());

    alert(resData.status);
}

function agregarEventoId() {
    const inNombre = document.getElementById("usuario");
    inNombre.addEventListener("keyup", agregarCampos)
}

async function agregarCampos(event) {
    const id = event.path[0].value;


    if (!/^ *$/.test(id)) {
        configFetch.method = "GET";
        const data = await fetch(URLCliente + id, configFetch)
            .then(res => res.json())
            .catch(error => null);
        cambiarValores(data);
    }
}

function cambiarValores(data) {
    const inNombre = document.getElementById("usuario");
    const inContraseña = document.getElementById("contraseña");
    const inDireccion = document.getElementById("direccion");
    const inTelefono = document.getElementById("telefono");

    inNombre.value = data.nombre;
    inContraseña.value = data.contraseña;
    inDireccion.value = data.direccion;
    inTelefono.value = data.telefono;
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