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
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
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