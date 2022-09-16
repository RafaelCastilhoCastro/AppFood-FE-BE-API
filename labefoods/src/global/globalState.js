import React from "react";
import { GlobalStateContext } from "./globalStateContext";


export function GlobalState(props) {

    // STATES

    // EFFECTS

    // REQUESTS

    return (
        <GlobalStateContext.Provider >
            {props.children}
        </GlobalStateContext.Provider>
    )

}