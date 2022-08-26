import React, { useContext } from "react";
import "./style.css";


const Payment = () => {

  return (
  

<>
<div className="checkout-panel">
  <div className="panel-body">
    <h2 className="title">Commander ici!</h2>
    <div className="progress-bar">
      <div className="step active" />
      <div className="step active" />
      <div className="step" />
      <div className="step" />
    </div>
    <div className="payment-method">
      <label htmlFor="card" className="method card">
        <div className="card-logos">
          <img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png" />
          <img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png" />
        </div>
        <div className="radio-input">
          <input id="card" type="radio" name="payment" />
          Payez 20,99 AU$ par carte de crédit
        </div>
      </label>
      <label htmlFor="paypal" className="method paypal">
        <img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png" />
        <div className="radio-input">
          <input id="paypal" type="radio" name="payment" />
          Payez 20,99 AU$ avec PayPal
        </div>
      </label>
    </div>
    <div className="input-fields">
      <div className="column-1">
        <label htmlFor="cardholder">Nom</label>
        <input type="text" id="cardholder" />
        <div className="small-inputs">
          <div>
            <label htmlFor="date">Date Validé</label>
            <input type="text" id="date" />
          </div>
          <div>
            <label htmlFor="verification">CVV / CVC *</label>
            <input type="password" id="verification" />
          </div>
        </div>
      </div>
      <div className="column-2">
        <label htmlFor="cardnumber">Numéro de carte</label>
        <input type="password" id="cardnumber" />
        <span className="info">
        * CVV ou CVC est le code de sécurité de la carte, numéro unique à trois chiffres sur
          le verso de votre carte séparé de son numéro.
          </span>
      </div>
    </div>
  </div>
  <div className="panel-footer">
    <button className="btn back-btn">Retour</button>
    <button className="btn next-btn">continue</button>
  </div>
</div>



</>

  
  

  );
};

export default Payment;
