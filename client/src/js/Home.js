import React from 'react';
import './../css/Home.css'
import MenuAppBar from './AppBar';
import BookListView from './BookListVIew';

function Home(props) {
    const BookList=[
        "Tera nam",
        "Sahid",
        "Java",
        "Doraemon",
        "Naruto",
        "Solo leveling"
    ]
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