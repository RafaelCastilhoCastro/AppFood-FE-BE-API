import React from "react";
import gif from '../../img/loading-gif.gif'
import { HomePageContainer } from "./style";

export function HomePage() {


    return (
        <HomePageContainer>
            <img src={gif} alt='gif' />
        </HomePageContainer>
    )
}