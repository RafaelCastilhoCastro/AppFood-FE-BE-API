import React from 'react';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import { Header, FooterMenu, LoadingDiv } from "../../components";
import gif from '../../img/loading-gif.gif'
import { useRadioGroup } from '@material-ui/core/RadioGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@material-ui/core';
import { red } from '@mui/material/colors';
import { Adress, AdressText, EmptyCart, Frete, MyAdressText, Payment, PayOption, SubTotal, TotalArea, ValorFinal, Confirm, ConfirDiv } from './style';





export function CartPage() {

    const [profileData, isLoadingProfile, errorProfile] = useRequestData(`${BASE_URL}profile`)
    const profileAdress = [{ ...profileData }]




    const controlProps = (item) => ({
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const adressInfo = profileData && profileAdress.map(profile => {

        return (
            <div>
                <Adress>
                    <AdressText>Meu Endereço</AdressText>
                    <MyAdressText>{profile.user.address}</MyAdressText>
                </Adress>
                <EmptyCart>Carrinho Vazio</EmptyCart>
                <Frete>
                    Frete    R$ 0,00
                </Frete>
                <TotalArea>
                    <SubTotal>
                        SUBTOTAL
                    </SubTotal>
                    <ValorFinal>
                        R$ 0,00
                    </ValorFinal>
                </TotalArea>

                <Payment>Forma de Pagamento</Payment>
                <PayOption>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Dinheiro"
                        name="radio-buttons-group">
                        <FormControlLabel value="money" control={<Radio
                            {...controlProps('e')}
                            sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                            }} />} label="Dinheiro" />
                        <FormControlLabel value="credito" control={<Radio
                            {...controlProps('d')}
                            sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                            }}
                        />} label="Cartão de Crédito" />
                    </RadioGroup>
                </PayOption>
                <ConfirDiv>
                    <Confirm onClick={""}>Confirmar</Confirm>
                </ConfirDiv>
            </div>
        );

    })

    return (
        <div>
            <Header buttonExists={true} pageTitle={'Carrinho'} />
            {isLoadingProfile && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingProfile && profileData && adressInfo}
            <FooterMenu selectedPage={'Cart'} />
        </div>
    );

}

export default CartPage