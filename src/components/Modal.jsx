import React, { useContext, useState } from "react";
import "./Modal.css";
import { InventoryContext } from "../context/Inventory";

const Modal = () => {
  const { inventory, setinventory } = useContext(InventoryContext);
  const [newProduct, setNewProduct] = useState({
    dept: "",
    productName: "",
    desc: "",
    price: "",
    stock: "",
    supplier: "",
    delivery: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setinventory([...inventory, newProduct]);
  };

  // {
  //   id: 1,
  //   department: 'Kitchen',
  //   name: 'Stainless Steel Cookware Set',
  //   description:
  //     'A set of high-quality stainless steel cookware including pots and pans.',
  //   price: 149.99,
  //   stock: 15,
  //   sku: 'KITCH001',
  //   supplier: 'KitchenWonders Inc.',
  //   delivered: 15,
  //   imageUrl: 'https://m.media-amazon.com/images/I/616vJsA33kL.jpg',
  // },

  return (
    <form className="modal-box" onSubmit={handleSubmit}>
      <label>
        Department :{" "}
        <input
          placeholder="Department"
          value={newProduct.dept}
          name="dept"
          onChange={handleChange}
        />
      </label>
      <label>
        Product name :
        <input
          placeholder="name"
          onChange={handleChange}
          value={newProduct.productName}
          name="productName"
        />{" "}
      </label>
      <label>
        Description :
        <input
          placeholder="Description"
          onChange={handleChange}
          value={newProduct.desc}
          name="desc"
        />{" "}
      </label>
      <label>
        Price
        <input
          placeholder="price"
          onChange={handleChange}
          value={newProduct.price}
          name="price"
        />{" "}
      </label>
      <label>
        Stock
        <input
          placeholder="Stock"
          onChange={handleChange}
          value={newProduct.stock}
          name="stock"
        />{" "}
      </label>
      <label>
        Supplier :
        <input
          placeholder="Supplier"
          onChange={handleChange}
          value={newProduct.supplier}
          name="supplier"
        />{" "}
      </label>

      <button>Save</button>
    </form>
  );
};

export default Modal;
