import styled from "styled-components";
import { TextStyle } from "../../style"

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
        ${TextStyle.Normal}
    }

`

export const AddressDiv = styled.div`
    display: flex;
    background-color: #eeeeee;
    margin-bottom: 8px;
    width: 100%;
    padding: 8px 5%;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        ${TextStyle.Normal}
        margin: 4px 0;
    }

    p {
        ${TextStyle.Gray}
        margin: 4px 0;
    }
`

export const HistoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    margin-bottom: 58px;
`

export const HistoryTitle = styled.p`
    ${TextStyle.Normal}
    border-bottom: 1px solid #000;
    align-self: center;
    padding: 8px 0;
    width: 100%;
`

export const HistoryCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;

    .name {
        ${TextStyle.Red}
        letter-spacing: -0.4px;
    }

    .price {
        ${TextStyle.Normal}
        font-weight: bold;
    }

    .date {
        ${TextStyle.Small}
    }

`

export const EmptyHistory = styled.span`
    ${TextStyle.Normal}
    opacity: 0.89;
    text-align: center;
    margin: 20px 0;
`