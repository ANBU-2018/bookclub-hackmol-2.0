import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/Books.css'

function Books() {
    const bookName = useSelector(state => state.bookName)
    const [Details, setDetails] = useState([])
    useEffect(() => {
       async function bookDetail(){
           const response=await fetch(`http://localhost:9000/book?bookName=${bookName}`,{
               method:"GET"
           })
           const {data}=await response.json()
           setDetails(data);
           console.log(data)
       }
       bookDetail()
    }, [])
    return (
        <div>
        {Object.keys(Details).map((keys)=>{
            return(
            <div className='books'>
                <h1>{bookName}</h1>
            <div>
                <h2>Description</h2>
                <p>{Details[keys].description}</p>
            </div>
        </div>
            )
        })}
        </div>
    )
}

export default Books 
