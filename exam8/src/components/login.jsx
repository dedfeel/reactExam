import React from 'react'
import '../index.css'

export default function Login() {


    function btn1() {
        
    }

    function guest() {
        
    }
  

  return (
    <div className='div'>
        <h1 className='h1'>Login</h1>
        <form className='form'>
            <input className='inp' type="text" placeholder='Email' />
            <input className='inp' type="text" placeholder='Password'/>
            
        </form>
            <button onClick={btn1} className='btn'>Login</button>
            <button className='btn'>Register</button>
            <button onClick={guest}  className='btn'>Guest</button> 
      
    </div>
  )
}
 