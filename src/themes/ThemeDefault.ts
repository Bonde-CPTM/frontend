import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ee3338',
      contrastText: '#fff'
    },
    secondary: {
      main: '#95abe0',
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