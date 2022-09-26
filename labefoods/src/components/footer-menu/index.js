import React from "react";
import { FooterContainer } from "./style";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { useNavigate } from "react-router-dom";
import { goToCartPage, goToFeedPage, goToProfilePage } from "../../routes/Coordinator";


export function FooterMenu({ selectedPage }) {

    const navigate = useNavigate();

    return (
        <FooterContainer>
            <AiOutlineHome
                onClick={() => { goToFeedPage(navigate) }}
                style={selectedPage === "Feed" ? { 'color': '#e8222e', 'font-size': '30px', 'cursor': 'pointer' } : { 'color': '#b8b8b8', 'font-size': '30px', 'cursor': 'pointer'  }}
            />
            <AiOutlineShoppingCart
                onClick={() => { goToCartPage(navigate) }}
                style={selectedPage === "Cart" ? { 'color': '#e8222e', 'font-size': '30px', 'cursor': 'pointer'  } : { 'color': '#b8b8b8', 'font-size': '30px', 'cursor': 'pointer'  }}
            />
            <BsPerson
                onClick={() => { goToProfilePage(navigate) }}
                style={selectedPage === "Profile" ? { 'color': '#e8222e', 'font-size': '30px', 'cursor': 'pointer'  } : { 'color': '#b8b8b8', 'font-size': '30px', 'cursor': 'pointer'  }}
            />
        </FooterContainer>
    )
}