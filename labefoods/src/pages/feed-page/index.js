import React from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'

export function Feedpage() {

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
            <All.restaurantCard>
                <img src="https://picsum.photos/300/100" alt="" />
                {/* <p>test</p> */}
            </All.restaurantCard>
        </All.FeedContainer>
    )
}