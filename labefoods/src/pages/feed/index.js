import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { GlobalStateContext } from "../../global/globalStateContext";
import { useContext } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToDetailPage } from "../../routes/Coordinator";

export function FeedPage() {
    
    useProtectedPage()

    const navigate = useNavigate()

    const { restaurantsData } = useContext(GlobalStateContext)
    const [selectionValue, setSelectionValue] = useState('Todos')

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }

    const handleSelection = (e) => {
        setSelectionValue(e.target.value)
    }

    const restaurantList = restaurantsData && restaurantsData.restaurants.map((item, index) => {
        return (
                <All.RestaurantCard key={index} onClick={() => onClickCard(item.id)}>
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
                <input onClick={handleSelection} autoFocus type='button' value='Todos'/>
                <input onClick={handleSelection} type='button' value='Árabe'/>
                <input onClick={handleSelection} type='button' value='Asiática'/>
                <input onClick={handleSelection} type='button' value='Hamburguer'/>
                <input onClick={handleSelection} type='button' value='Italiana'/>
                <input onClick={handleSelection} type='button' value='Sorvetes'/>
                <input onClick={handleSelection} type='button' value='Carnes'/>
                <input onClick={handleSelection} type='button' value='Baiana'/>
                <input onClick={handleSelection} type='button' value='Petiscos'/>
                <input onClick={handleSelection} type='button' value='Mexicana'/>
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