import React, { useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./style.css";
import DescriptionContext from "../../contextApi/DescriptionContext";
import Data2 from "../Data2"

// from mohamed 
const { productItems2 } = Data2;

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

// const FlashCard = ({ productItems, addToCart }) => {
//   const { addToDescription } = useContext(DescriptionContext);

//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         {productItems.map((productItem) => {
//           return (
//             <div
//               className="box"
//               onClick={() => addToDescription(productItem)}
//               key={productItem.id}
//             >
//               <Link to="/description">
//                 <div className="product mtop">
//                   <div className="img">
//                     <span className="discount">
//                       {productItem.discount}% Off
//                     </span>
//                     <img src={productItem.cover} alt="" className="img" />
//                     <div className="product-like">
//                       <label>{count}</label> <br />
//                       <i
//                         className="fa-regular fa-heart"
//                         onClick={increment}
//                       ></i>
//                     </div>
//                   </div>
//                   <div className="product-details">
//                     <h3>{productItem.name}</h3>
//                     <div className="rate">
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>
//                     </div>
//                     <div className="price">
//                       <h4>${productItem.price}.00 </h4>
//                       {/* step : 3
//                      if hami le button ma click garryo bahne
//                     */}
//                       <button onClick={() => addToCart(productItem)}>
//                         <i className="fa fa-plus"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </Slider>
//     </>
//   );
// };

// from mohamed 
const FlashCard = ({ productItems, addToCart }) => {
  const { addToDescription } = useContext(DescriptionContext);

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems2.map((productItem2) => {
          return (
            <div
              className="box"
              onClick={() => addToDescription(productItem2)}
              key={productItem2.id}
            >
              <Link to="/description">
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">
                      {productItem2.categoryId}% Off
                    </span>
                    <img src={productItem2.cover} alt="" className="img" />
                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i
                        className="fa-regular fa-heart"
                        onClick={increment}
                      ></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{productItem2.name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>${productItem2.price}.00 </h4>
                      {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                      <button onClick={() => addToCart(productItem2)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
};



export default FlashCard;
