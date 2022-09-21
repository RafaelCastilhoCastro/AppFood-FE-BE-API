import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from '../../hooks/useRequestData';




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
                <img src={details.restaurant.logoUrl} alt='logo' />
                <span>{details.restaurant.name}</span>
                <span>{details.restaurant.category}</span>
                <span>{details.restaurant.deliveryTime}</span>
                <span>{details.restaurant.shipping}</span>
                <span>{details.restaurant.address}</span>
                {details.restaurant.products.map(product => {
                    return (
                        <div key={product.id}>
                            <span>{product.name}</span>
                            <span>{product.description}</span>
                            <span>{product.price}</span>
                        </div>
                    )
                })}
            </div>
        )
    })


    return (
        <>
            {isLoading && <span>Carregando...</span>}
            {!isLoading && restaurantData && detailsList}
            {!isLoading && !restaurantData && error}
        </>
    )
}
