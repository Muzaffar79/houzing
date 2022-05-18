import React from 'react'
import { Container, Img, Info, InfoWrapper } from './style';
import nobackroundimg from '../../assets/img/noimg.jpg'
import nouser from '../../assets/img/nouser.jpg'

export const Card = (info) => {
  return (
    <Container>
     <Img src={info?.img || nobackroundimg} />
     <InfoWrapper>
       <div className="subtitle">New Apartment Nice Wiew</div>
       <div className='description'>Quincy St, Brooklyn, NY, USA</div>
      <Info>
      <Info.Detail>Info.Detail</Info.Detail>
      <Info.Detail>Info.Detail</Info.Detail>
      <Info.Detail>Info.Detail</Info.Detail>
      <Info.Detail>Info.Detail</Info.Detail>
      </Info>  
        
     </InfoWrapper>
    </Container>
  )
}
export default Card;