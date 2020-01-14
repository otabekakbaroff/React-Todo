import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/TodoComponents/TodoList';
import ListForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const groceries = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    purchased: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    purchased: false
  },
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceryList: groceries,
      life: 42
    };

 
  }
  toggleItem = id => {
    const newGroceryList = this.state.groceryList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });
    // update groceryList
    this.setState({
      groceryList: newGroceryList
    });
  };
  clearPurchased=()=>{
     let zap=this.state.groceryList.filter(item=>item.purchased===false);
    this.setState({ 
      groceryList:zap
    });
  }
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      groceryList: [...this.state.groceryList, newItem]
    });
  };
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceryList}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
