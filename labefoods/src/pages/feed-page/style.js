import styled from "styled-components";

export const FeedContainer = styled.main`
    height: 97vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid lightgray;

    h1{
        border-bottom: 1px solid lightgray;
        padding-bottom: 5px;
        /* margin-top: 5px; */
    }

    input{
        height: 3em;
    }

    nav{
        display: flex;
        gap: 15px;
        overflow: auto;
        height: 2em;
        margin: 10px 10px 0 10px;
    }
`

export const restaurantCard = styled.div`
    border: 1px solid lightgray;
    /* padding: 5px; */
`