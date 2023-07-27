import React from 'react'
import { GlobalStyles } from './GlobalStyles';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <GlobalStyles/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Login' exact element={<Login/>}/>
        <Route path='/Product' exact element={<Product/>}/>
        <Route path='/ProductList' exact element={<ProductList/>}/>
        <Route path='/Register' exact element={<Register/>}/>
        <Route path='/Cart' exact element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
