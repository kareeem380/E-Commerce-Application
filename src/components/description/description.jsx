import React, { useContext } from "react";
import "./style.css"
import DescriptionContext from "../../contextApi/DescriptionContext";
const Description = () => {
  const { piece } = useContext(DescriptionContext);
  return (
    <>
  
      <div class="wrapper1">
    <div class="product-img">
    <img src={piece.cover} alt='' />
    
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1 id="h1">{piece.name}</h1>

        <p>{piece.description} </p>
        <br></br>
        <p><span id="test">{piece.price}</span>$</p>
      </div>
      <br></br>
      <div class="product-price-btn">
       
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  
    </>
    
  );
};

export default Description;
