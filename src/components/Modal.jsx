import React from "react";

const Modal = () => {
  return (
    <div>
      <label>
        Department : <input placeholder="Department" />
      </label>
      <label>
        Product name :
        <input placeholder="name" />{" "}
      </label>
      <label>
        Description :
        <input placeholder="Description" />{" "}
      </label>
      <label>
        Price
        <input placeholder="price" />{" "}
      </label>
      <label>
        Stock
        <input placeholder="Stock" />{" "}
      </label>
      <label>
        Supplier :
        <input placeholder="Supplier" />{" "}
      </label>
      <label>
        delivery
        <input placeholder="delivery" />{" "}
      </label>
      <button>Save</button>
    </div>
  );
};

export default Modal;
