import React, { useReducer } from 'react';
import './App.css';
import CardContext from './components/context';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CardContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <Cart />
      </CardContext.Provider>
    </div>
  );
}

export default App;
