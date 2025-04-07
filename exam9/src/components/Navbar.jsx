import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <h2>Kitap soresi</h2>
        <Link to={'/home'}>Home  </Link>
        <Link to={'/bookgalery'}>Book Gallery</Link>
      
    </div>
  )
}
