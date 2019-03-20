import React, { Component } from 'react';

import './App.scss';
import Filter from './components/filter';
import ListONGs from './components/listOngs';
import data from './components/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      inputName: ''
    }

    this.getInputName = this.getInputName.bind(this);
  }

  getInputName(e) {
    
    this.setState({
      inputName: e.currentTarget.value
    })
  }

  filteredByName() {
    const { data, inputName } = this.state;
    const filteredOngs = data.filter(item => {
      return item.name.includes(inputName.toUpperCase());
    })

    return filteredOngs;
  }

  render() {
    const filteredOngs = this.filteredByName();

    return (
      <div className="App">
        <Filter getInputName={this.getInputName}/>
        <ListONGs data={filteredOngs}/>
      </div>
    );
  }
}

export default App;
