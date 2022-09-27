import styled from "styled-components";

export const RestaurantImg = styled.img`
width: 100vw;
padding: 20px;
border-radius: 12% 12% 0% 0%;
`

export const ContainerTop = styled.div`
margin-top: 10px;
text-align: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 1rem ;
letter-spacing: -0.39px;
font-family: Roboto;
font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  padding-bottom: 15px;
`

export const RestaurtTitle = styled.h2`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.75rem 1rem 0.5rem;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
  font-weight: 700;
  font-size: 20px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 50px;
`

export const DescriptionDetail = styled.p`
  height: 1.125rem;
  max-width: 100%;
  margin: 0.5rem 0.5rem 0.625rem 1rem;
  font-family: Roboto;
  font-size: 1.1rem;
  color: #b8b8b8;
`

export const PrincDiv = styled.div`
display: flex;
border-bottom: 2px solid black;
margin: 3rem 0.5rem 0.625rem 1rem;
overflow: auto;
padding-bottom: 15px;
`

export const TextDiv = styled.div`
display: flex;
  width: 100%;
  overflow-x:hidden;
flex-direction: column;
`

export const ContainerProd = styled.div`
margin-left: 10px;
display: flex;
flex-direction: row;
  width: 95vw;
  height: 7rem;
  border-radius: 8px;
  margin-top: 10px;
  border: solid 1px #b8b8b8;
`

export const ProductImg = styled.img`
width: 25vw;
height: 100%;
`

export const ItemName = styled.p`
margin: 10px 15px 7px;
  font-family: Roboto;
  font-size: 0.96rem;
  font-weight: 800;
  width: 100%;
  letter-spacing: -0.39px;
  color: #e8222e;
`

export const ItemDetail = styled.p`
  font-family: Roboto;
  margin: 0px 15px 13px;

  font-size: 0.85rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const PriceItem = styled.p`
display: flex;
justify-content: space-between;
width: 100%;
  height: 7.5rem;
  margin: 0.5rem 0 0 13px;
  font-weight: 700;
`

export const AddButton = styled.button`
  background-color: #FFFFFF;
  border: 1.3px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: 7px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  :active {
  background-color: #F7F7F7;
  border-color: #000000;
  transform: scale(.96);
}

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
 border: solid;

 span {
  margin: 15px;
 }

 button {
  background: transparent;
  border: none !important;
  color: lightskyblue;
  margin: 15px 10px;
  color: #4f81a8;
  align-self: flex-end;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

 }
`

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
`