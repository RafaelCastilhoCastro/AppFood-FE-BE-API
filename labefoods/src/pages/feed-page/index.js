import React from "react";
import { useNavigate } from "react-router-dom"
import { feedContainer } from "./style";

export function Feedpage() {

    const navigate = useNavigate()

    return(
        <feedContainer>
            <h1>Ifuture</h1>
            <input type="text"/>
            <nav>
                <a href="">Burger</a>
                <a href="">Asiática</a>
                <a href="">Massas</a>
                <a href="">Saudáveis</a>
            </nav>
        </feedContainer>
    )
}