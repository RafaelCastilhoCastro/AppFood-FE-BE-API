import React, { useRef } from "react";
import { GlobalStateContext } from "./globalStateContext";

export function GlobalState(props) {

    // FUNCTIONS

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // REGEX

    const validateEmail = email => /[a-z0-9_.-]+@[a-z]{3}[.a-z]?/.test(email);
    const validatePassword = password => /.{6,}/.test(password);
    const validateWords = word => /[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}/.test(word);
    const validateCPF = CPF => /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(CPF);
    const validateNumber = number => /[0-9]+/.test(number);

    const isValidated = useRef(false);

    return (
        <GlobalStateContext.Provider
            value={
                {
                    handleMouseDownPassword,
                    validateEmail,
                    validatePassword,
                    validateWords,
                    validateCPF,
                    validateNumber,
                    isValidated
                }
            }>
            {props.children}
        </GlobalStateContext.Provider>
    )

}