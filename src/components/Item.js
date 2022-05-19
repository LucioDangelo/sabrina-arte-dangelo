import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div>
            <article className="product-card">
            <div>
                <img className="product-card__picture" src={product.img} alt="" />
            </div>
            <div>
                <h3 className="product-card__title">{product.name}</h3>
                <h4 className="product-card__title">$ {product.price}</h4>

                <Link to={`/item/${product.id}`}>
                    <button>Ver detalles</button>
                </Link>
            </div>
            </article>
        </div>
    );
};

export default Item;
