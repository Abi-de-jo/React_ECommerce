 import './App.css';
import Footer from './compoents/footer';
import Header from './compoents/header';
import Home from './pages/home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
function App() {

const [cart,setCartItems]=useState([]);

  return (
   
<div className='App'>

<Router>

<div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>




<Header cart={cart} setCartItems={setCartItems}/>

  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={ <Cart cartItems={cart} setCartItems={setCartItems}/>} />
    <Route path='/search' element={<Home/>}/>
    <Route path='/product/:id' element={<ProductDetail cart={cart} setCartItems={setCartItems} />}/>
 
 
    </Routes>
</div>

</Router>
  
 <Footer/>
</div>


  );
}

export default App;
