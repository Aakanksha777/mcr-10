import React, { createContext, useEffect, useState } from "react";
import { inventoryData } from "../inventory";

export const InventoryContext = createContext(); //create context

const checkPersistentDataEqualsInital = (initial) => {
  const inventoryExist = JSON.parse(localStorage.getItem("inventory"));
  if (!inventoryExist) return initial
  if (initial.length !== inventoryExist.length) return inventoryExist
  let flag = true
  inventoryExist.forEach((per) => {
    if (!initial.some((ini) => ini.name === per.name)) {
      flag = false
    }
  })
  return flag ? initial : inventoryExist
}

export function InventoryProvider({ children }) {
  const [inventory, setinventory] = useState(checkPersistentDataEqualsInital(inventoryData));

  useEffect(() => {
    if (inventory !== inventoryData) {
      localStorage.setItem(
        "inventory",
        JSON.stringify(inventory)
      );
    }
  }, [inventory]);

  return (
    <InventoryContext.Provider value={{ inventory, setinventory }}>
      {children}
    </InventoryContext.Provider>
  );
}