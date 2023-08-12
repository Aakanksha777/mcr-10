import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { inventoryData } from "../../inventory";
import { InventoryContext } from "../../context/Inventory";

const Dashboard = () => {
  const { inventory } = useContext(InventoryContext);
  const [stats, setStats] = useState({
    totalStock: 0,
    lowStock: 0,
    deliveredItems: 0,
  });

  useEffect(() => {
    const latestStats = inventory.reduce(
      (acc, curr) => {
        acc.totalStock = acc.totalStock + curr.stock;
        acc.lowStock = curr.stock < 10 ? acc.lowStock + 1 : acc.lowStock;
        acc.deliveredItems = acc.deliveredItems + curr.delivered;
        return acc;
      },
      { totalStock: 0, lowStock: 0, deliveredItems: 0 }
    );
    setStats(latestStats);
  }, [inventory]);

  return (
    <div className="main-dashboard">
      <div className="dashboard-card">
        <b>{stats.totalStock}</b>
        <h3>Total Stock</h3>
      </div>

      <div className="dashboard-card">
        <b>{stats.lowStock}</b>
        <h3>Low Stock</h3>
      </div>

      <div className="dashboard-card">
        <b>{stats.deliveredItems}</b>
        <h3>Items delivered</h3>
      </div>
    </div>
  );
};

export default Dashboard;
