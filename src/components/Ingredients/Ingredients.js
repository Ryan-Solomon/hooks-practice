import React, { useReducer } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_INGREDIENT':
      return { ...state, ...payload };
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(reducer, {
    title: '',
    id: '',
    amount: '',
  });

  const addIngredientHandler = ({ title, amount, id }) => {
    dispatch({ type: 'ADD_INGREDIENT', payload: { title, amount, id } });
  };

  return (
    <div className='App'>
      <IngredientForm addIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} />
      </section>
    </div>
  );
}

export default Ingredients;
