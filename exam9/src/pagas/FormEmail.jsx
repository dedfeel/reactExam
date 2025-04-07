import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FormEmail() {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState() 
    const[error, setError] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!email.includes('@')){
            setError('Email-ді қайта дұрыс енгізіңіз!')
            return
        }

        if(password.length<3){
            setError('Құпия сөз 4 таңбадан кем болмауы керек')
            return
        }

        setError('')
        navigate('/home')        

    }
       

  


    return (
    
    

    <div>
        <h1>Welcome back</h1>
        <p>Login to your BookShelf account</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='password' required  onChange={(e)=>setPassword(e.target.value)}/>
            <button  type='submit'>Login</button>
            { error  &&
            <p style={{color: "red"}}>{error}</p>
            
            }
        </form>
      
    </div>
  )
}
