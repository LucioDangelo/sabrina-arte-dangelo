import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  return (
    <div>
    <h3>Greeting: {props.greeting}</h3>
    <ItemCount stock="5" initial="1"></ItemCount>
    </div>
  )
}

export default ItemListContainer