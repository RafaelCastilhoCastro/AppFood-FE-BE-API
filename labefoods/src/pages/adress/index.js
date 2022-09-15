import React from 'react';
import { AdressPageContainer, Form } from './style'

export function AdressPage() {


    return (
        <AdressPageContainer>
            <h2>Meu endereço</h2>
            <Form>
                <input
                    placeholder='Rua / Av.'
                    name='street'
                    type="text"
                    required
                />
                <input
                    placeholder='Número'
                    name='street'
                    type="text"
                    required
                />
                <input
                    placeholder='Apto / Bloco'
                    name='street'
                    type="text"
                    required
                />
                <input
                    placeholder='Bairro'
                    name='street'
                    type="text"
                    required
                />
                <input
                    placeholder='Cidade'
                    name='street'
                    type="text"
                    required
                />
                <input
                    placeholder='Estado'
                    name='street'
                    type="text"
                    required
                />
                <button>Salvar</button>
            </Form>
        </AdressPageContainer>
    );

}
