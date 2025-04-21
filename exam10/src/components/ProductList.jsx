import React, { useContext } from 'react';
import CardContext from './context';

const shop = [
  { id: 1, name: "Book", price: 3000 },
  { id: 2, name: "Laptop", price: 200000 },
  { id: 3, name: "iPhone", price: 300000 }
];

export default function ProductList() {
  const { dispatch } = useContext(CardContext);

  return (
    <div>
      <h1>Card Manager</h1>
      <h2>Products</h2>
      {shop.map(product => (
        <div key={product.id}>
          <h3>{product.name} - {product.price}T</h3>
          <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
