import React from "react";
import { GlobalStateContext } from "./globalStateContext";
import { useRequestData } from './../hooks/useRequestData';
import { BASE_URL } from './../constants/constants';
import { useState } from "react";


export function GlobalState(props) {

    // STATES

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwdConfirmation, setPwdConfirmation] = useState("")
    //const [restaurantsData, loadingRestaurants, errorRestaurants] = useRequestData(`${BASE_URL}restaurants`);
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
                    name,
                    setName,
                    email,
                    setEmail,
                    cpf,
                    setCpf,
                    pwd,
                    setPwd,
                    pwdConfirmation,
                    setPwdConfirmation,
                    handleMouseDownPassword
                }
            }>
            {props.children}
        </GlobalStateContext.Provider>
    )

}