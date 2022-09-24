import styled from "styled-components";

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;

`

export const InfoDiv = styled.div`
    display: flex;
    margin: 8px 0;
    width: 90%;
    align-self: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        margin: 4px 0;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.4px;
    }

`

export const AddressDiv = styled.div`
    display: flex;
    background-color: #eeeeee;
    margin: 8px 0;
    width: 100%;
    padding: 8px 5%;
    justify-content: space-between;


    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.4px;
        margin: 4px 0;
    }

    p {
        color: #b8b8b8;
        font-size: 16px;
        letter-spacing: -0.4px;
        margin: 4px 0;
    }
`

export const HistoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
`

export const HistoryTitle = styled.p`
    font-size: 16px;
        letter-spacing: -0.4px;
        border-bottom: 1px solid #000;
        font-weight: 500;
        align-self: center;
        padding: 8px 0;
        width: 100%;
`

export const HistoryCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;

    .name {
        color: #e8222e;
        font-weight: 500;
        font-size: 16px;
    }

    .price {
        font-weight: bold;
        font-size: 16px;
    }


`