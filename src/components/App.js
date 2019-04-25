import React,{Component} from 'react';
import Header from "./Header"
import Form from "./Form";

class App extends Component {
  quoteInsurance = (datos)=>{
    console.log(datos)
  }
  render(){
    return (
      <div className="contenedor">
        <Header title="Cotizador de Seguro de autos"/>
        <div className="contenedor-formulario">
          <Form quoteInsurance={this.quoteInsurance}></Form>
        </div>
      </div>
    );
  }
}

export default App;
