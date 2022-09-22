import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { GlobalStateContext } from "../../global/globalStateContext";
import { useContext } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToDetailPage } from "../../routes/Coordinator";
import { Header } from "../../components";

export function FeedPage() {

    useProtectedPage()

    const navigate = useNavigate()

    // STATES

    const { restaurantsData } = useContext(GlobalStateContext)
    const [selectionValue, setSelectionValue] = useState('Todos')
    const [filterValue, setFilterValue] = useState('')
    const [selected, setSelected] = useState("1");

    //FUNCTIONS

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }

    const handleSelection = (e) => {
        setSelectionValue(e.target.value)
        setSelected(e.target.id);
    }

    const handleFilter = (e) => {
        setFilterValue(e.target.value)
    }

    //FILTERS

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

    // MAP

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

    return (
        <All.FeedContainer>
            <Header pageTitle={'Ifuture'} />
            <input type="text" placeholder="Restaurante" value={filterValue} onChange={handleFilter} />
            <All.Categories>
                <button className={selected === "1" ? "selected" : undefined} id={"1"} onClick={handleSelection} value='Todos'>Todos</button>
                <button className={selected === "2" ? "selected" : undefined} id={"2"} onClick={handleSelection} value='Árabe'>Árabe</button>
                <button className={selected === "3" ? "selected" : undefined} id={"3"} onClick={handleSelection} value='Asiática'>Asiática</button>
                <button className={selected === "4" ? "selected" : undefined} id={"4"} onClick={handleSelection} value='Hamburguer'>Hamburguer</button>
                <button className={selected === "5" ? "selected" : undefined} id={"5"} onClick={handleSelection} value='Italiana'>Italiana</button>
                <button className={selected === "6" ? "selected" : undefined} id={"6"} onClick={handleSelection} value='Sorvetes'>Sorvetes</button>
                <button className={selected === "7" ? "selected" : undefined} id={"7"} onClick={handleSelection} value='Carnes'>Carnes</button>
                <button className={selected === "8" ? "selected" : undefined} id={"8"} onClick={handleSelection} value='Baiana'>Baiana</button>
                <button className={selected === "9" ? "selected" : undefined} id={"9"} onClick={handleSelection} value='Petiscos'>Petiscos</button>
                <button className={selected === "10" ? "selected" : undefined} id={"10"} onClick={handleSelection} value='Mexicana'>Mexicana</button>
            </All.Categories>

            <All.RestaurantCardContainer>
                <ul>
                    {restaurantList}
                </ul>
            </All.RestaurantCardContainer>


            <FooterMenu />
        </All.FeedContainer>
    )
}