import React, { useContext, useState } from "react";
import "./Modal.css";
import { InventoryContext } from "../context/Inventory";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const { inventory, setinventory } = useContext(InventoryContext);
  const [newProduct, setNewProduct] = useState({
    id: inventory.length,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    supplier: "",
    sku: "",
    imageUrl: "",
    delivered: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setinventory([...inventory, newProduct]);
    setNewProduct({
      id: inventory.length + 1,
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      supplier: "",
      sku: "",
      imageUrl: "",
      delivered: 0,
    });
    alert("successfully added");
    navigate("/product/all");
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
          value={newProduct.department}
          name="department"
          onChange={handleChange}
        />
      </label>
      <label>
        Product name :
        <input
          placeholder="name"
          onChange={handleChange}
          value={newProduct.name}
          name="name"
        />{" "}
      </label>
      <label>
        Description :
        <input
          placeholder="Description"
          onChange={handleChange}
          value={newProduct.description}
          name="description"
        />{" "}
      </label>
      <label>
        Price
        <input
          placeholder="price"
          type="number"
          onChange={handleChange}
          value={newProduct.price}
          name="price"
        />{" "}
      </label>
      <label>
        Stock
        <input
          placeholder="Stock"
          type="number"
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
      <label>
        Sku :
        <input
          placeholder="sku"
          onChange={handleChange}
          value={newProduct.sku}
          name="sku"
        />{" "}
      </label>
      <label>
        imageUrl :
        <input
          placeholder="imageUrl"
          onChange={handleChange}
          value={newProduct.imageUrl}
          name="imageUrl"
        />{" "}
      </label>

      <button>Save</button>
    </form>
  );
};

export default Modal;
