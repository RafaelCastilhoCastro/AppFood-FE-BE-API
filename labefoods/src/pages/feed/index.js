import React from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'

export function FeedPage() {

    const navigate = useNavigate()

    return(
        <All.FeedContainer>
            <h1>Ifuture</h1>
            <input type="text" placeholder="Restaurante"/>
            <nav>
                <a href="">Burger</a>
                <a href="">Asiática</a>
                <a href="">Massas</a>
                <a href="">Saudáveis</a>
                <a href="">Vegetariana</a>
                <a href="">Pizzas</a>
                <a href="">Brasileira</a>
                <a href="">Promoções</a>
            </nav>
            <All.RestaurantCard>
                <img src="https://picsum.photos/355/100" alt="" />
                <h3>Vinil Butantã</h3>
                <div>
                    <p>50 - 60 min</p>
                    <p>Frete R$ 6,00</p>
                </div>
            </All.RestaurantCard>
            <All.RestaurantCard>
                <img src="https://picsum.photos/355/100" alt="" />
                <h3>Bullger Eldorado</h3>
                <div>
                    <p>30 - 45 min</p>
                    <p>Frete R$ 6,00</p>
                </div>
            </All.RestaurantCard>
        </All.FeedContainer>
    )
}