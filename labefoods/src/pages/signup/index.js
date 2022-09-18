import React, { useContext } from 'react';
import logo from '../../img/logo.svg'
import { useState } from 'react';
import { ButtonSend, FormsPageContainer2, FormStyled, ImgLogo, InputContainer, InputStyled, Main, PasswImg, PasswImg2, Toogle } from './style';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from './../../global/globalStateContext';
import TextField from '@mui/material/TextField';
import {
    FormsPageContainer,
    FormContainer,
    FormButton
} from '../../components';
import VisiblePassword from '../../img/senha-2@2x.png'
import InvisiblePassword from '../../img/senha@2x.png'

export function SignUpPage() {

    const navigate = useNavigate()

    const { name, setName, email, setEmail, cpf, setCpf, pwd, setPwd, pwdConfirmation, setPwdConfirmation } = useContext(GlobalStateContext)

    const [clickState, setClickState] = useState(false)
    const [clickState2, setClickState2] = useState(false)

    const toogleBtn = (event) => {
        event.preventDefault();
        setClickState(PrevState => !PrevState)
    }

    const toogleBtn2 = (event) => {
        event.preventDefault();
        setClickState2(PrevState => !PrevState)
    }

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changeCpf = (event) => {
        setCpf(event.target.value)
    }
    const changePwd = (event) => {
        setPwd(event.target.value)
    }
    const changePwdConfirmation = (event) => {
        setPwdConfirmation(event.target.value)
    }


    return (
        <FormsPageContainer2>
            <FormContainer>
                <ImgLogo src={logo} alt='logo' />
                <h2>Cadastrar</h2>
            </FormContainer>
            <FormStyled onSubmit={"#"}>
                <TextField
                    sx={{ m: 1, width: '100%', marginLeft: "0", }}
                    required
                    id="outlined-required"
                    label="Nome"
                    placeholder='Nome e Sobrenome'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%', marginLeft: "0", }}
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder='email@email.com'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%', marginLeft: "0" }}
                    required
                    id="outlined-required"
                    label="CPF"
                    placeholder='000.000.000-00'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%', marginLeft: "0" }}
                    required
                    id="outlined-required"
                    label="Senha"
                    type={clickState ? "text" : "password"}
                    placeholder='Mínimo de 6 números'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Toogle onClick={toogleBtn}>

                    {clickState ? <PasswImg src={InvisiblePassword} /> : <PasswImg src={VisiblePassword} />}

                </Toogle>
                <TextField
                    sx={{ m: 1, width: '100%', marginLeft: "0" }}
                    required
                    id="outlined-required"
                    type={clickState2 ? "text" : "password"}
                    label="Confirme a Senha"
                    placeholder='Confirme a Senha'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Toogle onClick={toogleBtn2}>

                    {clickState2 ? <PasswImg2 src={InvisiblePassword} /> : <PasswImg2 src={VisiblePassword} />}
                    
                </Toogle>
                <FormButton type="submit" >Enviar</FormButton>
            </FormStyled>
        </FormsPageContainer2>
    );

}
