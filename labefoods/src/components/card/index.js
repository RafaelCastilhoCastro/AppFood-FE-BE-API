import React, { useContext, useState } from 'react'
import { GlobalStateContext } from '../../global/globalStateContext'
import * as All from './style'
import { useEffect } from 'react';

export function ItemCard({ product, toggleGrayBackground, setToggleGrayBackground, details, getData }) {

    const { totalValue, setTotalValue, setShippingValue, storedArray } = useContext(GlobalStateContext)

    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])

    // FUNCTIONS

    const addProduct = (qty) => {
        if (qty > 0) {
            if (!storedArray.current) {
                storedArray.current = []
            }
            const exists = storedArray.current?.find((e) => e.id === selectedItem.id)
            setTotalValue(totalValue + selectedItem.price * qty)
            if (exists) {
                var newArray = storedArray.current.map((e) =>
                        e.id === selectedItem.id ? { ...exists, quantity: exists.quantity + qty } : e
                    )
                    localStorage.setItem('cart', JSON.stringify(newArray))
                    storedArray.current = JSON.parse(localStorage.getItem('cart'))
            } else {
                var newArray = [...storedArray.current, { ...selectedItem, quantity: qty }]
                localStorage.setItem('cart', JSON.stringify(newArray))
                storedArray.current = JSON.parse(localStorage.getItem('cart'))
            }
        }
        toggleQty()
        setItemQty(0)
        setShippingValue(details.restaurant.shipping)
    }

    const deleteProduct = (product) => {
        const exists = storedArray.current?.find((e) => e.id === product.id)
        setTotalValue(totalValue - product.price * product.quantity)
            var newArray = storedArray.current.filter((e) => e.id !== exists.id)
            localStorage.setItem('cart', JSON.stringify(newArray))
            storedArray.current = JSON.parse(localStorage.getItem('cart'))
            if (storedArray.current?.length === 0) {
                getData()
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

    var exists = storedArray.current?.find((e) => e.id === product.id)
    var toggle = false
    if (exists) {
        toggle = true
    }

    return (
        <All.ProductCard>
            <All.ProductImg src={product.photoUrl} />
            <All.CardTextDiv>
                <All.NameCountDiv>
                    <All.ItemName>{product.name}</All.ItemName>
                    {toggle && <All.ItemCount>{exists.quantity}</All.ItemCount>}
                </All.NameCountDiv>
                <All.ItemDescription>{product.description}</All.ItemDescription>
                <All.PriceDiv>
                    <All.PriceSpan>R${product.price.toFixed(2)}</All.PriceSpan>
                    {!toggle ? <All.AddButton onClick={() => toggleQty(product)}>adicionar</All.AddButton> : <All.RemoveButton onClick={() => { deleteProduct(product);}}>remover</All.RemoveButton>}
                </All.PriceDiv>
            </All.CardTextDiv>
            {popQty &&
                <All.SetQty>
                    <span>Selecione a quantidade desejada</span>
                    <select value={itemQty} onChange={handleItemQty} >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <button onClick={() => addProduct(itemQty)}>ADICIONAR AO CARRINHO</button>
                </All.SetQty>
            }

        </All.ProductCard>
    )
}