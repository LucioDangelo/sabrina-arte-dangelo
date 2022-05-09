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
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4 col-sm-offset-4">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button
                  onClick={onRemove}
                  class="btn btn-dark btn-sm"
                  id="minus-btn"
                >
                  -
                </button>
              </div>
              <h1 class="form-control form-control-sm">{count}</h1>
              <div class="input-group-prepend">
                <button
                  onClick={onAdd}
                  class="btn btn-dark btn-sm"
                  id="plus-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
      <br></br>
      <button class="w-40 h-40">Add to Cart</button>
    </div>
  );
};

export default ItemCount;
