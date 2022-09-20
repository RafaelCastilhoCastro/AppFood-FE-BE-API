import React from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    EmailInput,
    PasswordInput

} from '../../components';
import { useForm } from '../../hooks/useForm'

export function LoginPage() {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: '',
        password: ''
    });


    return (
        <FormsPageContainer>
            <img src={logo} alt='logo' />
            <h2>Entrar</h2>
            <FormContainer onSubmit={(e) => e.preventDefault()}>
                <EmailInput value={form.email} onChange={onChangeInputs} />
                <PasswordInput value={form.password} onChange={onChangeInputs} />
                <FormButton type='submit'>Entrar</FormButton>
            </FormContainer>
            <a>Não possui cadastro? Clique aqui.</a>
        </FormsPageContainer>
    );

}
