import React from "react";
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../../routes/Coordinator"

export function Homepage() {

    const navigate = useNavigate()

    return(
        <>
            <h1>Homepage</h1>
            <button onClick={()=>goToFeed(navigate("/feed"))}>Go to Feed</button>
        </>
    )
}