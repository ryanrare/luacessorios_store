import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import HomeIcon from '@mui/icons-material/Home'; // Ícone para "Home"
import FavoriteIcon from '@mui/icons-material/Favorite'; // Ícone para "Favoritos"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Ícone para "Meu carrinho"
import HelpIcon from '@mui/icons-material/Help'; // Ícone para "Para Ajuda"
import PersonIcon from '@mui/icons-material/Person'; // Ícone para "Perfil"


const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <h1>Luacessorios</h1>
            </Grid>
            <Grid item sx={{ marginRight: 1 }}>
              <Stack direction="row" spacing={1 }>
                <Button href="/" startIcon={<HomeIcon />}>Home</Button>
                <Button href="/profile" variant="contained" startIcon={<PersonIcon />}>Perfil</Button>
                <Button href="/promotions" variant="contained" startIcon={<FavoriteIcon />}>Favoritos</Button>
                <Button href="/cart" variant="contained" startIcon={<ShoppingCartIcon />}>Meu carrinho</Button>
                <Button href="/help" variant="contained" startIcon={<HelpIcon />}>Para Ajuda</Button>
              </Stack>
            </Grid>
          </Grid>
        </nav>
      </div>
    </header>
  );
}

export default Header;