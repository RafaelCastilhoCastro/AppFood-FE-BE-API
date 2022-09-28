import styled from "styled-components";

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
`


export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  width: 100%;
  padding: 16px 5%;
`

export const AddressText = styled.span`
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin: 4px 0;
`

export const MyAddressText = styled.span`
  font-size: 16px;
  letter-spacing: -0.4px;
  margin: 4px 0;
  font-weight: 500;
`

export const EmptyCartText = styled.span`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.89;
  text-align: center;
  margin: 20px 0;
`
export const ShippingText = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  text-align: right;
  width: 90%;
  margin: 10px auto;
  
`
export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: 15px;
`
export const SubTotal = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`
export const FinalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: #e8222e;
`

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`

export const PaymentTitle = styled.p`
  font-size: 16px;
  letter-spacing: -0.4px;
  border-bottom: 1px solid #000;
  font-weight: 500;
  align-self: center;
  padding: 8px 0;
  width: 100%;
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`

export const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input[type='radio'] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    outline: none;
    margin-right: 8px;
  }

  input[type='radio']:before {
    content:'';
    display: block;
    width: 65%;
    height: 65%;
    margin: 17.5% auto;    
    border-radius: 50%;    
  }

  input[type='radio']:checked:before {
    background: black;
  }

  input[type="radio"]:checked {
    border-color: black;
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.4px;
  }
`

export const CartButton = styled.button`
  border: none;
  width: 90%;
  height: 42px;
  border-radius: 2px;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
  margin: 8px auto;
  font-weight: 500;
  background-color:#e8222e;
  margin-bottom: 59px;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  :disabled {
    background-color: rgba(232, 34, 46, 0.5);
  }

  :disabled:hover {
    opacity: 1;
    cursor: not-allowed;
  }

`
