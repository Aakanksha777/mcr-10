import React, { createContext, useEffect, useState } from "react";
import { inventoryData } from "../inventory";

export const InventoryContext = createContext(); //create context

export function InventoryProvider({ children }) {
  const [inventory, setinventory] = useState(inventoryData);

  useEffect(() => {
    inventory &&
      localStorage.setItem(
        "inventory",
        JSON.stringify({ inventory, isNotInitial: true })
      );
  }, [inventory]);

  useEffect(() => {
    const inventoryExist = JSON.parse(localStorage.getItem("inventory"));
    if (inventoryExist && inventoryExist.isNotInitial) {
      setinventory(inventoryExist.inventory);
    }
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory, setinventory }}>
      {children}
    </InventoryContext.Provider>
  );
}
