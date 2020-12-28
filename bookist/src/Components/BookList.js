import React from 'react';

const Booklist = props => {
    let mappedBooks = props.books.map((el, i) => {
        return (
            <div key={i}>
                <img src={el.img} onClick={() => props.addToShelf(el.title)}/>
                <p>{el.title} by {el.author}</p> 
            </div>
        )
    })
    return mappedBooks
}

export default Booklist;