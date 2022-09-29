import React, { useContext } from 'react';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import { Header, FooterMenu, LoadingDiv, ItemCard } from "../../components";
import gif from '../../img/loading-gif.gif'
import { useState } from 'react';
import * as All from './style'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { GlobalStateContext } from '../../global/globalStateContext';
import { goToFeedPage } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export function CartPage() {

    useProtectedPage();

    const token = localStorage.getItem('token')

    const navigate = useNavigate();

    const { totalValue, setTotalValue, shippingValue, setShippingValue, storedArray, restaurantId } = useContext(GlobalStateContext)

    // STATES

    const [selectedOption, setSelectedOption] = useState('')

    // REQUEST

    const [profileData, isLoadingProfile, errorProfile, getData] = useRequestData(`${BASE_URL}profile`)
    const profileAddress = [{ ...profileData }]

    // FUNCTIONS

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    if (storedArray.current?.length === 0) {
        setShippingValue(0)
    }

    // RENDER CARDS

    const cardInfo = storedArray.current?.map(product => {
        return (
            <ItemCard getData={getData} key={product.id} product={product} />
        )
    })

    // PLACE ORDER

    const ordedProducts = storedArray.current?.map(product => {
        return {id: `${product.id}`, quantity: product.quantity}
    })


    const order = {
        products: ordedProducts,
        paymentMethod: selectedOption
    }

    const placeOrder = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}restaurants/${restaurantId}/order`, order, { headers: { auth: token } })
            .then(response => {
                goToFeedPage(navigate)
                localStorage.setItem('cart', JSON.stringify([]))
                setTotalValue(0)
            })
            .catch(err => {
                alert(err.response.data.message)
                console.log(err)
            })

    }


    const cartInfo = profileData && profileAddress.map(profile => {
        return (
            <>
                <All.AddressDiv>
                    <All.AddressText>Meu Endereço</All.AddressText>
                    <All.MyAddressText>{profile.user.address}</All.MyAddressText>
                </All.AddressDiv>
                {
                    storedArray.current?.length > 0 ?
                        cardInfo :
                        <All.EmptyCartText>Carrinho Vazio</All.EmptyCartText>
                }
                <All.ShippingText>R$ {shippingValue.toFixed(2)}</All.ShippingText>
                <All.TotalDiv>
                    <All.SubTotal>SUBTOTAL</All.SubTotal>
                    <All.FinalValue>R$ {(totalValue + shippingValue).toFixed(2)}</All.FinalValue>
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
                                <input type="radio" onChange={handleOptionChange} value="creditcard" checked={selectedOption === 'creditcard'} />
                                Cartão de crédito
                            </label>
                        </All.OptionDiv>
                    </All.PaymentOptions>
                </All.PaymentDiv>
                {
                    storedArray.current?.length > 0 ?
                        <All.CartButton onClick={placeOrder}>Confirmar</All.CartButton> :
                        <All.CartButton disabled>Confirmar</All.CartButton>
                }
            </>
        );

    })

    return (
        <All.CartPageContainer>
            <Header pageTitle={'Meu carrinho'} />
            {isLoadingProfile && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingProfile && profileData && cartInfo}
            {!isLoadingProfile && !profileData && errorProfile}
            <FooterMenu selectedPage={'Cart'} />
        </All.CartPageContainer>
    );

}

export default CartPage