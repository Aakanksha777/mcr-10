import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import { InventoryContext , InventoryProvider} from './context/Inventory';

// files 
import './index.css';
import App from './App';

export { InventoryContext };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <InventoryProvider>
    <App />
    </InventoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

