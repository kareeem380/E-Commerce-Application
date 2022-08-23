import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Moteur</MenuItem>
        <MenuItem onClick={handleClose}>Tôlerie</MenuItem>
        <MenuItem onClick={handleClose}>Carrosserie</MenuItem>
        <MenuItem onClick={handleClose}>Lubrifiant</MenuItem>
        <MenuItem onClick={handleClose}>Pneu</MenuItem>
        <MenuItem onClick={handleClose}>Peinture</MenuItem>
        <MenuItem onClick={handleClose}>Electricité</MenuItem>
        <MenuItem onClick={handleClose}>Electronique</MenuItem>
        <MenuItem onClick={handleClose}>Accessoires</MenuItem>
      </Menu>
    </div>
  );
}