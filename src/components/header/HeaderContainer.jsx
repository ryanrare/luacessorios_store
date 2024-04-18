import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicSelect from '../Selects/BasicSelect';


import HomeIcon from '@mui/icons-material/Home'; // Ícone para "Home"
import FavoriteIcon from '@mui/icons-material/Favorite'; // Ícone para "Favoritos"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Ícone para "Meu carrinho"
import PersonIcon from '@mui/icons-material/Person'; // Ícone para "Perfil"


const HeaderContainer = () => {
  return (
    <div className="container">
      <nav>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item> 
            <Button href="/" startIcon={<HomeIcon />}>Luacessorios</Button>
          </Grid>
          {/* Transforma isso em um componente de pesquisa */}
          <Grid item>
            <Box
              component="form"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { mr: 0 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Pesquisar" variant="outlined" />
              <BasicSelect />
            </Box>
          </Grid>
          <Grid item sx={{ marginRight: 1 }}>
            <Stack direction="row" spacing={1 }>
              <Button href="/profile" variant="contained" startIcon={<PersonIcon />}>Perfil</Button>
              <Button href="/promotions" variant="contained" startIcon={<FavoriteIcon />}>Favoritos</Button>
              <Button href="/cart" variant="contained" startIcon={<ShoppingCartIcon />}>Meu carrinho</Button>
            </Stack>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
}

export default HeaderContainer;