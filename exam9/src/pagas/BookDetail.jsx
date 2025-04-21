import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function BookDetail() {
    let {id} = useParams()

    let[kitap, setKitap]= useState([])
    let filteredData;

    

    async function books() {
        try{
            let response = await axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books`)


            setKitap(response.data)
            

        }catch(err){
            console.error(err);
        
        }
    }

    useEffect(()=>{
        books()
    },[])
   


    if(kitap){
        filteredData = kitap.find(book=>book.id == id)
        console.log(filteredData);
    }

    if(filteredData){
        return (
            <div>
                <h2>Kitap aqparaty</h2>
                <div>
                    <img src={filteredData.image} alt="" />
                    <h3>{filteredData.title}</h3>
                    <h3>{filteredData.author}</h3>
                    <h3>{filteredData.description}</h3>
                </div>
        
              
            </div>
          )
    }
}
