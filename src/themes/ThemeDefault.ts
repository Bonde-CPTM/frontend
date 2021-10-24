import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2f2664'
    },
    secondary: {
      main: '#ee9d2e',
      contrastText: '#fff'
    },
    error:{
      main: '#d32f2f',
      dark: '#c62828',
      light: '#fd9191'
    }
  },
  typography: {

  },
  components:{
   MuiOutlinedInput:{
     styleOverrides:{
       root:{
         paddingRight: 0,
         background: '#fff',
       },
     }
   }
  }
});

theme = responsiveFontSizes(theme);

export const ThemeDefault = theme