import React, { useState } from 'react';
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    GenericInput
} from '../../components';
import { useForm } from '../../hooks/useForm'


export function AddressPage() {

    // STATES

    const [form, onChangeInputs, clearInputs] = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
    });

    // FUNCTIONS


    return (
        <FormsPageContainer>
            <h2>Meu endereço</h2>
            <FormContainer onSubmit={(e) => e.preventDefault()}>
                <GenericInput
                    value={form.street}
                    onChange={onChangeInputs}
                    name={'street'}
                    label={'Logradouro'}
                    placeHolder={'Rua / Av.'}
                    required={true}
                />
                <GenericInput
                    value={form.number}
                    onChange={onChangeInputs}
                    name={'number'}
                    label={'Número'}
                    placeHolder={'Número'}
                    required={true}
                />
                <GenericInput
                    value={form.complement}
                    onChange={onChangeInputs}
                    name={'complement'}
                    label={'Complemento'}
                    placeHolder={'Apto. / Bloco'}
                    required={false}
                />
                <GenericInput
                    value={form.neighbourhood}
                    onChange={onChangeInputs}
                    name={'neighbourhood'}
                    label={'Bairro'}
                    placeHolder={'Bairro'}
                    required={true}
                />
                <GenericInput
                    value={form.city}
                    onChange={onChangeInputs}
                    name={'city'}
                    label={'Cidade'}
                    placeHolder={'Cidade'}
                    required={true}
                />
                <GenericInput
                    value={form.state}
                    onChange={onChangeInputs}
                    name={'state'}
                    label={'Estado'}
                    placeHolder={'Estado'}
                    required={true}
                />
                <FormButton type='submit'>Salvar</FormButton>
            </FormContainer>
        </FormsPageContainer>
    );

}
