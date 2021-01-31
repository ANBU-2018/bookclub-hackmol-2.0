import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/Books.css'
import MenuAppBar from './AppBar'
import ChapterList from './ChapterList'

function Books() {
    const bookName = useSelector(state => state.bookName)
    const [Details, setDetails] = useState([])
    const [Chapter, setChapter] = useState([])
    useEffect(() => {
       async function bookDetail(){
           const response=await fetch(`http://localhost:9000/book?bookName=${bookName}`,{
               method:"GET"
           })
           const {data}=await response.json()
           setDetails(data);
           console.log(data)
       }
       bookDetail();
       async function chapterDetail(){
        const response=await fetch(`http://localhost:9000/book/chapters?bookName=${bookName}`,{
            method:"GET"
        })
        const {data}=await response.json()
        setChapter(data);
    }
       chapterDetail()
    }, [])
    return (
        <div>
        <MenuAppBar />
        {Object.keys(Details).map((keys)=>{
            return(
            <div className='books'>
                 
                    <h1>{bookName}</h1>
                    <div className='books__Head'>
                    <h4>Author :- {Details[keys].author}</h4>
                    <h4>Publication :- {Details[keys].publication}</h4>
                </div>
            <div className='books__Desc'>
                <h2>Description :</h2>
                <p>{Details[keys].description}</p>
            </div>
            <div className="books__Chapter">
            <h3>Chapters :</h3>
             {Object.keys(Chapter).map((keys)=>{
                 return(
                    <div>
                        <ChapterList chapterNo={Chapter[keys].titleNo} chapterName={Chapter[keys].titleName}/>
                    </div>    
                 )
             })}
            </div>
               
        </div>
            )
        })}
        </div>
    )
}

export default Books 
