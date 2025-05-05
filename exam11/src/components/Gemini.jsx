import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'

let apiKey = import.meta.env.VITE_GEMINI_API_KEY

export default function Gemini() {
    let [userInput, setUserInput] = useState('')
    let [answerInput, setAnswerInput] = useState('')
    let [loading, setLoading] = useState(false)
    let [error, setError]= useState('')
    let [all, setAll] = useState([])

    let handleSubmit = async (e)=>{

        e.preventDefault()
        try {
            setAnswerInput('')
            setLoading(true)
            

            let response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    contents: [{ parts: [{ text: userInput }] }]
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            let answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text
            setAnswerInput(answer)
            setUserInput('')
            setLoading(false)
            setAll([...all, userInput])
            
        } catch (err) {
            setError(err.message)
            setUserInput('')
        }
    }
  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg shadow-md w-full max-w-2xl p-6 bg-white">
        <h1 className="text-blue-800 text-3xl font-semibold mb-4">Gemini AI Сұрақ-жауап</h1> 
        <div className="w-full"> 
            <form onSubmit={handleSubmit} className="flex flex-col gap-2"> 
                <input  type="text"
                        placeholder="Сұрақ жазыңыз..." 
                        value={userInput} 
                        onChange={(e) => setUserInput(e.target.value)} 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-300" > 
                    {loading ? ( <h3 className="animate-pulse">Жіберілуде...</h3> ) : ( <h3>Жіберу</h3> )} 
                </button>
            </form> 
            <p className="mt-4 p-4 bg-gray-100 rounded-md">ЖАУАП:{answerInput}</p>
            <div className="mt-4 p-4 bg-gray-100 rounded-md flex flex-col items-center justify-center">
                <h1>Қойылған сұрақтар:</h1> 
                {all.map((question, index) => ( <p className='' key={index}>{question}</p> ))} 
            </div>
            {error && ( <div className="mt-4 p-4 bg-red-200 text-red-800 rounded-md"> <h1>{error}</h1> </div> )}
        </div> 
    </div> 
  )
}
