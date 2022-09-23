import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from '../../hooks/useRequestData';
import { ContainerTop, DescriptionDetail, RestImg, RestaurtTitle, DetailDiv, PrincDiv, ContainerProd, ProductImg, ItemName, ItemDetail, PriceItem, TextDiv, AddButton, DescriptionDetail2 } from './style';
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
                <RestImg src={details.restaurant.logoUrl} alt='logo' />
                <RestaurtTitle>{details.restaurant.name}</RestaurtTitle>
                <DescriptionDetail>{details.restaurant.category}</DescriptionDetail>
                <DescriptionDetail2><span>{details.restaurant.deliveryTime - 10} - {details.restaurant.deliveryTime} min</span> Frete R${details.restaurant.shipping},00</DescriptionDetail2>
                <DescriptionDetail>Frete R${details.restaurant.shipping},00</DescriptionDetail>
                <DescriptionDetail>{details.restaurant.address}</DescriptionDetail>

                <PrincDiv>Principais</PrincDiv>

                {details.restaurant.products.map(product => {
                    return (
                        // <DetailDiv>
                        <ContainerProd key={product.id}>
                            <ProductImg src={product.photoUrl} />
                            <TextDiv>
                                <ItemName>{product.name}</ItemName>
                                <ItemDetail>{product.description}</ItemDetail>
                                <PriceItem>R${product.price.toFixed(0)},00
                                    <AddButton>Adicionar</AddButton></PriceItem>
                            </TextDiv>
                        </ContainerProd>
                        // </DetailDiv>
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
