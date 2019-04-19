import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
      primary: { 500: '#333335' },
      secondary: orange,
      error: orange,
    },
    status: {
      danger: orange,
    },
    typography: {
        useNextVariants: true,
      },
  });

  export default theme;