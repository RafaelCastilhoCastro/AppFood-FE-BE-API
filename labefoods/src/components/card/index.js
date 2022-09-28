import React from 'react'
import * as All from './style'
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem } from '@mui/material';

export function ItemCard({details, cartArray, toggleQty, deleteProduct, addProduct, popQty, itemQty, handleItemQty}) {

    const cardsArray = details.restaurant.products.map(product => {
        console.log(cartArray)
        var exists = cartArray.find((e) => e.id === product.id)
        var toggle = false
         if (exists) {
            toggle = true
        }
        return (
            <All.ProductCard key={product.id}>
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
                    <>
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
                    </>
                }
            </All.ProductCard>
        )
    })
    
  return (
    <>
    {cardsArray}
    </>
  )
}