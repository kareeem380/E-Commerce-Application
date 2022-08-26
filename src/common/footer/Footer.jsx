import React from "react"
import "./style.css"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box2'>
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

          <div className='box2'>
            <h2>Infos pratiques</h2>
            <ul>
              <li>QUI SOMMES-NOUS ?</li>
              <li onClick={handleClickOpen} className="content">Inscrivez-vous à la newsletter</li>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Inscription à la newsletter</DialogTitle>
                <DialogContent>
                  <DialogContentText >
                  Abonnez-vous et recevez en exclusivité nos toutes nos promotions et bons plans .
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>S'inscrire</Button>
                </DialogActions>
              </Dialog>
              <li>Créer un compte </li>
            </ul>
          </div>
          <div className='box2'>
            <h2>Service client</h2>
            <ul>
              <li>Informations Legales </li>
              <li>Retour & Remboursement</li>
              <li>Paiement et Livraison </li>
            </ul>
          </div>
          <div className='box2'>
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
