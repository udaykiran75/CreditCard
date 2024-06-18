import styled from 'styled-components'

export const CreditBgcontainer = styled.div`
    height: 100vh;
    @media screen and (min-width: 768px){
        display: flex;
    }
`
export const CreditCardDiv = styled.div`
    height: 50%;
    background-color: #3b4b69;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width:768px){
        height: 100vh;
        width: 50%;
    }
`
export const PaymentInputDiv = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:768px){
        height: 100vh;
        width: 50%;
    }
`
export const Heading = styled.h1`
    font-family: Roboto;
    color: #ffffff;
    font-size: 25px;
    text-align: center;
    border-bottom: 2px solid #ffd773;
`
export const CreditCardImg = styled.div`
    align-self: center;
    height: 250px;
    margin-top: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
    width: 95%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    @media screen and (min-width:768px){
        height: 300px;
        width: 80%;
        margin-top: 110px;
    }
    background-image: url(https://assets.ccbp.in/frontend/hooks/credit-card-bg.png)
`
export const CardNumber = styled.p`
    font-family: Roboto;
    font-size: 25px;
    font-weight: normal;
    color: #ffffff;
`
export const HoldernameLabel = styled.p`
    font-family: Roboto;
    font-size: 15px;
    color: #d3d9e0;
    line-height: 0.5;
`
export const HolderName = styled.p`
    font-family: Roboto;
    font-size: 17px;
    color: #ffffff;
    margin: 0px;
`
export const PaymentCard = styled.div`
    width: 90%;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 16px 0px #bfbfbf;
    @media screen and (min-width:768px){
        height: 290px;
        width: 80%;
    }
`
export const PayHeading = styled.h1`
    font-family: Roboto;
    font-size: 23px;
    color: #344e7a;
    line-height: 3;
`
export const Input = styled.input`
    padding: 10px;
    padding-left: 13px;
    width: 87%;
    outline: none;
    font-size: 17px;
    margin-bottom: 40px;
`
