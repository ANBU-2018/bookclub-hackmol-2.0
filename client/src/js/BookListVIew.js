import React from 'react'
import '../css/BookListView.css'
import MediaCard from './Card'


function BookListVIew({Genre,BookList}) {
    return (
        <div className='bookListView'>
            <h2>{Genre}</h2>
            <div className="bookListView__list">
                {BookList.map((value)=>{
                    return(
                        <div className='bookListView__Card'>
                            <MediaCard Bookname={value} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BookListVIew
