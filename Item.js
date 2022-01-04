import React from 'react'

function Item(props) {
    return (
        <div>
            <h1>{props.item.title}</h1>
            <h4>{props.item.price}</h4>
            <img src={props.item.image} alt="image of product" />
        </div>
    )
}

export default Item
