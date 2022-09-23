import React from 'react';
import { Header, FooterMenu } from "../../components";


export function CartPage() {

    return (
        <div>
            <Header pageTitle={'Meu Carrinho'} />
            <FooterMenu selectedPage={'Cart'} />
        </div>
    );

}
