import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const SectionMain = () => {
  const sectionMainStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  };

  const navigationStyles = {
    width: '20%',
    marginRight: 4,
  };

  const contentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
    marginBottom: 2,
  };

  const imageContentStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Container maxWidth="lg" style={sectionMainStyles}>
      <nav style={navigationStyles}>
        <Typography variant="h6" component="h2">
          Categorias
        </Typography>
        <Box component="ul">
          <li>
            <Link href="#" underline="none" color="text.primary">
              Brincos
            </Link>
          </li>
          <li>
            <Link href="#" underline="none" color="text.primary">
              Colares
            </Link>
          </li>
          <li>
            <Link href="#" underline="none" color="text.primary">
              Pulseiras
            </Link>
          </li>
          <li>
            <Link href="#" underline="none" color="text.primary">
              Tornozeleiras
            </Link>
          </li>
        </Box>
      </nav>
      <Box style={contentStyles}>
        <Box style={imageContentStyles}>
          <Typography variant="h4" component="h1">
            Brincos Perfeitos
          </Typography>
          <img src="your-image-path.jpg" alt="Brincos Perfeitos" style={imageStyles} />
        </Box>
        <Typography variant="body1">
          um texto sobre os brincos perfeitos
        </Typography>
        <Button variant="contained">Saiba Mais</Button>
      </Box>
    </Container>
  );
};

export default SectionMain;

function mediaQuery(query) {
  return `@media (min-width: ${query})`;
}