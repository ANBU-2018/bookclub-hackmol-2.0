import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './../css/Home.css'
import MenuAppBar from './AppBar';
import BookListView from './BookListVIew';

function Home(props) {
    const BookList=[
        "Harry Potter : The deadly hallow 1",
        "Harry Potter : The deadly hallow 2",
        "Harry Potter : Goblet of Fire",
    ]
    const email = useSelector(state => state.email)
    const userName = useSelector(state => state.userName)
    const [bookList, setbookList] = useState('');
    useEffect(() => {
       async function bookList(){
           const response=await fetch(`http://localhost:9000/book`,{
               method:'GET'
           })
           const {data}=await response.json();
           console.log(data);
       }
       bookList();
    }, [])
    return (
        <div className="home">
            <nav>
                <MenuAppBar />
            </nav>
            <BookListView Genre="Romance" BookList={BookList} />
            <BookListView Genre="Magic" BookList={BookList} />
            <BookListView Genre="Fantasy" BookList={BookList} />
        </div>
    );
}

export default Home;