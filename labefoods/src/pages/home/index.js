import React from "react";
import gif from '../../img/loading-gif.gif'
import { HomePageContainer } from "./style";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export function HomePage() {
    useProtectedPage()

    return (
        <HomePageContainer>
            <img src={gif} alt='gif' />
        </HomePageContainer>
    )
}