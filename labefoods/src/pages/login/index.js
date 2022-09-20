import React, { useState } from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    PasswordInput,
    GenericInput

} from '../../components';
import { useForm } from '../../hooks/useForm'

export function LoginPage() {

    // STATES

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: '',
        password: ''
    });

    // FUNCTIONS

    const ToggleLoginPassword = () => {
        setShowLoginPassword(!showLoginPassword);
    }


    return (
        <FormsPageContainer>
            <img src={logo} alt='logo' />
            <h2>Entrar</h2>
            <FormContainer onSubmit={(e) => e.preventDefault()}>
                <GenericInput value={form.email} onChange={onChangeInputs} name={'email'} label={'E-mail'} placeHolder={'email@email.com'} />
                <PasswordInput value={form.password} onChange={onChangeInputs} name={'password'} label={'Password'} placeHolder={'Mínimo 6 caracteres'} showPassword={showLoginPassword} TogglePassword={ToggleLoginPassword} />
                <FormButton type='submit'>Entrar</FormButton>
            </FormContainer>
            <a>Não possui cadastro? Clique aqui.</a>
        </FormsPageContainer>
    );

}
