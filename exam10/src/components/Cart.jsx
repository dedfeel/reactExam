import React, { useContext } from 'react';
import CardContext from './context';

export default function Cart() {
  const { state, dispatch } = useContext(CardContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        state.cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name} - {item.price}₸</h3>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: {total}₸</h3>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
    </div>
  );
}
