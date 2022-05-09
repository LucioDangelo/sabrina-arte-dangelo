import Item from './Item';
import React from 'react'

function ItemList() {

    //const task = new Promise((resolve, reject) => {

    const items = [
        {
            id: 1,
            title: "title1",
            price: 100,
            pictureUrl: "picture1.jpg"
        },
        {
            id: 2,
            title: "title2",
            price: 200,
            pictureUrl: "picture2.jpg"
        },
        {
            id: 3,
            title: "title3",
            price: 300,
            pictureUrl: "picture3.jpg"
        }
    ]

    // setTimeout(()=>{
    //             resolve(arr)
    //         },2000)
    //     })
    // task.then((res)=>{
    //         console.log(res);
    //     })

    const itemList = items.map(item => <Item item={item} key={item.id}/>)

  return (
    <div>{itemList}</div>
  )
}

export default ItemList


// const ItemList = () => {

//     const task = new Promise((resolve, reject) => {

//         const arr = [{id:1, title:"Producto1", description:"desc1", price:100, pictureUrl:"avxcxc"}]

//         setTimeout(()=>{
//             resolve(arr)
//         },2000)
//     })

//     task.then((res)=>{
//         console.log(res);
//     })



