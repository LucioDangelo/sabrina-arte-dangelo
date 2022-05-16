import React from 'react'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  return (
    <div>
    <h3>Greeting: {props.greeting}</h3>
    <ItemCount stock="5" initial="1"></ItemCount>
    <ItemList/>
    <ItemDetailContainer id={1}/>
    </div>
  )
}

export default ItemListContainer