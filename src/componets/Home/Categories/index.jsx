  import React, { useRef, useState } from 'react'
  import Card from '../../Card'
import { ArrowLeft, ArrowRight, Carousel, CategoryWrapper, Container, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'

const {REACT_APP_BASE_URL: url} = process.env;

const Title = ({title})=>{
  return <CategoryWrapper>{title}</CategoryWrapper>
}
  
  export const Recommended = () => {
    const [list, setList] = useState([])

  const slider = useRef();
  
  useQuery('', () =>{
    return fetch(`${url}v1/categories`,{
      headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res)=>res.json());
  },
  {
    onSuccess: (res)=>{
      let response = res?.dataList?.[0].map((value)=> (
        <div style={{height: '200px', width: '500px'}}>
      <Title title={value}/>    
        </div>
      ))
      setList(response || [])

    }
  }
  );



    return (
      <Container>
      <div className='title center'>Categories</div>
      <div className='description center'>
       Siz orzu qilgan , siz izlagan shinam va arzonuylar  
      </div>  
      <Wrapper>
        <Carousel>
        <AliceCarousel ref={slider} autoWidth items={list} />
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