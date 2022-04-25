const URLRenta = "http://localhost:3000/api/v1/renta/";
const URLInventario = "http://localhost:3000/api/v1/inventario/";
const URLCliente = "http://localhost:3000/api/v1/cliente/";
const URLEmpleado = "http://localhost:3000/api/v1/empleado/";
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






function agregarEventoRegistrar(){
    const btnRegistrar = document.getElementById("registrarte");
    btnRegistrar.addEventListener("click",agregarRenta);
}
let fecha2 = new Date("2022/04/08");
async function agregarRenta(){
    
    const inTotal = document.getElementById("total").value;
    const inTiempo = document.getElementById("tiempo").value;
    const inInventario = document.getElementById("inventario").value;
    const inEmpleado = document.getElementById("empleado").value;
    const inCliente = document.getElementById("cliente").value;
    
    const vid = {
        total:inTotal,
        tiempo:inTiempo,
        fechaRenta:fecha2,
        inventario:{_id:inInventario},
        empleado:{_id:inEmpleado},
        cliente:{_id:inCliente},

    };

    console.log(vid);

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLRenta,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}

async function agregarListaInventario(){
    const selectInventario = document.getElementById("inventario");
    selectInventario.innerHTML = "";
    const data = await obtenerListaInventario();
    data.forEach(x=>{
        selectInventario.innerHTML += `<option value="${x._id}">${x._id}</option>`;
    });
}

async function obtenerListaInventario(){
    return await fetch(URLInventario,{method:"GET",mode:"cors",headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json());
}

async function agregarListaCliente(){
    const selectCliente = document.getElementById("cliente");
    selectCliente.innerHTML = "";
    const data = await obtenerListaCliente();
    data.forEach(x=>{
        selectCliente.innerHTML += `<option value="${x._id}">${x.usuario}</option>`;
    });
}

async function obtenerListaCliente(){
    return await fetch(URLCliente,{method:"GET",mode:"cors",headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json());
}

async function agregarListaEmpleado(){
    const selectEmpleado = document.getElementById("empleado");
    selectEmpleado.innerHTML = "";
    const data = await obtenerListaEmpleado();
    data.forEach(x=>{
        selectEmpleado.innerHTML += `<option value="${x._id}">${x.usuario}</option>`;
    });
}

async function obtenerListaEmpleado(){
    return await fetch(URLEmpleado,{method:"GET",mode:"cors",headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json());
}

async function agregarListas() {
    agregarListaInventario();
    agregarListaEmpleado();
    agregarListaCliente();
} 

function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}


agregarEventoRegistrar()