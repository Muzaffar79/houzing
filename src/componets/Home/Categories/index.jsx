  import React, { useRef } from 'react'
  import Card from '../../Card'
import { ArrowLeft, ArrowRight, Carousel, Container, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'

  
  export const Recommended = () => {
    const items = [
    <Card mr={20}/>, 
    <Card mr={20}/>,
    <Card mr={20}/>,
    <Card mr={20}/>,
    <Card mr={20}/>,
    
  ]
  const slider = useRef()
    return (
      <Container>
      <div className='title center'>Categories</div>
      <div className='description center'>
       Siz orzu qilgan , siz izlagan shinam va arzonuylar  
      </div>  
      <Wrapper>
        <Carousel>
        <AliceCarousel ref={slider} autoWidth items={items} />
        <ArrowRight onClick={()=>slider.current?.slidePrev()}>
        &lang;
        </ArrowRight>
       <ArrowLeft onClick={()=>slider.current?.slideNext()}>
        &lang;
        </ArrowLeft>
        </Carousel>
      </Wrapper>
      </Container>
    )
  }
  
  export default Recommended 