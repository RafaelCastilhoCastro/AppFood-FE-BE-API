import styled from "styled-components";
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ::after{
    content:'';
    height: ${(props) => props.toggleGrayBackground ? '100%' : '0'};
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
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
