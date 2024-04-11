import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <h1>Luacessorios</h1>
            </Grid>
            <Grid item sx={{ marginRight: 2 }}>
              <Stack direction="row" spacing={2}>
                <Button href="/">Home</Button>
                <Button href="/products">Produtos</Button>
                <Button href="/promocoes">promocoes</Button>
                <Button href="/cart">Carrinho</Button>
                <Button href="/ajuda">Ajuda</Button>
              </Stack>
            </Grid>
          </Grid>
        </nav>
      </div>
    </header>
  );
}

export default Header;