import React from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../constants/constants";




export function DetailsPage() {

    const navigate = useNavigate();
    const pathParams = useParams();

    // REQUEST

    // useEffect(() => {
    //     getRestaurantDetail()
    // }, [])

    // const getRestaurantDetail = () => {

    //     axios.get(`${BASE_URL}${pathParams/id}`)
    //         .then((response) => {
    //             console.log(response.data)

    //         })
    //         .catch((err) => { console.log(err) })
    // }

    return (
        <>oi</>
    )
}
