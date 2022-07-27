import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0

    }
  }
  handleClick = () => {
    this.setState((estadoAnterior, _pros) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1,
      // Formato: this.setState((estadoAnterior, props) => novoEstado)
    }))
  }; 
  
  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
