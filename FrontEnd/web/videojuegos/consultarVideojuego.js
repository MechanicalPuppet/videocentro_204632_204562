const URLVideojuego = "http://localhost:3000/api/v1/videojuego/";
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
consultarVideojuego();

async function consultarVideojuego(){
    const data= await fetch(URLVideojuego,configFetch)
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
    const colPrecio = document.createElement("td");
    const colEmpresa = document.createElement("td");
    const colCategoria = document.createElement("td");
    const colOferta = document.createElement("td");
    colNombre.innerText=data.nombre;
    colPrecio.innerText=data.descuento;
    colEmpresa.innerText=data.empresa;
    colCategoria.innerText=data.empresa;
    colOferta.innerText=data.oferta;


    row.innerHTML += colNombre.outerHTML;
    row.innerHTML += colPrecio.outerHTML;
    row.innerHTML += colEmpresa.outerHTML;
    row.innerHTML += colCategoria.outerHTML;
    row.innerHTML += colOferta.outerHTML;
    return row;

}

function consutlarVideojuego(){
    const btnConsultar = document.getElementById("consutlarVideojuego");
    btnConsultar.addEventListener("click",consultarVideojuego)
}
function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}