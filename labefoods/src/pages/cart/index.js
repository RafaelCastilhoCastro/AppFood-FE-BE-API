import React from 'react';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import { Header, FooterMenu, LoadingDiv } from "../../components";
import gif from '../../img/loading-gif.gif'
import { useState } from 'react';
import * as All from './style'


export function CartPage() {

    // STATES

    const [selectedOption, setSelectedOption] = useState('')

    // REQUEST

    const [profileData, isLoadingProfile, errorProfile] = useRequestData(`${BASE_URL}profile`)
    const profileAddress = [{ ...profileData }]

    // FUNCTIONS

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const addressInfo = profileData && profileAddress.map(profile => {
        return (
            <All.CartDiv>
                <All.AddressDiv>
                    <All.AddressText>Meu Endereço</All.AddressText>
                    <All.MyAddressText>{profile.user.address}</All.MyAddressText>
                </All.AddressDiv>
                <All.EmptyCartText>Carrinho Vazio</All.EmptyCartText>
                <All.ShippingText>
                    Frete    R$ 0,00
                </All.ShippingText>
                <All.TotalDiv>
                    <All.SubTotal>
                        SUBTOTAL
                    </All.SubTotal>
                    <All.FinalValue>
                        R$ 0,00
                    </All.FinalValue>
                </All.TotalDiv>

                <All.PaymentDiv>
                    <All.PaymentTitle>Forma de Pagamento</All.PaymentTitle>
                    <All.PaymentOptions>
                        <All.OptionDiv>
                            <label>
                                <input type="radio" onChange={handleOptionChange} value="money" checked={selectedOption === 'money'} />
                                Dinheiro
                            </label>
                        </All.OptionDiv>
                        <All.OptionDiv>
                            <label>
                                <input type="radio" onChange={handleOptionChange} value="card" checked={selectedOption === 'card'} />
                                Cartão de crédito
                            </label>
                        </All.OptionDiv>
                    </All.PaymentOptions>
                </All.PaymentDiv>
                {true ? <All.CartButton disabled onClick={""}>Confirmar</All.CartButton> : <All.CartButton onClick={""}>Confirmar</All.CartButton>}
            </All.CartDiv>
        );

    })

    return (
        <div>
            <Header pageTitle={'Meu carrinho'} />
            {isLoadingProfile && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingProfile && profileData && addressInfo}
            {!isLoadingProfile && !profileData && errorProfile}
            <FooterMenu selectedPage={'Cart'} />
        </div>
    );

}

export default CartPage