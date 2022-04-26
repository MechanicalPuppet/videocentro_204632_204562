const URLAuth = "http://localhost:3000/api/v1/auth";
const configFetch = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};


async function login() {
  const usuario = document.getElementById("usuario").value;
  const contra = document.getElementById("contra").value;

  const body = JSON.stringify({
    usuario: usuario,
    contraseña: contra
  });

  configFetch.body = body;

  const res = await checkLogin();

  if(res.auth){
    window.location.href="./menuInicio.html";
  }else {
    alert("Acceso Denegado");
  }


}

async function checkLogin() {
  return await fetch(URLAuth + "/login", configFetch).then(response => response.json().catch(error => error))
}

function irMenu(){

}