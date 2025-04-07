import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import FormEmail from './pagas/FormEmail'
import BookDetail from './pagas/BookDetail'
import BookGalery from './pagas/BookGalery'
import Home from './pagas/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<FormEmail/>}/>
          <Route path='/bookgalery' element={<BookGalery/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/bookgalery/:id' element={<BookDetail/>}/> 

        </Routes>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
