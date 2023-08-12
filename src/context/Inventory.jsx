import React, { createContext, useEffect, useState } from "react";
import { inventoryData } from "../inventory";

export const InventoryContext = createContext(); //create context

export function InventoryProvider({ children }) {
  const [inventory, setinventory] = useState(inventoryData);

  return (
    <InventoryContext.Provider value={{ inventory, setinventory }}>
      {children}
    </InventoryContext.Provider>
  );
}
