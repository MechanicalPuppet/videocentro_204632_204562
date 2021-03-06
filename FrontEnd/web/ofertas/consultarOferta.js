const URLOferta = "http://localhost:3000/api/v1/oferta/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
consultarOferta();

async function consultarOferta(){
    const data= await fetch(URLOferta,configFetch)
    .then(response => response.json());
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML="";
    data.forEach(e=>{
        tbody.innerHTML += agregarFila(e).outerHTML;
    });
}



function agregarFila(data){
    const row = document.createElement("tr");
    const colNombre = document.createElement("td");
    const colDescuento = document.createElement("td");
    colNombre.innerText=data.nombre;
    colDescuento.innerText=data.descuento;
    row.innerHTML += colNombre.outerHTML;
    row.innerHTML += colDescuento.outerHTML;
    return row;

}

function consultarOfertas(){
    const btnConsultar = document.getElementById("consultarOfertas");
    btnConsultar.addEventListener("click",consultarOferta)
}
function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}