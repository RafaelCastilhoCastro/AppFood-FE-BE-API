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
        letter-spacing: -0.4px;
        margin: 0 7%;
    }

    ::-webkit-scrollbar { 
        display: none; 
    }
`

export const RestaurantCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 49px;
`

export const RestaurantCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    cursor: pointer;

    img{
        width: 100%;
        height: 150px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-top: solid 1px #e0dcdc;

    h3 {
        width: 90%;
        margin: auto;
        margin-top: 10px;
        font-weight: 500;
        font-size: 16px;
        color: #e8222e;
        text-align: start;
        letter-spacing: -0.4px;
    }

    div {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 4px;
    }

    div p {
        color: #b8b8b8;
        font-size: 16px;
        letter-spacing: -0.4px;
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