import React from 'react';
import './IngredientList.css';

const IngredientList = (props) => {
  return (
    <section className='ingredient-list'>
      <h2>Loaded Ingredients</h2>
      <ul>
        {Object.values(props.ingredients).map((ig) => (
          <li key={ig.id}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
