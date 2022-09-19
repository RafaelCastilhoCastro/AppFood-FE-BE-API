import React from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { GlobalStateContext } from "../../global/globalStateContext";
import { useContext } from "react"

export function FeedPage() {

    const navigate = useNavigate()

    const { restaurantsData } = useContext(GlobalStateContext)

    const restaurantList = restaurantsData&&restaurantsData.map(item => {
        return (
            <>
                <All.RestaurantCard>
                    <img src={item.logoUrl} alt="Logo do restaurante" />
                    <h3>{item.name}</h3>
                    <div>
                        <p>{`${item.deliveryTime} min`}</p>
                        <p>{`Frete R$ ${item.shipping},00`}</p>
                    </div>
                </All.RestaurantCard>
            </>
        )
    })

    return(
        <All.FeedContainer>
            <h1>Ifuture</h1>
            <input type="text" placeholder="Restaurante"/>
            <All.Categories>
                <a href="/">Burger</a>
                <a href="/">Asiática</a>
                <a href="/">Massas</a>
                <a href="/">Saudáveis</a>
                <a href="/">Vegetariana</a>
                <a href="/">Pizzas</a>
                <a href="/">Brasileira</a>
                <a href="/">Promoções</a>
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