import  React,{useEffect,setState} from 'react';
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
    super(props);
    this.state = {
      items : [],
      itemSelected: ""
    }
  }
  
  componentDidMount(){
    this.obtenerListaOferta().then(x=>this.setState({items:x}));
  }

  async obtenerListaOferta(){
    return await fetch(this.URLOferta,{method:"GET",mode:"cors",headers: {
      'Content-Type': 'application/json'
    }}).then(response => response.json());
  }

  eliminarOferta = async () => {
    const id= this.state.itemSelected;
    await fetch(this.URLOferta+id,this.configFetch)
    .then(x=>alert("Eliminado!!"))
    .catch(error=>alert("No se elimino :p"));
    const resp = await this.obtenerListaOferta();
    this.setState({items:resp});
  }

  setSelectedItem= (e)=> {
    this.setState({
      itemSelected:e.target.value
    });
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
            <button type="button" name="back">Regresar</button>
            <ul>
            <li>
                <a href='#' onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/agregarOferta.html","")}>¡Agregar oferta!</a> 
              </li>
              <li>
                <a href='#' onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/eliminarOferta.html", "")}>¡Eliminar oferta!</a>
              </li>
              <li>
                <a href='#' onClick={()=> window.open("http://127.0.0.1:5501/FrontEnd/web/ofertas/consultarOferta.html", "")}>¡Consultar ofertas!</a>
              </li>
            </ul>
          </nav>
          
          <article>
            <h1>¡ELIMINAR OFERTA!</h1>
            <section>
              <div id="contenedor">
                  <select name="oferta" onChange={this.setSelectedItem} className="form-control" >
                    {
                      this.state.items.map(item=>(
                        <option key={item._id} value={item._id}>{item.nombre}</option>
                      ))
                    }
                  </select>
                <br />
                <input onClick={this.eliminarOferta} type="submit" value="Eliminar" id="eliminar" />
                <br />
                <input type="button" value="Cancelar" id="cancelar" />
              </div>
            </section>
          </article>
          <footer />
        </div>
      ); 
  }
  
}

export default EliminarOferta;
 