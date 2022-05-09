import React from 'react'

function Item({item}) {
  return (
    <div className='col-lg-4'>
        <div className='text-center card-box'>
            <div className='member-card pt-2 pb-2'>
                <div className='thumb-lg member-thumb mx-auto'>
                    <img src={item.pictureUrl} className="img-thumbnail"></img>
                </div>
                <div className=''>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Item