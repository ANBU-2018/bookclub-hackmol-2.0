import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Genre.css'

function Genre() {
    const genre=[
        "Fantasy",
        "Science Fiction",
        "Dystopian",
        "Adventure",
        "Romance",
        "Detective & Mystery",
        "Horror",
        "Thriller",
        "LGBTQ+",
        "Historical Fiction",
        "Young Adult (YA)",
        "Children’s Fiction"
    ]

    const [Gen, setGen] = useState(genre)
    const [chosenGen, setchosenGen] = useState([])
    const chosenGenre=(e)=>{
        console.log(e.target.value)
        let gen=e.target.value
        setGen(Gen.filter(e=> e != gen))
        setchosenGen(old=>[...old,gen])       
    }
    const removeGenre=(e)=>{
        console.log(e.target.value)
        let gen=e.target.value
        setchosenGen(chosenGen.filter(e=> e != gen))
        setGen(old=>[...old,gen])      
    }
    return (
        <div className='Genre'>
            <div>
            {chosenGen.map((value)=>{
                return(
                        <button className='buttonsChoose' value={value} onClick={removeGenre}>{value}</button>
                )

            })}
            </div>
            <div className='genre__buttons'>
            <div className='genre__Type'>
            {Gen.map((value)=>{
                return(
                        <button className='buttons' value={value} onClick={chosenGenre}>{value}</button>

                )

            })}
            </div>
            <Link to='/home'><button className='submit'>Submit</button></Link>
            </div>
        </div>
    )
}

export default Genre
