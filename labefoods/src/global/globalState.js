import React from "react";
import { GlobalStateContext } from "./globalStateContext";
import { useRequestData } from './../hooks/useRequestData';
import { BASE_URL } from './../constants/constants';
import { useState } from "react";


export function GlobalState(props) {

    // STATES
    
    const [restaurantsData, loadingRestaurants, errorRestaurants] = useRequestData(`${BASE_URL}restaurants`);
   // const [restaurantInfoData, loadingRestaurantInfo, errorRestaurantInfo] = useRequestData(`${BASE_URL}restaurants/${'id'}`);

    // EFFECTS

    // REQUESTS

    // FUNCTIONS

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <GlobalStateContext.Provider
            value={
                {
                    handleMouseDownPassword,
                    restaurantsData
                }
            }>
            {props.children}
        </GlobalStateContext.Provider>
    )

}