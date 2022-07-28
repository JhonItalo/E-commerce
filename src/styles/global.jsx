import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --azulfosco: #ECEFF5
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, "sans-serif";

}
body{
    background: white;
}
a{
    text-decoration: none;
    color: inherit;
}
a:visited{
    color: inherit;
}
a:hover{
color: inherit;
}
a:link{
    color: inherit;
}
a:active{
    color: inherit;
}   
`;
