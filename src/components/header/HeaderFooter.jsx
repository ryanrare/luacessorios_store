import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import { Grid } from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function HeaderFooter() {
  const handleClick = () => {
    // Implemente a lógica de manipulação do clique aqui, se necessário
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Todas Categorias"
                    icon={<ExpandMoreIcon fontSize="small" />}
                />
                <StyledBreadcrumb component="a" href="#" label="Catalog" />
                <StyledBreadcrumb component="a" href="#" label="Catalog" />
                <StyledBreadcrumb component="a" href="#" label="Catalog" />
            </Breadcrumbs>
        </Grid>
        <Grid item>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb component="a" href="#" label="Catalog" />
          <StyledBreadcrumb
            label="Accessories"
            deleteIcon={<ExpandMoreIcon />}
            onDelete={handleClick}
          />
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}

export default HeaderFooter;