import React from 'react';

const Shelf = props => {
    let mappedTitles = props.shelf.map((el, i) => {
        return (
            <span key={i}>{el}</span>
        )
    })
    mappedTitles.unshift(<button onClick={() => props.clearShelf()}>clear shelf</button>)
    return mappedTitles
}

export default Shelf;