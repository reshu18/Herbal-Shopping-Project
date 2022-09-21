import React from 'react';
import img1 from "./images/oil.jpg";
import Product from "./Products";
import Shops from "./Shop";

 const Cards = () => {
    return(
        <div className="hero">
        <div class="card bg-dark text-white border-0">
  <img src={img1} class="card-img" alt="Background" height="550px"/>
  <div class="card-img-overlay d-flex flex-coloumn justify-content-center">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">New Arrival Coming Soon</h5>
    <p class="card-text lead fs-2">CHECK OUT OUR NEW BRANDS</p>
   

    </div>
    
  </div>
</div>
   <Product/>
   
        </div>

    );
 }
 export default Cards;