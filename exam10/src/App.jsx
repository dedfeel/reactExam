import React, { useReducer } from 'react'
import './App.css'
import CardContext from './components/context'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

let initialstate = {
  cart: [
    
  ]
}

function App() {

  function reducer(state, action){
    switch (action.type) {
      case 'ADD_ITEM':
        return{
          ...state,
          
          
            
        }
      case 'REMOVE_ITEM':
        return{
          ...state,
        }
      case 'CLEAR_CART':
        return{
          initialstate
        }

      default:
        return state
    }

  }

  const[state, dispatch]= useReducer(reducer, initialstate )

  return (
    <div>
      <CardContext.Provider value={{state, dispatch}}>
        <ProductList/>
        <Cart/>

      </CardContext.Provider>

      
    </div>
  )
}

export default App
