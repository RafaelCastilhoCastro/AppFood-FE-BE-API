import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { GlobalStateContext } from "../../global/globalStateContext";
import { useContext } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"

export function FeedPage() {
    
    useProtectedPage()

    const navigate = useNavigate()

    const { restaurantsData } = useContext(GlobalStateContext)
    const [selectionValue, setSelectionValue] = useState('Burger')

    const restaurantList = restaurantsData && restaurantsData.map((item, index) => {
        return (
                <All.RestaurantCard key={index}>
                    <img src={item.logoUrl} alt="Logo do restaurante" />
                    <h3>{item.name}</h3>
                    <div>
                        <p>{`${item.deliveryTime} min`}</p>
                        <p>{`Frete R$ ${item.shipping},00`}</p>
                    </div>
                </All.RestaurantCard>
        )
    })

    console.log(selectionValue)

    return(
        <All.FeedContainer>
            <h1>Ifuture</h1>
            <input type="text" placeholder="Restaurante"/>
            <All.Categories>
                <input onClick={(e) => setSelectionValue(e.target.value)} autoFocus type='button' value='Burger'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Asiática'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Massas'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Saudáveis'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Vegetariana'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Pizzas'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Brasileira'/>
                <input onClick={(e) => setSelectionValue(e.target.value)} type='button' value='Promoções'/>
            </All.Categories>

            <All.RestaurantCardContainer>
                <ul>
                    {restaurantList}
                </ul>
            </All.RestaurantCardContainer>

            <All.FooterContainer>
                <FooterMenu/>
            </All.FooterContainer>
        </All.FeedContainer>
    )
}