import styled from "styled-components";

export const ConteinerHeader = styled.header`
width: 100%;
height: 60px;
padding: 0% 5%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;

.logo{
        font-size: 2rem;
}
.inputSearch{
        width: 50%;
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
                background: #ECEFF5;}
        svg{
                position: absolute;
                top: 30%;
                right: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;   }    

}
.userServices{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        background: green;
        gap: 1rem;
       

        .menu{
                display: none;
        }
        //icon bag
        svg{
                font-size: 1.8rem;
        }
        .userServices__item{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.8rem;
                strong {font-size: 0.9rem}
                border: 1px solid red;
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
        }
}

.designMobile{
                display: none;
        }



@media (max-width: 1250px){
        padding: 0rem 1rem;
}
@media (max-width: 1140px){
        .logo{
                font-size: 1.8rem;
        }
       
        .inputSearch{
                width: 45%;
                height: 70%;
        }
        .userServices{
                font-size: 0.6rem;
                strong {font-size: 0.7rem}
        }
}
@media (max-width: 1040px){
        .userServices{
                font-size: 0.5rem;
                strong {font-size: 0.6rem}
        }
        
}
@media (max-width: 930px){
        
}

`