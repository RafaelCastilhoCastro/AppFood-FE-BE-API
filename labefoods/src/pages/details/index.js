import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import { useRequestData } from '../../hooks/useRequestData'
import { Header, LoadingDiv } from '../../components'
import gif from '../../img/loading-gif.gif'
import { GlobalStateContext } from './../../global/globalStateContext'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { MenuItem, Select } from '@mui/material'
import { useRef } from 'react'
import * as All from './style'


export function DetailsPage() {

    const pathParams = useParams()
    const { cartArray, setCartArray, totalValue, setTotalValue } = useContext(GlobalStateContext)
    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])
    const toggle = useRef(false)
    const [toggleGrayBackground, setToggleGrayBackground] = useState(false)

    // REQUEST

    const [restaurantData, isLoading, error] = useRequestData(`${BASE_URL}restaurants/${pathParams.id}`)

    const detailsArray = [{ ...restaurantData }]

    // FUNCTIONS

    const addProduct = (qty) => {
        if (qty > 0) {
            const exists = cartArray.find((e) => e.id === selectedItem.id)
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

    const deleteProduct = (product) => {
        const exists = cartArray.find((e) => e.id === product.id)
        setTotalValue(totalValue - product.price * product.quantity)
        if (exists) {
            setCartArray(cartArray.filter((e) => e.id !== product.id))
            setCartArray(
                cartArray.map((e) =>
                    e.id === product.id ? { ...exists, quantity: 0 } : e
                )
            )
            toggle.current = false
        }
    }

    const toggleQty = (product) => {
        setPopQty(!popQty)
        setSelectedItem(product)
        setToggleGrayBackground(!toggleGrayBackground)
    }

    const handleItemQty = (e) => {
        setItemQty(e.target.value)
    }

    // RENDER RESTAURANT DETAIL

    const detailsList = restaurantData && detailsArray.map(details => {
        return (
            <All.DetailsInfoDiv key={details.restaurant.id}>
                <All.RestaurantImg src={details.restaurant.logoUrl} alt='logo' />
                <All.RestaurtTitle>{details.restaurant.name}</All.RestaurtTitle>
                <All.RestaurantDescription>{details.restaurant.category}</All.RestaurantDescription>
                <All.DescriptionContainer>
                    <All.RestaurantDescription>{details.restaurant.deliveryTime} min</All.RestaurantDescription>
                    <All.RestaurantDescription>Frete R${details.restaurant.shipping.toFixed(2)}</All.RestaurantDescription>
                </All.DescriptionContainer>
                <All.RestaurantDescription>{details.restaurant.address}</All.RestaurantDescription>

                <All.ProductsTitle>Produtos</All.ProductsTitle>
                {details.restaurant.products.map(product => {
                    const exists = cartArray.find((e) => e.id === product.id)
                    if (!exists) {
                        toggle.current = false
                    } else {
                        toggle.current = true
                    }
                    return (
                        <All.ProductCard key={product.id}>
                            <All.ProductImg src={product.photoUrl} />
                            <All.CardTextDiv>
                                <All.NameCountDiv>
                                    <All.ItemName>{product.name}</All.ItemName>
                                    {toggle.current && <All.ItemCount>{exists.quantity}</All.ItemCount>}
                                </All.NameCountDiv>
                                <All.ItemDescription>{product.description}</All.ItemDescription>
                                <All.PriceDiv>
                                    <All.PriceSpan>R${product.price.toFixed(2)}</All.PriceSpan>
                                    {!toggle.current ? <All.AddButton onClick={() => toggleQty(product)}>adicionar</All.AddButton> : <All.RemoveButton onClick={() => { deleteProduct(product) }}>remover</All.RemoveButton>}
                                </All.PriceDiv>
                            </All.CardTextDiv>
                            {popQty &&
                                <>
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
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <button onClick={() => addProduct(itemQty)}>ADICIONAR AO CARRINHO</button>
                                    </All.SetQty>
                                </>
                            }
                        </All.ProductCard>
                    )
                })
                }
            </ All.DetailsInfoDiv>
        )
    })

    return (
            <All.DetailsContainer toggleGrayBackground={toggleGrayBackground}>
                <Header buttonExists={true} pageTitle={'Restaurante'} />
                {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
                {!isLoading && restaurantData && detailsList}
                {!isLoading && !restaurantData && error}
            </All.DetailsContainer>
    )
}
