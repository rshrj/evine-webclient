import { createTheme } from '@mui/material/styles';
import { theme as themeConfig } from '../config';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: themeConfig.primaryColor
    },
    secondary: {
      main: themeConfig.secondaryColor,
      contrastText: themeConfig.secondaryContrastText
    },
    background: {
      default: themeConfig.backgroundColor
    }
  },
  typography: {
    fontFamily: themeConfig.fontFamily
  }
});

export default theme;
