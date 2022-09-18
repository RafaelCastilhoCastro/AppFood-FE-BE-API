import { style } from "@mui/system";
import styled from "styled-components";

export const Main = styled.div`
display: flex;
margin-top: 50px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
export const LabelStyled = styled.label`
position: relative;
font-family: Roboto;
font-size: 0.5rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: black;  
`

export const InputStyled = styled.input`
width: 16.2rem;
height: 3.0rem;
margin: 0.5rem 0 0;
padding: 1.188rem 3rem 1.188rem 1rem;
border-radius: 2px;
border: solid 1px #b8b8b8;
`
export const FormStyled = styled.form`
width: 100%;
display:flex;
flex-direction: column;
justify-content:center;
`

export const ButtonSend = styled.button`
cursor: pointer;
width: 20.5rem;
height: 3.5rem;
margin: 0.5rem 0 0;
padding: 1.188rem 3rem 1.188rem 1rem;
border-radius: 2px;
border: solid 1px #b8b8b8;
background-color:#e8222e;
`

export const InputContainer = styled.button`
display:flex;
flex-direction: row;
border: none;
background-color: transparent;


`
export const PasswImg = styled.img`
    position: absolute;
    right: 20px;
    top: 377px;
    height: 35px;
    cursor: pointer;

`

export const PasswImg2 = styled.img`
    position: absolute;
    height: 35px;
    right: 20px;
    top: 448px;
    cursor: pointer;
`

export const ImgLogo = styled.img`
margin-top: 40px;
`

export const FormsPageContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        font-weight: normal;
        width: 296px;
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        color: #000;
        font-weight: 500;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        font-weight: 500;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

`

export const FormButton = styled.button`
        border: none;
        width: 100%;
        height: 42px;
        border-radius: 2px;
        background-color:#e8222e;
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        cursor: pointer;
        margin: 8px 0;
        font-weight: 500;

        :hover {
            opacity: 0.9;
        }
`
export const Toogle = styled.button`

background-color:transparent;
border: none;
`
