import styled from "styled-components";

export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Categories = styled.div`
    flex-shrink: 0;
    display: flex;
    overflow: scroll;
    height: 42px;
    margin-bottom: ${(props) => props.margin};
    width: 100%;

    .selected {
            color: #e8222e;
        }

    button {
        display: ${(props) => props.display};
        width: auto;
        height: auto;
        background: transparent;
        cursor: pointer;    
        border: none !important;
        font-weight: 500;
        font-size: 16px;
        margin: 0 7%;
    }

    ::-webkit-scrollbar { 
        display: none; 
    }
`

export const RestaurantCardContainer = styled.div`
    overflow: auto;
    width: 90%;
`

export const RestaurantCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;

    img{
        width: 100%;
        height: 15rem;
    }

    h3 {
        color: #e8222e;
        text-align: start;
        margin-left: 53px;
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    div p {
        color: var(--subtitle-gray);
    }
`

export const ActiveOrderAlert = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100vw;
    padding: 30px;
    background: red;
    position: fixed;
    bottom: 50px;

    .activeTitle{
        color: #fff;
    }

    .activeSubtotal{
        font-weight: bolder;
    }
`