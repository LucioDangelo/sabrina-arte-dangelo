import React from 'react'

const Item = ({ id, price, title, pictureUrl}) => {
  return (
    <div className='col-lg-4'>
        <div className='text-center card-box'>
            <div className='member-card pt-2 pb-2'>
                <div className='thumb-lg member-thumb mx-auto'>
                    <img src={pictureUrl} className="img-thumbnail"></img>
                </div>
                <div className=''>
                    <h4>{title}</h4>
                    <p>{price}</p>
                    <p>{id}</p>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Item