import React from "react";
import { FooterContainer } from "./style";

export function FooterMenu(){
    return(
        <FooterContainer>
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <i class="fa fa-user fa-2x" aria-hidden="true"></i>
        </FooterContainer>
    )
}