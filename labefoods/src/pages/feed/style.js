import styled from "styled-components";

export const FeedContainer = styled.main`
    height: 100vh;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    /* overflow: hidden; */
    border: 1px solid lightgray;

    h1{
        border-bottom: 1px solid lightgray;
        padding: 15px;
        width: 100vw;
    }

    input{
        height: 4em;
        width: 95vw;
        margin: 10px auto 0;
    }

    nav{
        display: flex;
        gap: 15px;
        overflow: scroll;
        height: 2em;
        align-self: normal;
        margin: 5px 15px;
    }
`

export const RestaurantCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 95vw;
    /* overflow: hidden; */
`

export const FooterContainer = styled.div`
    margin-top: auto;
`