import React from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';

function Header({cart}) {
  return (
  
<>
<nav class="navbar row">
      <div class="col-12 col-md-3 " id='abi'>
        <div class="navbar-brand">
         
         <Link to={"/"}>          <img width="150px"src="./images/logo.png"/>
         </Link>
        </div>
      </div>

      <div class="col-12 col-md-6 mt-0 mt-md-0" id='abi'>
       
       <Search/>
      </div>

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center" id='abi'>
       <Link to={"/cart"}>
        <span id="cart" class="ml-3 btn btn-danger">Cart</span> </Link>
        <span class="ml-1" id="cart_count">{cart.length}</span>
      </div>
    </nav>




</>

  )
}

export default Header;