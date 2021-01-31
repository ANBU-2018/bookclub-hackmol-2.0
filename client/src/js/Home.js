import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './../css/Home.css'
import MenuAppBar from './AppBar';
import BookListView from './BookListVIew';

function Home(props) {
    const BookList=[
        "Harry Potter : The deadly hallow 1",
        "Sahid",
        "Java",
        "Doraemon",
        "Naruto",
        "Solo leveling"
    ]
    const email = useSelector(state => state.email)
    const userName = useSelector(state => state.userName)
    const [bookList, setbookList] = useState('');
    useEffect(() => {
       async function bookList(){
           const response=await fetch(`http://localhost:9000/book?userName=${userName}`,{
               method:'GET'
           })
           const result=await response.json();
           console.log(result);
       }
       bookList();
    }, [])
    return (
        <div className="home">
            <nav>
                <MenuAppBar />
            </nav>
            <BookListView Genre="Thriller" BookList={BookList} />
            <BookListView Genre="Magic" BookList={BookList} />
        </div>
    );
}

export default Home;