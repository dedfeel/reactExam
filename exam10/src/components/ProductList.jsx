import React, { useContext, useState } from 'react'
import CardContext from './context'


let shop =[
    {id:1, name: "Book", price: 3000},
    {id:2, name:"Laptop", price: 200000},
    {id:3, name:"Iphone", price: 300000}
]




export default function ProductList() {
    

    let {dispatch, state } = useContext(CardContext)

  return (
    <div>
        <h1>Card manager</h1>
        <div>
            <h2>Products</h2>
            <div>
                {shop.map(zat=>(
                    <>
                        <h3>{zat.name} - {zat.price}T</h3>
                        <button onClick={dispatch({type: 'ADD_ITEM', payload: zat.id})}>Add to Card</button>
                    </>
                ))

                }
            </div>
        </div>
      
    </div>
  )
}
