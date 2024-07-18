import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Search() {

const [keyword,setkeyword]=useState("");
const navigate= useNavigate();

const searchHandler=() => {
    navigate('/search?keyword='+keyword)
}
  return (
  <>
   <div class="input-group">
          <input
            type="text"
            id="search_field"

            onChange={(e)=> setkeyword(e.target.value)}
            class="form-control"

onBlur={searchHandler}

            placeholder="Enter Product Name ..."
          />
          <div class="input-group-append">
            <button  onClick={searchHandler} id="search_btn" class="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
  
  
  </>
  )
}

export default Search