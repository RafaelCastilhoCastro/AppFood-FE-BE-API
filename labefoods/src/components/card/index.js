import React, { useContext, useState } from 'react'
import { GlobalStateContext } from '../../global/globalStateContext'
import * as All from './style'

export function ItemCard({ product, toggleGrayBackground, setToggleGrayBackground, details }) {

    const { cartArray, setCartArray, totalValue, setTotalValue, setShippingValue } = useContext(GlobalStateContext)

    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])

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
        setShippingValue(details.restaurant.shipping)
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

    var exists = cartArray.find((e) => e.id === product.id)
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
                    {!toggle ? <All.AddButton onClick={() => toggleQty(product)}>adicionar</All.AddButton> : <All.RemoveButton onClick={() => { deleteProduct(product); }}>remover</All.RemoveButton>}
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