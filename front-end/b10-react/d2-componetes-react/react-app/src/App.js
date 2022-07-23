import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne', 'farinha'];
    const items = shoppingList.map((item, index) => {
      //console.log("item: ", item);
      return (<li key={index}>{ item }</li>);
    });

    return (
      <div className="App">
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;