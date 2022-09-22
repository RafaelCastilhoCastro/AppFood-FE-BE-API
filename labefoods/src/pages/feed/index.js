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
    const [filterValue, setFilterValue] = useState('')
    const [active, setActive] = useState("1");

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }

    const handleSelection = (e) => {
        setSelectionValue(e.target.value)
        setActive(e.target.id);
    }

    const handleFilter = (e) => {
        setFilterValue(e.target.value)
    }

    const arrayFiltrado = restaurantsData && restaurantsData.restaurants.filter((item, index, array) => {
        if (selectionValue === 'Todos') {
            return array
        } else {
            return item.category.toLowerCase().includes(selectionValue.toLowerCase())
        }
    }).filter((item, index, array) => {
        if (filterValue === '') {
            return array
        } else {
            return item.name.toLowerCase().includes(filterValue.toLowerCase())
        }
    })

    console.log(arrayFiltrado)



    const restaurantList = arrayFiltrado && arrayFiltrado.map((item, index) => {
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
            <input type="text" placeholder="Restaurante" value={filterValue} onChange={handleFilter}/>
            <All.Categories>
                <button  className={active === "1" ? "active" : undefined} id={"1"} onClick={handleSelection} value='Todos'>Todos</button>
                <button className={active === "2" ? "active" : undefined} id={"2"} onClick={handleSelection} value='Árabe'>Árabe</button>
                <button className={active === "3" ? "active" : undefined} id={"3"} onClick={handleSelection} value='Asiática'>Asiática</button>
                <button className={active === "4" ? "active" : undefined} id={"4"} onClick={handleSelection} value='Hamburguer'>Hamburguer</button>
                <button className={active === "5" ? "active" : undefined} id={"5"} onClick={handleSelection} value='Italiana'>Italiana</button>
                <button className={active === "6" ? "active" : undefined} id={"6"} onClick={handleSelection} value='Sorvetes'>Sorvetes</button>
                <button className={active === "7" ? "active" : undefined} id={"7"} onClick={handleSelection} value='Carnes'>Carnes</button>
                <button className={active === "8" ? "active" : undefined} id={"8"} onClick={handleSelection} value='Baiana'>Baiana</button>
                <button className={active === "9" ? "active" : undefined} id={"9"} onClick={handleSelection} value='Petiscos'>Petiscos</button>
                <button className={active === "10" ? "active" : undefined} id={"10"} onClick={handleSelection} value='Mexicana'>Mexicana</button>
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