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
    btnRegistrar.addEventListener("click",agregarOferta);
}

async function agregarOferta(){
    
    const inNombre = document.getElementById("nombreOferta").value;
    const inDescuento = document.getElementById("totalDescuento").value;

    const vid = {
        nombre:inNombre,
        descuento:inDescuento,
    };

    configFetch.body = JSON.stringify(vid);

    const resData= await fetch(URLOferta,configFetch)
    .then(res=> {res.json()});

    alert(resData.status);
}





function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}


agregarEventoRegistrar();
// agregarEventoRegresar();