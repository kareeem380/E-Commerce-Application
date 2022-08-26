import React, { useContext } from "react";
import "./style.css";
import DescriptionContext from "../../contextApi/DescriptionContext";
const Description = ({ addToCart }) => {
  const { piece } = useContext(DescriptionContext);
  return (
    <>
      <div class="wrapper1">
        <div class="product-img">
          <img src={piece.cover} alt="" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1 id="h1">{piece.name}</h1>
            <br></br>
            <p>{piece.description} </p>
            <br></br><br></br>
            <p>
              <div className="spacer"></div>
              <div className="prices">
              <span id="test">{piece.price}</span>$
                <button onClick={() => addToCart(piece)}>
                      <i className='fa fa-plus'></i>
                </button>
              </div>
            </p>
            
          </div>
          
        {/**  <div class="product-price-btn">
            <button type="button" onClick={() => addToCart(piece)}>
              buy now
            </button>
          </div>*/} 
        </div>
      </div>
    </>
  );
};

export default Description;
