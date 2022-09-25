import React from 'react';
import { Header, FooterMenu, LoadingDiv } from "../../components";
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import gif from '../../img/loading-gif.gif'
import { AddressDiv, HistoryCard, HistoryDiv, InfoDiv, ProfileDiv } from './style';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { goToEditAddressPage, goToEditUserPage } from '../../routes/Coordinator';


export function ProfilePage() {

    const navigate = useNavigate();

    // REQUESTS

    const [profileData, isLoadingProfile, errorProfile] = useRequestData(`${BASE_URL}profile`)

    const [ordersData, isLoadingOrders, errorOrders] = useRequestData(`${BASE_URL}orders/history`)


    // RENDER PROFILE INFO

    const profileArray = [{ ...profileData }]

    const profileInfo = profileData && profileArray.map(profile => {
        return (
            <ProfileDiv key={profile.user.id}>
                <InfoDiv>
                    <div>
                        <span>{profile.user.name}</span>
                        <span>{profile.user.email}</span>
                        <span>{profile.user.cpf}</span>
                    </div>
                    <ModeEditOutlineOutlinedIcon onClick={() => {goToEditUserPage(navigate)}} />
                </InfoDiv>
                <AddressDiv>
                    <div>
                        <p>Endereço cadastrado</p>
                        <span>{profile.user.address}</span>
                    </div>
                    <ModeEditOutlineOutlinedIcon onClick={() => {goToEditAddressPage(navigate)}} />
                </AddressDiv>
            </ProfileDiv>
        )
    })


    // RENDER ORDERS HISTORY

    const ordersArray = [{ ...ordersData }]

    const ordersHistory = ordersData && ordersArray.map((orders, index) => {
        return (
            <HistoryDiv key={index}>
                <p>Histórico de pedidos</p>
                {orders.orders.map((order, idx) => {
                    return (
                        <HistoryCard key={idx}>
                            <span className='name'>{order.restaurantName}</span>
                            <span className='price'>
                                SUBTOTAL R${order.totalPrice}
                                {order.totalPrice % 2 === 0 ? ',00' : ''}
                            </span>
                        </HistoryCard>
                    )
                })}
            </HistoryDiv>
        )
    })



    return (
        <div>
            <Header pageTitle={'Meu perfil'} />
            {isLoadingProfile && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingProfile && profileData && profileInfo}
            {!isLoadingProfile && !profileData && errorProfile}
            {isLoadingOrders && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoadingOrders && ordersData && ordersHistory}
            {!isLoadingOrders && !ordersData && errorOrders}
            <FooterMenu selectedPage={'Profile'} />
        </div>
    );

}
