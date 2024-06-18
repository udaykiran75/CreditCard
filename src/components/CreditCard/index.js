import {useState} from 'react'

import {
  CreditBgcontainer,
  CreditCardDiv,
  PaymentInputDiv,
  Heading,
  CreditCardImg,
  CardNumber,
  HoldernameLabel,
  HolderName,
  PaymentCard,
  PayHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeCardnumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholdername = event => {
    setHolderName(event.target.value)
  }

  return (
    <CreditBgcontainer>
      <CreditCardDiv>
        <Heading>Credit Card</Heading>
        <CreditCardImg data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <HoldernameLabel>CARDHOLDER NAME</HoldernameLabel>
          <HolderName>{holderName.toUpperCase()}</HolderName>
        </CreditCardImg>
      </CreditCardDiv>
      <PaymentInputDiv>
        <PaymentCard>
          <PayHeading>Payment Method</PayHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardnumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeCardholdername}
          />
        </PaymentCard>
      </PaymentInputDiv>
    </CreditBgcontainer>
  )
}
export default CreditCard
