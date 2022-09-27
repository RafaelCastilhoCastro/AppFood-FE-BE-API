import React from 'react';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import { Header, FooterMenu, LoadingDiv } from "../../components";
import gif from '../../img/loading-gif.gif'
import { AdressText, MyAdressText, SubTotal, CartDiv, AdressDiv, EmptyCartText, ShippingText, TotalDiv, FinalValue, PaymentTitle, PaymentDiv, CartButton, PaymentOptions, OptionDiv } from './style';
import { useState } from 'react';


export function CartPage() {

    // STATES

    const [selectedOption, setSelectedOption] = useState('')

    // REQUEST

    const [profileData, isLoadingProfile, errorProfile] = useRequestData(`${BASE_URL}profile`)
    const profileAdress = [{ ...profileData }]

    // FUNCTIONS

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const adressInfo = profileData && profileAdress.map(profile => {
        return (
            <CartDiv>
                <AdressDiv>
                    <AdressText>Meu Endereço</AdressText>
                    <MyAdressText>{profile.user.address}</MyAdressText>
                </AdressDiv>
                <EmptyCartText>Carrinho Vazio</EmptyCartText>
                <ShippingText>
                    Frete    R$ 0,00
                </ShippingText>
                <TotalDiv>
                    <SubTotal>
                        SUBTOTAL
                    </SubTotal>
                    <FinalValue>
                        R$ 0,00
                    </FinalValue>
                </TotalDiv>

                <PaymentDiv>
                    <PaymentTitle>Forma de Pagamento</PaymentTitle>
                    <PaymentOptions>
                        <OptionDiv>
                            <label>
                                <input type="radio" onChange={handleOptionChange} value="money" checked={selectedOption === 'money'} />
                                Dinheiro
                            </label>
                        </OptionDiv>
                        <OptionDiv>
                            <label>
                                <input type="radio" onChange={handleOptionChange} value="card" checked={selectedOption === 'card'} />
                                Cartão de crédito
                            </label>
                        </OptionDiv>
                    </PaymentOptions>
                </PaymentDiv>
                {true ? <CartButton disabled onClick={""}>Confirmar</CartButton> : <CartButton onClick={""}>Confirmar</CartButton>}
            </CartDiv>
        );

    })

    return (
        <div>
            <Header pageTitle={'Meu carrinho'} />
            {isLoadingProfile && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingProfile && profileData && adressInfo}
            {!isLoadingProfile && !profileData && errorProfile}
            <FooterMenu selectedPage={'Cart'} />
        </div>
    );

}

export default CartPage