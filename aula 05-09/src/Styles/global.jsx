import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }
    body,html{
        height:100vh;
        width:100vw;
        text-rendering: optimizeLegibility;
        font-family: Roboto;
    }
    html{
        font-size:62.5%;
    }
    #root{
        height:100%;
        width:100%;
    }
`;
 
export default GlobalStyle;