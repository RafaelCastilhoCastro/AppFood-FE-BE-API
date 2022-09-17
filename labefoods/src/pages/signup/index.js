import React, { useContext } from 'react';
import logo from '../../img/logo.svg'
import { useState } from 'react';
import { ButtonSend, FormStyled, InputStyled, Main } from './style';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from './../../global/globalStateContext';
import TextField from '@mui/material/TextField';
import {
    FormsPageContainer,
    FormContainer
} from '../../components';

export function SignUpPage() {

    const navigate = useNavigate()

    const {name, setName, email, setEmail, cpf, setCpf, pwd, setPwd, pwdConfirmation, setPwdConfirmation} = useContext(GlobalStateContext)

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
        <FormsPageContainer>
            <FormContainer>
            <img src={logo} alt='logo' />
            <h2>Cadastrar</h2>
            </FormContainer>
            <FormStyled onSubmit={"#"}>
            <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="Nome"
                    placeholder='Nome e Sobrenome'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder='email@email.com'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="CPF"
                    placeholder='000.000.000-00'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="Senha"
                    placeholder='Mínimo de 6 números'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="Confirme a Senha"
                    placeholder='Confirme a Senha'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <ButtonSend type="submit" >Enviar</ButtonSend>
            </FormStyled>
        </FormsPageContainer>
    );
    
}
