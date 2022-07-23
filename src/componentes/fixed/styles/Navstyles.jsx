import styled from "styled-components";

export const ConteinerNav = styled.nav`
width: 100%;
height:50px;
padding:0 5%;
background: var(--azulfosco);

ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display:flex;
    justify-content: space-between;
    align-items: center;

    li{
        a{
            font-family: 'PT Sans', sans-serif;
            text-decoration: none;
            font-size: 1rem;
        }
        a:link, a:visited, a:active{
            color: inherit
        }
    }
}
@media (max-width: 1250px){
        padding: 0rem 1rem;
}
@media (max-width: 1140px){
    font-size: 0.9rem;  
}


`