import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailsInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 16px auto;
`

export const RestaurantImg = styled.img`
  width: 100%;
  height: 160px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const RestaurtTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #e8222e;
  margin: 10px 0;
`
export const RestaurantDescription = styled.span`
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin-bottom: 10px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 50px;
`
export const ProductsTitle = styled.div`
  font-size: 16px;
  letter-spacing: -0.4px;
  border-bottom: 1px solid #000;
  font-weight: 500;
  padding: 8px 0;
  width: 100%;
`

export const ProductCard = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  border-radius: 8px;
  margin-top: 10px;
  border: solid 1px #b8b8b8;
`

export const ProductImg = styled.img`
  width: 30%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const CardTextDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const NameCountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 40px;
  min-height: 33px;
`

export const ItemName = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #e8222e;
  align-self: flex-end;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const ItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e8222e;
  color: #e8222e;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  min-width: 33px;
  height: 33px;
`

export const ItemDescription = styled.p`
  margin: 10px 15px 0;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #b8b8b8;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 31px;
  margin-top: auto;
`

export const PriceSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin-left: 15px;
`

export const AddButton = styled.button`
  background: none;
  border: 1px solid #000;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  width: 90px;

`

export const RemoveButton = styled.button`
  background: none;
  border: 1px solid #e8222e;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  height: 31px;
  width: 90px;
  color: #e8222e;

`

export const SetQty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 90%;

  span {
    margin: 15px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
  }

  button {
    background: transparent;
    border: none !important;
    color: lightskyblue;
    margin: 15px;
    color: #4f81a8;
    align-self: flex-end;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: -0.4px;

    :hover {
      opacity: 0.8;
    }
 }
`
