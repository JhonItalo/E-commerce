import styled from "styled-components";

export const ConteinerBanner = styled.section`
width: 100%;
position: relative;

 .btn-Next-Slide{
   padding: 0.4rem;
    display: flex;
    justify-Content: center;
    align-items: center;
    position: absolute;
    top: 45%;
    right: 20px;
    border: none;
    border-radius: 50%;
    background-color: white;

 }
 .btn-Previous-Slide{
   padding: 0.4rem;
    display: flex;
    justify-Content: center;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 20px;
    border: none;
    border-radius: 50%;
    background-color: white;

 }
 
 svg{
    font-size: 2rem;
    font-weight: 400;
 }
    
`
export const Carrosel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    
::-webkit-scrollbar {
   display: none;
}
.carrosel__item{
    width: 100%;
    height: auto;
    flex: none;
 }


`
export const ConteinerRadios = styled.div` 
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3rem;
`
export const Radios = styled.div`
  width: 15px;
   height: 15px;
   border-radius: 50%;
   border: 0.5px solid black;
   background-color: ${props => props.active ? "rgb(255, 192, 203)" : ""};
  
`

