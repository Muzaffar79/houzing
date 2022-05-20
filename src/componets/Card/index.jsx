import React from 'react'
import { Container, Img, Info, InfoWrapper, Icons, Footer, User } from './style';
import nobackroundimg from '../../assets/img/noimg.jpg'
import nouser from '../../assets/img/nouser.jpg'

export const Card = ({ info, mr }) => {
  return (
    <Container mr={mr}>
      <Img src={info?.attachments[0]?.imgPath || nobackroundimg} />
      <InfoWrapper>
        <User>
          <User.Img src={info?.attachments[0]?.imgPath || nouser} />
        </User>
        <div
          className="subtitle"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', padding: '8px 0px'  }}
        >
          {info?.description}
        </div>
        <div
          className='description'
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', paddingBottom: '8px'  }}
        >
          {info?.name || 'house'}, {info?.address || 'Address'},{' '}
          {info?.city || 'City'}, {info?.country || 'Country'}
        </div>
        <Info>
          <Info.Detail>
            <Icons.Bed />
            <div className="descrition">{info?.houseDetails?.beds || 0} Beds</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Bath />
            <div className="descrition">{info?.houseDetails?.bath || 0} Bath</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Garade />
            <div className="descrition">{info?.houseDetails?.garage || 0} Garade</div>
          </Info.Detail>
          <Info.Detail>
            <Icons.Ruler />
            <div className="descrition">{info?.houseDetails?.area || 0} Sq Ft</div>
          </Info.Detail>
        </Info>
        <Footer>
          <Info.Detail>
            <div className='deleted descrition'>{info?.salePrice || 0}</div>
            <div className='subtitle'>{info?.price || 0}</div>
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