import React, { useState, useEffect, useContext } from "react";
import { inventoryData } from "../../inventory";
import "./ProductList.css";
import { InventoryContext } from "../../context/Inventory";
import { useParams } from "react-router-dom";

const handleFilter = (value, list) => {
  if (value === "all") {
    return list;
  }
  const newFilterArray = list.filter((item) => item.department === value);
  return newFilterArray;
};

const ProductList = () => {
  const { inventory } = useContext(InventoryContext);
  const [filterlist, setFilterlist] = useState(inventory);

  const { dept } = useParams();

  useEffect(() => {
    if (dept) {
      const filteredArr = handleFilter(dept, inventory);
      setFilterlist(filteredArr);
    }
  }, []);

  const handleDept = (e) => {
    console.log("chcekinh");
    const targetvalue = e.target.value;
    const newFilterArray = handleFilter(targetvalue, inventory);
    setFilterlist(newFilterArray);
  };

  const handleSorting = (e) => {
    const toSortArray = [...inventory];
    console.log("handleSorting");
    const targetvalue = e.target.value;

    if (targetvalue === "name") {
      toSortArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      console.log("toSortArray", toSortArray);
      setFilterlist(toSortArray);
      return;
    }

    if (targetvalue === "price") {
      toSortArray.sort((a, b) => a.price - b.price);
      console.log("toSortArray", toSortArray);
      setFilterlist(toSortArray);
      return;
    }

    if (targetvalue === "stock") {
      toSortArray.sort((a, b) => a.stock - b.stock);
      console.log("toSortArray", toSortArray);
      setFilterlist(toSortArray);
      return;
    }
  };

  const handleLowStock = () => {
    console.log("checkbox");
    const lowStockArray = inventory.filter((item) => item.stock > 10);
    setFilterlist(lowStockArray);
  };
  return (
    <div>
      <h2>Product list</h2>
      <select onChange={handleDept}>
        <option value="all">All</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>

      <input type="checkbox" onClick={handleLowStock} name="lowstock" />
      <label>low stock</label>

      <select onChange={handleSorting}>
        <option>All</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>

      <button>Add Product</button>
      <div className="product-list">
        <div className="product-row product-header">
          <div>ID</div>
          <div>Department</div>
          <div>Name</div>
          <div>Description</div>
          <div>Price</div>
          <div>Stock</div>
          <div>SKU</div>
          <div>Supplier</div>
          <div>Delivered</div>
        </div>
        {filterlist.map(
          ({
            id,
            department,
            name,
            description,
            price,
            stock,
            sku,
            supplier,
            delivered,
            imageUrl,
          }) => (
            <div key={id} className="product-row">
              <img src={imageUrl} alt={name} />
              <p>Department: {department}</p>
              <h3>{name}</h3>
              <p>Description: {description}</p>
              <p>Price: ${price.toFixed(2)}</p>
              <p>Stock: {stock}</p>
              <p>SKU: {sku}</p>
              <p>Supplier: {supplier}</p>
              <p>Delivered: {delivered}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
