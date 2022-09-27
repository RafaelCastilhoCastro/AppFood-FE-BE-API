import React from 'react';
import {
    FormsPageContainer,
    Header,
    LoadingDiv,
    PrefilledUserForm
} from '../../components';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import { MarginDiv } from './style';
import gif from '../../img/loading-gif.gif'


export function EditUserPage() {

    // REQUEST

    const [profileData, isLoading, error] = useRequestData(`${BASE_URL}profile`)


    return (
        <FormsPageContainer>
            <Header buttonExists={true} pageTitle={'Editar'} />
            <MarginDiv />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && profileData && <PrefilledUserForm defaultValues={{
                name: profileData.user.name,
                email: profileData.user.email,
                cpf: profileData.user.cpf
            }} />}
            {!isLoading && !profileData && error}

        </FormsPageContainer>
    );

}