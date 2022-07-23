import { createGlobalStyle } from "styled-components"

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
@media (max-width: 1025px){
        html{
            font-size: 15px;
        }  
}
@media (max-width: 426px){
    font-size: 13px;
}
`