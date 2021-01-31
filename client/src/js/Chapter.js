import React from 'react'
import { useSelector } from 'react-redux'
import '../css/Chapter.css'
import MenuAppBar from './AppBar'

function Chapter() {
    const chapterName = useSelector(state => state.chapterName)
    return (
        <div>
            <MenuAppBar/>
            <div  className='chapter'>
            <h1>{chapterName}</h1>
            <div className="chapter__comment">
                <input type='text' />
            </div>
            </div>
        </div>
    )
}

export default Chapter
