import { useState } from "react";
//import  { Link } from "react-router-dom"

const ItemCount = ({ stock, initial, onSum, onAdd, onRemove }) => {
  const [count, setCount] = useState(parseInt(initial));
  stock = parseInt(stock);

  onSum = () => {
    console.log(stock);
    console.log(initial);
    if (count === stock) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  onRemove = () => {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="container mt-10">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-6 col-sm-offset-4">
            <div className="input-group mb-8">
              <div className="input-group-prepend">
                <button
                  onClick={onRemove}
                  className="btn btn-dark btn-sm"
                  id="minus-btn"
                >
                  -
                </button>
              </div>
              <h1 className="form-control-sm form-control-lg">{count}</h1>
              <div className="input-group-prepend">
                <button
                  onClick={onSum}
                  className="btn btn-dark btn-sm"
                  id="plus-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
      <br></br>
      <button className="w-50 h-50" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
