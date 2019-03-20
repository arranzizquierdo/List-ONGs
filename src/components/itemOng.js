import React, { Component } from "react";
import "./itemOng.scss";
import Collapsible from "react-collapsible";

class ItemONG extends Component {
  render() {
    const { ong } = this.props;
//constantes para el colapsable//
    const name = <div className="name">
    {ong.name}
  </div>;
    const text = <div className="code">
    {ong.code}
  </div>;
    const title = (
      <div className="container-ong">
        {name}
        {text}
      </div>
    );
//constantes para el colapsable//
    return (
      <Collapsible trigger={title}>
      <div className="container-detaile">
        <div>Campaña: {ong.campaña}</div>      
        <div>Solicitud de certificado: {ong.email}</div>
          <a 
            href={ong.link} 
            alt={ong.name} 
            target="_blank"
            className="link-web">Enlace web</a>
      </div>
        
      </Collapsible>
    );
  }
}
export default ItemONG;
