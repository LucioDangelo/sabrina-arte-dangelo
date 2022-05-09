import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
  const [count, setCount] = useState(parseInt(initial));
  stock = parseInt(stock);

  onAdd = () => {
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 col-sm-offset-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  onClick={onRemove}
                  className="btn btn-dark btn-sm"
                  id="minus-btn"
                >
                  -
                </button>
              </div>
              <h1 className="form-control form-control-sm">{count}</h1>
              <div className="input-group-prepend">
                <button
                  onClick={onAdd}
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
      <button className="w-40 h-40">Add to Cart</button>
    </div>
  );
};

export default ItemCount;
