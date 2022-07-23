import styled from "styled-components";

export const ConteinerHeader = styled.header`
width: 100%;
height: 60px;
padding: 0% 5%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;

@media (max-width: 1250px){
        padding: 0rem 1rem;
}
`
export const Logo = styled.h1`
font-size: 2rem;
@media (max-width: 1140px){
        font-size: 1.8rem;
}
@media (max-width: 700px){
        display: none
        }
`
export const ContentSearch = styled.div`
width: 52%;
height: 60%;
position: relative;

        input{
                height: 100%;
                width: 100%;
                padding: 0rem 1rem 0rem 0.5rem;
                font-size: 0.9rem;
                border:none;
                outline: none;
                border-radius: 0.5rem;
                background: var(--azulfosco);}
        svg{
                position: absolute;
                top: 30%;
                right: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;   }  
 @media (max-width: 1140px){
                        width: 45%;
                        height: 70%;} 
@media (max-width: 930px){
                        width: 60%;}
@media (max-width: 700px){
                        display: none;}

`
export const ContentUserServices = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: end;
gap: 1rem;
       
        .menu{
                display: none;
        }
        //icon bag
        svg{
                font-size: 1.8rem;
        }
@media (max-width: 1140px){
                font-size: 0.6rem;
                strong {font-size: 0.7rem}
        }
 @media (max-width: 1040px){
                font-size: 0.5rem;
                strong {font-size: 0.6rem}
        }
@media (max-width: 930px){
                .menu{
                        display: block;
                        }
        }
@media (max-width: 700px){
                display: none;
        }

`
export const UserServicesItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
                strong {font-size: 0.9rem}
                //icons comments e user
                svg{
                        font-size: 1.5rem;
                        margin-right: 0.5rem;
                }
                //icons arrow down
                svg ~ svg{
                        font-size: 1rem;
                       margin-top: 15%;
                       margin-right: 0rem;
                }
@media (max-width: 930px){
                        display: none;}
`
export const DesignMobile = styled.div`
 display: none;
 
 @media (max-width: 700px){
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
                .logo-mobile{
                        font-size: 1.8rem;}
                svg{
                        font-size: 1.5rem;}

 }
`

