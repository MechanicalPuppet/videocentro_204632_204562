const URLCliente = "http://localhost:3312/api/v1/cliente/";
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
consultarClientes();

async function consultarClientes(){
    const data= await fetch(URLCliente,configFetch)
    .then(response => response.json());
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML="";
    data.forEach(e=>{
        tbody.innerHTML += agregarFila(e).outerHTML;
    });
}



function agregarFila(data){
    const row = document.createElement("tr");
    const colUsuario = document.createElement("td");
    const colDireccion = document.createElement("td");
    const colTelefono = document.createElement("td");
    colUsuario.innerText=data.titulo;
    colDireccion.innerText=data.genero;
    colTelefono.innerText=data.clasificacion;
    row.innerHTML += colUsuario.outerHTML;
    row.innerHTML += colDireccion.outerHTML;
    row.innerHTML += colTelefono.outerHTML;
    return row;

}

function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menuInicio.html?usuario=${_id}`;
}