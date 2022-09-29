import React from 'react';
import {
    FormsPageContainer,
    Header,
    LoadingDiv,
    PrefilledAddressForm
} from '../../components';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import gif from '../../img/loading-gif.gif'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import * as All from './style'


export function EditAddressPage() {

    useProtectedPage();

    // GET FULL ADDRESS

    const [addressData, isLoading, error] = useRequestData(`${BASE_URL}profile/address`)


    return (
        <FormsPageContainer>
            <Header buttonExists={true} pageTitle={'Endereço'} />
            <All.MarginDiv />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && addressData && <PrefilledAddressForm defaultValues={{
                street: addressData.address.street,
                number: addressData.address.number,
                neighbourhood: addressData.address.neighbourhood,
                city: addressData.address.city,
                state: addressData.address.state,
                complement: addressData.address.complement
            }} />}
            {!isLoading && !addressData && error}

        </FormsPageContainer>
    );

}
