import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from '../../hooks/useRequestData';
import * as All from './style';
import { Header, LoadingDiv } from '../../components';
import gif from '../../img/loading-gif.gif'
import { GlobalStateContext } from './../../global/globalStateContext';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Select } from '@mui/material';



export function DetailsPage() {

    const navigate = useNavigate();
    const pathParams = useParams();
    const { cartArray, setCartArray, totalValue, setTotalValue } = useContext(GlobalStateContext)
    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])

    // REQUEST

    const [restaurantData, isLoading, error] = useRequestData(`${BASE_URL}restaurants/${pathParams.id}`)

    const detailsArray = [{ ...restaurantData }]

    // FUNCTIONS

    const addProduct = (qty) => {
        if (qty > 0) {
            const exists = cartArray.find((e) => e.id === selectedItem.id);
        setTotalValue(totalValue + selectedItem.price * qty)
        if (exists) {
            setCartArray(
                cartArray.map((e) =>
                    e.id === selectedItem.id ? { ...exists, quantity: exists.quantity + qty } : e
                )
            )
        } else {
            setCartArray([...cartArray, { ...selectedItem, quantity: qty }])
        }
        }
        toggleQty()
    }

    const toggleQty = (product) => {
        setPopQty(!popQty)
        setSelectedItem(product)
    }

    const handleItemQty = (e) => {
        setItemQty(e.target.value)
    }

    // RENDER RESTAURANT DETAIL

    const detailsList = restaurantData && detailsArray.map(details => {
        return (
            <div key={details.restaurant.id}>
                <All.RestaurantImg src={details.restaurant.logoUrl} alt='logo' />
                <All.RestaurtTitle>{details.restaurant.name}</All.RestaurtTitle>
                <All.DescriptionDetail>{details.restaurant.category}</All.DescriptionDetail>
                <All.DescriptionContainer>
                    <All.DescriptionDetail>{details.restaurant.deliveryTime} min</All.DescriptionDetail>
                    <All.DescriptionDetail>R$ {details.restaurant.shipping},00</All.DescriptionDetail>
                </All.DescriptionContainer>
                <All.DescriptionDetail>{details.restaurant.address}</All.DescriptionDetail>

                <All.PrincDiv>Principais</All.PrincDiv>

                {details.restaurant.products.map(product => {
                    return (
                        <All.ContainerProd key={product.id}>
                            <All.ProductImg src={product.photoUrl} />
                            <All.TextDiv>
                                <All.ItemName>{product.name}</All.ItemName>
                                <All.ItemDetail>{product.description}</All.ItemDetail>
                                <All.PriceItem>R${product.price.toFixed(0)},00
                                    <All.AddButton onClick={()=> toggleQty(product)}>Adicionar</All.AddButton></All.PriceItem>
                            </All.TextDiv>
                            {popQty &&
                                <All.SetQty>
                                    <span>Selecione a quantidade desejada</span>
                                    <FormControl focused={false} sx={{ m: 1, width: '90%' }}>
                                        <Select
                                            value={itemQty}
                                            onChange={handleItemQty}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}

                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <button onClick={() => addProduct(itemQty)}>ADICIONAR AO CARRINHO</button>
                                </All.SetQty>

                            }
                        </All.ContainerProd>
                    )
                })
                }
            </div >
        )
    })

    return (
        <All.DetailsContainer>
            <Header buttonExists={true} pageTitle={'Restaurante'} />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && restaurantData && detailsList}
            {!isLoading && !restaurantData && error}
        </All.DetailsContainer>
    )
}
