import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import { HeaderContainer, Title, TitleWithMargin } from "./style";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Header({ buttonExists, pageTitle }) {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            {buttonExists && 
                <button onClick={() => { goBack(navigate) }}>
                    <ArrowBackIosIcon style={{ "cursor": "pointer", 
                                                "width": "19px", 
                                                "margin-top": "2px" }}/>
                </button>}
            {(pageTitle && buttonExists) && <TitleWithMargin>{pageTitle}</TitleWithMargin>}
            {(pageTitle && !buttonExists) && <Title>{pageTitle}</Title>}
        </HeaderContainer>
    )
}