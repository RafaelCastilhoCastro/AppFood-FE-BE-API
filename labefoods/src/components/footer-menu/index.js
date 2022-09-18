import React from "react";
import { FooterContainer } from "./style";

export function FooterMenu(){
    return(
        <FooterContainer>
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
        </FooterContainer>
    )
}