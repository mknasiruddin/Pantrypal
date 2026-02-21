
import React from 'react';

const GroceryList = ({ groceries, onDelete }) => {
  return (
    <ul className="grocery-list">
      {groceries.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default GroceryList;
