'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
  allVariants:{
    "fontFamily": `"Roboto Condensed", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
  },
  cssVariables: true,
  
});

export default theme;
