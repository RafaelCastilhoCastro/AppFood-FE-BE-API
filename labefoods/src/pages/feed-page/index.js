import React from "react";
import { useNavigate } from "react-router-dom"
import { FeedContainer } from './style'

export function Feedpage() {

    const navigate = useNavigate()

    return(
        <FeedContainer>
            <h1>Ifuture</h1>
            <input type="text" placeholder="Restaurante"/>
            <nav>
                <a href="">Burger</a>
                <a href="">Asiática</a>
                <a href="">Massas</a>
                <a href="">Saudáveis</a>
            </nav>
        </FeedContainer>
    )
}