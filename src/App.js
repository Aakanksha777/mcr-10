import './App.css';
import  Dashboard from './pages/dashboard/Dashboard';
// import ProductDetails from './pages/ProductDetails';
import Department from './pages/department/Department';
import ProductList from './pages/productlist/ProductList';
import Modal from './components/Modal';
import {Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='main-container'>
      <div className='navlinks-container'>
      <NavLink to='/' className='links'>Dashboard</NavLink>
      <NavLink to='/department' className='links'>Department</NavLink>
      <NavLink to='/product/all' className='links'>Product</NavLink>
      <NavLink to='/modal' className='links'>Add Product</NavLink>
      </div>
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/product/:dept' element={<ProductList/>}/>
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
  {/* <Button variant="contained">Hello World</Button> */}
    </div>
    
  );
}

export default App;
