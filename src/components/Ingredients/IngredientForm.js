import React from 'react';
import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              id='title'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type='number'
              id='amount'
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
