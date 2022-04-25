const URLVideojuego = "http://localhost:3000/api/v1/videojuego/";
const URLOferta = "http://localhost:3000/api/v1/oferta/";
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
    const inNombre = document.getElementById("nombreVideojuego").value;
    const inPrecio = document.getElementById("precio").value;
    const inEmpresa = document.getElementById("empresa").value;
    const inCategoria = document.getElementById("categoria").value;
    const inOferta = document.getElementById("ofertas").value;
    
    const vid = {
        nombre:inNombre,
        precio:inPrecio,
        empresa:inEmpresa,
        categoria:inCategoria,
        oferta:{_id:inOferta},

    };

    console.log(vid);

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLVideojuego,configFetch)
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


agregarEventoRegistrar()