import React, { useContext } from 'react';
import logo from '../../img/logo.svg'
import { useState } from 'react';
import { ButtonSend, FormStyled, InputStyled, Main } from './style';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from './../../global/globalStateContext';

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
        <Main>
            <img src={logo} alt='logo' />
            <h2>Cadastrar</h2>
            <FormStyled onSubmit={"#"}>
                <InputStyled
                    placeholder="Nome"
                    value={name}
                    onChange={changeName}
                    type="text" />
                <InputStyled
                    placeholder="E-mail"
                    value={email}
                    onChange={changeEmail}
                    type="email"
                />
                <InputStyled
                    placeholder="CPF"
                    value={cpf}
                    onChange={changeCpf}
                    type="email"
                />
                <InputStyled
                    placeholder="Senha"
                    value={pwd}
                    onChange={changePwd}
                    type="email"
                />
                <InputStyled
                    placeholder="Confirme a Senha"
                    value={pwdConfirmation}
                    onChange={changePwdConfirmation}
                    type="password"
                />
                <ButtonSend type="submit" >Enviar</ButtonSend>
            </FormStyled>
        </Main>
    );
    
}
