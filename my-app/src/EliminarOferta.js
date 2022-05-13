import React from "react";

class EliminarOferta extends React.Component {
  
  URLOferta = "http://localhost:3000/api/v1/oferta/";
  configFetch = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};
  
  constructor(props){
    super(props)
    this.lista = {}

  }
  async obtenerListaOferta(){
    return await fetch(this.URLOferta,{method:"GET",mode:"cors",headers: {
      'Content-Type': 'application/json'
    }}).then(response => response.json());
  }

  async agregarLista(){
    this.lista = await this.obtenerListaOferta();    
  }
  
  render(){
    return (
      <div>
          <header>
            <h2> Videocentro "Silent Games" </h2>{" "}
            <h3>
              <em> José Brandon Hernández y Victor Gutierrez</em>{" "}
            </h3>
          </header>
          <nav>
            <button type="button" name="back" ></button>
            <ul>
              <li>
                <a onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/agregarOferta.html","")}>¡Agregar oferta!</a> 
              </li>
              <li>
                <a onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/eliminarOferta.html", "")}>¡Eliminar oferta!</a>
              </li>
              <li>
                <a onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/consultarOferta.html", "")}>¡Consultar ofertas!</a>
              </li>
            </ul>
          </nav>
          
          <article>
            <h1> ¡ELIMINAR OFERTA!</h1>
            <section>
              <div id="contenedor">
                <select  id="ofertas">
                  {
                    /*
                    this.lista(data=>(
                      <option value={data._id}>
                      {data.nombre}
                      </option>
                    ))
                  */
                  }
                  <option value="Call Of Duty: Vanguard">
                    Call Of Duty: Vanguard
                  </option>
                  <option value="Halo Infinite">
                    Halo Infinite
                    </option>
                </select>
                <br />
                <input type="submit" value="Eliminar" id="eliminar" />
                <br />
                <input type="button" value="Cancelar" id="cancelar" />
              </div>
            </section>
          </article>
          <footer />
        </div>
      ); 
  }
  
};

export default EliminarOferta;
 