import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from '../../hooks/useRequestData';
import * as All from './style';
import { Header, LoadingDiv } from '../../components';
import gif from '../../img/loading-gif.gif'



export function DetailsPage() {

    const navigate = useNavigate();
    const pathParams = useParams();

    // REQUEST

    const [restaurantData, isLoading, error] = useRequestData(`${BASE_URL}restaurants/${pathParams.id}`)

    const detailsArray = [{ ...restaurantData }]

    // RENDER RESTAURANT DETAIL

    const detailsList = restaurantData && detailsArray.map(details => {
        return (
            <div key={details.restaurant.id}>
                <All.RestaurantImg src={details.restaurant.logoUrl} alt='logo' />
                <All.RestaurtTitle>{details.restaurant.name}</All.RestaurtTitle>
                <All.DescriptionDetail>{details.restaurant.category}</All.DescriptionDetail>
                <All.DescriptionContainer>
                    <All.DescriptionDetail>{details.restaurant.deliveryTime} min</All.DescriptionDetail>
                    <All.DescriptionDetail>R$ {details.restaurant.shipping},00</All.DescriptionDetail>
                </All.DescriptionContainer>
                <All.DescriptionDetail>{details.restaurant.address}</All.DescriptionDetail>

                <All.PrincDiv>Principais</All.PrincDiv>

                {details.restaurant.products.map(product => {
                    return (
                        <All.ContainerProd key={product.id}>
                            <All.ProductImg src={product.photoUrl} />
                            <All.TextDiv>
                                <All.ItemName>{product.name}</All.ItemName>
                                <All.ItemDetail>{product.description}</All.ItemDetail>
                                <All.PriceItem>R${product.price.toFixed(0)},00
                                    <All.AddButton>Adicionar</All.AddButton></All.PriceItem>
                            </All.TextDiv>
                        </All.ContainerProd>
                    )
                })
                }
            </div >
        )
    })

    return (
        <>
            <Header buttonExists={true} pageTitle={'Restaurante'} />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && restaurantData && detailsList}
            {!isLoading && !restaurantData && error}
        </>
    )
}
