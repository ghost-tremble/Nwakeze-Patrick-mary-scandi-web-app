import styled, {
  createGlobalStyle,
} from 'styled-components';

const sizes = {
  bold: 700,
  semiBold: 600,
  normal: 500,
  regular: 400,
  light: 300,
};

export const lightTheme = {
  ...sizes,
  primary: '#5ECE7B',
  secondary: '#1D1F22',
};

// coming soon
export const darkTheme = {};

export const GlobalStyles = createGlobalStyle`

*{  
    
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:#1D1F22;

    
}
body{
    height:100%;
        color:#1D1F22;
    width:100vw;
    overflow-x:hidden;
   
    
    
    color:${(props) => props.theme.secondary}
    
}
`;
