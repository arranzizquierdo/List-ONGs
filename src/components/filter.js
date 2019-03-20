import React, { Component } from "react";
import "./filter.scss";

class Filter extends Component {
  render() {
    const { getInputName } = this.props;
    return (
      <div className="container-filter">
        <p className="text-filter">
          Selecciona la ONG que te interesa para conseguir más detalles, como el
          certificado de donación y el identificador.
        </p>
        <input 
          placeholder="Busca tu ONG" 
          type="text"
          className="input-filter"
          onChange={getInputName}/>
      </div>
    );
  }
}

export default Filter;
