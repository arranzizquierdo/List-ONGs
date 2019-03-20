import React, { Component } from "react";
import ItemONG from "./itemOng";

import "./listOngs.scss";

class ListONGs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: "1"
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div className="container-list">
        <div className="title-list">
          <p>Organización</p>
          <p>Código de envío</p>
        </div>
        <small>*click para más detalles</small>
        <ul className="list">
          {data.map((item, id) => {
            return (
              <li key={id}>
                <ItemONG ong={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListONGs;
