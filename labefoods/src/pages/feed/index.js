import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToDetailPage } from "../../routes/Coordinator";
import { Header, LoadingDiv } from "../../components";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../hooks/useRequestData";
import gif from '../../img/loading-gif.gif'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export function FeedPage() {

    useProtectedPage()

    const navigate = useNavigate()

    // REQUISITIONS
    
    const [restaurantsData, 
            loadingRestaurants, 
            errorRestaurants] = useRequestData(`${BASE_URL}restaurants`);
    const [activeOrderData, 
            loadingActiveOrder, 
            errorActiveOrder] = useRequestData(`${BASE_URL}active-order`)
    
    // STATES

    const [selectionValue, setSelectionValue] = useState('Árabe')
    const [filterValue, setFilterValue] = useState('')
    const [focused, setFocused] = useState(false);
    const [title, setTitle] = useState('iFuture')
    const [display, setDisplay] = useState('inline')
    const [margin, setMargin] = useState('8px')
    const [selected, setSelected] = useState("1")

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

    const onFocus = () => {
        setFocused(true);
        setTitle('Buscar');
        setDisplay('none');
        setMargin('0px')
        setSelectionValue('Todos')
    }

    const onBlur = () => {
        setFocused(false);
        setTitle('iFuture');
        setDisplay('inline');
        setMargin('8px')
        setSelectionValue('Árabe')
        setSelected('1')
        setFilterValue('')
    }

    //FILTERS

    let arrayFiltrado = restaurantsData && restaurantsData.restaurants.filter((item, index, array) => {
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

    if (arrayFiltrado && focused && filterValue === '') {
        arrayFiltrado = [0]
    }

    if (arrayFiltrado?.length === 0) {
        arrayFiltrado = [1]
    }

    // MAP

    const restaurantList = arrayFiltrado && arrayFiltrado.map((item, index, array) => {
        if (item === 0) {
            return (
                <span key={index}>Busque por nome de restaurante</span>
            )
        } else if (item === 1) {
            return (
                <span key={index}>Não encontramos :(</span>
            )
        } else {
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
        }
    })

    return (
        <All.FeedContainer>
            <Header pageTitle={title} />
            <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: '90%' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /> </InputAdornment>,
                }}
                value={filterValue}
                onChange={handleFilter}
                placeholder="Restaurante"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <All.Categories display={display} margin={margin}>
                <button className={selected === "1" ? "selected" : undefined} id={"1"} onClick={handleSelection} value='Árabe'>Árabe</button>
                <button className={selected === "2" ? "selected" : undefined} id={"2"} onClick={handleSelection} value='Asiática'>Asiática</button>
                <button className={selected === "3" ? "selected" : undefined} id={"3"} onClick={handleSelection} value='Baiana'>Baiana</button>
                <button className={selected === "4" ? "selected" : undefined} id={"4"} onClick={handleSelection} value='Hamburguer'>Burger</button>
                <button className={selected === "5" ? "selected" : undefined} id={"5"} onClick={handleSelection} value='Carnes'>Carnes</button>
                <button className={selected === "6" ? "selected" : undefined} id={"6"} onClick={handleSelection} value='Italiana'>Italiana</button>
                <button className={selected === "7" ? "selected" : undefined} id={"7"} onClick={handleSelection} value='Mexicana'>Mexicana</button>
                <button className={selected === "8" ? "selected" : undefined} id={"8"} onClick={handleSelection} value='Petiscos'>Petiscos</button>
                <button className={selected === "9" ? "selected" : undefined} id={"9"} onClick={handleSelection} value='Sorvetes'>Sorvetes</button>
            </All.Categories>

            <All.RestaurantCardContainer>
                {loadingRestaurants && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
                {!loadingRestaurants && restaurantsData && restaurantList}
                {!loadingRestaurants && !restaurantsData && errorRestaurants}
            </All.RestaurantCardContainer>
            
            {!loadingActiveOrder && !activeOrderData && errorActiveOrder}
            {!loadingActiveOrder && activeOrderData && activeOrderData.order &&
            <All.ActiveOrderAlert>
            <div>
                <AccessTimeIcon style={{color:'#fff'}} fontSize="large"/>
            </div>
            <div>
                <p className="activeTitle">Pedido em andamento</p>
                <p>{activeOrderData.order.restaurantName}</p>
                <p className="activeSubtotal">
                    SUBTOTAL R${activeOrderData.order.totalPrice.toFixed(2)}
                </p>
            </div>
            </All.ActiveOrderAlert>
            }

            <FooterMenu selectedPage={'Feed'} />
        </All.FeedContainer>
    )
}