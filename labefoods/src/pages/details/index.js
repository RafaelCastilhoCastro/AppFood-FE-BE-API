import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import { useRequestData } from '../../hooks/useRequestData'
import { Header, LoadingDiv, ItemCard } from '../../components'
import gif from '../../img/loading-gif.gif'
import { GlobalStateContext } from './../../global/globalStateContext'
import { useState } from 'react'
import * as All from './style'


export function DetailsPage() {

    const pathParams = useParams()
    const { cartArray, setCartArray, totalValue, setTotalValue } = useContext(GlobalStateContext)
    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])
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
        setItemQty(0)
    }

    const deleteProduct = (product) => {
        const exists = cartArray.find((e) => e.id === product.id)
        setTotalValue(totalValue - product.price * product.quantity)
        if (exists) {
            setCartArray(cartArray.filter((e) => e.id !== exists.id))
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
                <ItemCard details={details} cartArray={cartArray} toggleQty={toggleQty} deleteProduct={deleteProduct} addProduct={addProduct} popQty={popQty} itemQty={itemQty} handleItemQty={handleItemQty}/>
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
