import {createTheme} from "@mui/material";

export const emotionTheme = {
  colors: {
    black: '#000',
    'black-hover': '#373737',
    'black-highlight': '#070707',
    green: '#0DB145',
    white: '#ffffff',
    grey: '#ABABAB',
  },
  fontSizes: {
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '48px',
    xxl: '72px',
  }
}

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      tiny: 510,
      sm: 700,
      md: 900,
      big: 1100,
      lg: 1300,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'main'},
          style: {
            width: '111px',
            height: '36px',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontFamily: 'inherit',
            borderRadius: '36px',
            background: '#0DB145',
            border: '3px solid #0DB145'
          }
        }
      ]
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: 'inherit'
      }
    },
  }
})

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    main: true;
  }
}