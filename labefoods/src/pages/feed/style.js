import styled from "styled-components";

export const FeedContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow-y: auto;
    overflow-x: hidden;
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

export const RestaurantCardContainer = styled.div`
    overflow: auto;

    div{
        margin-top: 5px;
    }
`

export const RestaurantCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 95vw;
    overflow: hidden;
`

export const FooterContainer = styled.div`
    margin-top: auto;
`