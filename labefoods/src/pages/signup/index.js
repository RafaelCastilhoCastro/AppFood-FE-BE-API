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

export function SignUpPage() {

    // STATES

    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showSignUpPasswordConfirm, setShowSignUpPasswordConfirm] = useState(false);
    const [ form, onChangeInputs, clearInputs ] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmpsw: ''
    });

    // FUNCTIONS

    const ToggleSignUpPassword = () => {
        setShowSignUpPassword(!showSignUpPassword);
    }
    const ToggleSignUpPasswordConfirm = () => {
        setShowSignUpPasswordConfirm(!showSignUpPasswordConfirm);
    }


    return (
        <FormsPageContainer>
            <img src={logo} alt='logo' />
            <h2>Entrar</h2>
            <FormContainer onSubmit={(e) => e.preventDefault()}>
                <GenericInput value={form.name} onChange={onChangeInputs} name={'name'} label={'Nome'} placeHolder={'Nome e sobrenome'} />
                <GenericInput value={form.email} onChange={onChangeInputs} name={'email'} label={'E-mail'} placeHolder={'email@email.com'} />
                <GenericInput value={form.cpf} onChange={onChangeInputs} name={'cpf'} label={'CPF'} placeHolder={'000.000.000-00'} />
                <PasswordInput value={form.password} onChange={onChangeInputs} name={'password'} label={'Password'} placeHolder={'Mínimo 6 caracteres'} showPassword={showSignUpPassword} TogglePassword={ToggleSignUpPassword} />
                <PasswordInput value={form.confirmpsw} onChange={onChangeInputs} name={'confirmpsw'} label={'Confirm'} placeHolder={'Mesmos 6 caracteres'} showPassword={showSignUpPasswordConfirm} TogglePassword={ToggleSignUpPasswordConfirm} />
                <FormButton type='submit'>Enviar</FormButton>
            </FormContainer>
        </FormsPageContainer>
    );

}
