import React from 'react'
import { Container, Img, Info, InfoWrapper, Icons, Footer, User } from './style';
import nobackroundimg from '../../assets/img/noimg.jpg'
import nouser from '../../assets/img/nouser.jpg'

export const Card = (info, mr) => {
  return (
    <Container mr={mr}>
     <Img src={info?.img || nobackroundimg} />
     <InfoWrapper>
     <User>
       <User.Img src={info?.user?.img || nouser}/>
     </User>
       <div className="subtitle">New Apartment Nice Wiew</div>
       <div className='description'>Quincy St, Brooklyn, NY, USA</div>
      <Info>
      <Info.Detail>
        <Icons.Bed />
        <div className="descrition">{info?.beds || 0 } Beds</div>
      </Info.Detail>
      <Info.Detail>
        <Icons.Bath/>
        <div className="descrition">{info?.bath || 0 } Bath</div>
      </Info.Detail>
      <Info.Detail>
        <Icons.Garade/>
        <div className="descrition">{info?.garage || 0 } Garade</div>
      </Info.Detail>
      <Info.Detail>
        <Icons.Ruler/>
        <div className="descrition">{info?.sqr || 0 } Sqr</div>
      </Info.Detail>
      </Info>  
       <Footer>
       <Info.Detail>
         <div className='deleted descrition'>12.00$</div>
         <div className='subtitle'>15.00$</div>
       </Info.Detail>
       <div className='endToRight'>
         <Icons.Resize />
         <Icons.Love />
       </div>
       </Footer>   
     </InfoWrapper>
    </Container>
  )
}
export default Card;