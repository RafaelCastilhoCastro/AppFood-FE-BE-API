import React from "react";
import gif from '../../img/loading-gif.gif'
import { HomePageContainer } from "./style";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../../routes/Coordinator';

export function HomePage() {
    useProtectedPage()

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            goToFeedPage(navigate)
        }, 3000)
    }, [])
    

    return (
        <HomePageContainer>
            <img src={gif} alt='gif'/>
        </HomePageContainer>
    )
}