import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
    border: none;
}

html{
    font-family: 'Open Sans', sans-serif;
    font-size: 75%;
}

#app{
    background-color: #EDEDED;
    min-height: 100vh;
    max-height: auto;
}

`;

export default GlobalStyled;