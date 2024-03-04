import { createTheme } from "@mui/material";

const theme = createTheme({      
    components: {
        // Name of the component
        MuiAppBar :{
            defaultProps: {
                // The props to change the default for.
                
                style:
                {},
              },
        },
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
      },
  typography: {
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    button: {
    borderRadius:'30px',
    
    textTransform: 'capitalize'
    }
  }
});

export default theme;