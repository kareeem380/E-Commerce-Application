import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>OTOMOTO</h1>
            <p className="centre">Vous avez une diversité de pièces auto au Maroc pour toutes les marques auto</p>
         {/* <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div> */}
          </div>

          <div className='box spacer'>
            <h2>Infos pratiques</h2>
            <ul>
              <li>QUI SOMMES-NOUS ?</li>
              <li>Inscrivez-vous à la newsletter</li>
              <li>Créer un compte </li>
            </ul>
          </div>
          <div className='box spacer'>
            <h2>Service client</h2>
            <ul>
              <li>Informations Legales </li>
              <li>Retour & Remboursement</li>
              <li>Paiement et Livraison </li>
            </ul>
          </div>
          <div className='box spacer'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>Casablanca , Maroc </li>
              <li>Email: Otomoto@gmail.com</li>
              <li>Phone: +212 000000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
