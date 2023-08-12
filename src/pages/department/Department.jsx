import React from "react";
import "./Department.css";
import { Link } from "react-router-dom";

const Department = () => {
  return (
    <div className="main-department">
      <Link className="dept" to="/product/Kitchen">
        Kitchen
      </Link>
      <Link className="dept" to="/product/Clothing">
        Clothing
      </Link>
      <Link className="dept" to="/product/Toys">
        Toys
      </Link>
    </div>
  );
};

export default Department;
