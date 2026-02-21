import React, { useState } from 'react';
import GroceryList from './components/GroceryList';
import AddItemForm from './components/AddItemForm';
import './App.css';

const App = () => {
  const [groceries, setGroceries] = useState([]);

  const handleAdd = (newItem) => {
    setGroceries([...groceries, { ...newItem, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setGroceries(groceries.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>PantryPal</h1>
      <AddItemForm onAdd={handleAdd} />
      <GroceryList groceries={groceries} onDelete={handleDelete} />
    </div>
  );
};

export default App;
