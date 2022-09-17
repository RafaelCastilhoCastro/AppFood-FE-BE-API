import React from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    EmailInput,
    PasswordInput

} from '../../components';
import { useForm } from './../../hooks/useForm';

export function LoginPage() {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: '',
        password: ''
    });


    return (
        <FormsPageContainer>
            <img src={logo} alt='logo' />
            <h2>Entrar</h2>
            <FormContainer>
                <EmailInput value={form.email} onChangeInputs={onChangeInputs}/>
                <PasswordInput value={form.password} onChangeInputs={onChangeInputs}/>
                <FormButton onClick={()=>console.log()}>Entrar</FormButton>
            </FormContainer>
            <a>Não possui cadastro? Clique aqui.</a>
        </FormsPageContainer>
    );

}
