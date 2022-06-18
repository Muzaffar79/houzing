  import React, { useRef, useState } from 'react'
  import Card from '../../Card'
import { ArrowLeft, ArrowRight, Carousel, Container, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import { useHttp } from '../../../hooks/useHttp'

  
  export const Recommended = () => {
  const [data, setData] = useState([]);
  const {request} = useHttp();

    useQuery('get data', 
    ()=> request({url:`/v1/houses/list`}),
    {
        onSuccess: (res)=>{
         setData(res?.data || []);  
          },
          }
    )
    const items = data.map((value)=>(
     <Card 
     key={value.id}
     info={value}
     />
    )
    )

  const slider = useRef()
    return (
      <Container>
      <div className='title center'>Recommended</div>
      <div className='description center'>
       Siz orzu qilgan , siz izlagan shinam va arzonuylar  
      </div>  
      <Wrapper>
        <Carousel>
        <AliceCarousel arrow={false} ref={slider} autoWidth autoPlay items={items} />
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