import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function BookGalery() {


    let[data, setData]=useState([])



    async function books() {
        try{
            let response = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books`)


            setData(response.data)
            

        }catch(err){
            console.error(err);
        
        }
    }

    useEffect(()=>{
        books()
    },[])
   


  return (
    <div>
        <Navbar/>

        {data.map((book)=>{
            return(
            <Link to={`/bookgalery/${book.id} `} key={book}>
                <img src={book.image} alt="" />
                

            </Link>
            )
            
        })
            
        }
        
      
    </div>
  )
}
