const URLVideojuego = "http://localhost:3000/api/v1/videojuego/";
const URLInventario = "http://localhost:3000/api/v1/inventario/";
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
    btnRegistrar.addEventListener("click",agregarVideojuego);
}

async function agregarVideojuego(){
    const inExistencia = document.getElementById("existencia").value;
    const inVideojuego = document.getElementById("videojuegos").value;
    
    const vid = {
        unidadesExistencia:inExistencia,
        unidadesTienda:inExistencia,
        videojuego:{_id:inVideojuego},
    };

    console.log(vid);

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLInventario,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}

async function agregarLista(){
    const selectVideojuego = document.getElementById("videojuegos");
    selectVideojuego.innerHTML = "";
    const data = await obtenerListaOferta();
    data.forEach(x=>{
        selectVideojuego.innerHTML += `<option value="${x._id}">${x.nombre}</option>`;
    });
}

async function obtenerListaOferta(){
    return await fetch(URLVideojuego,{method:"GET",mode:"cors",headers: {
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


agregarEventoRegistrar()