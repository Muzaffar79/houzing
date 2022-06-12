import React, { useRef, useState } from 'react'
import {CategoryWrapper, Container, Deteils, Img, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import uy from '../../../assets/img/uy3.png'
import { useNavigate } from 'react-router-dom'
import { useHttp } from '../../../hooks/useHttp'

const Category = ({ value}) => {
    const navigate = useNavigate();
   const goto =()=>{
    navigate(`/properties?category_id=${value?.id}`)
   }

  return <CategoryWrapper onClick={goto}>
    <Img src={uy} alt='tet' />
    <Deteils>{value?.name}</Deteils>
  </CategoryWrapper>
}

export const Recommended = () => {
  const [list, setList] = useState([])
  const slider = useRef();
  const {request} = useHttp();

  useQuery(
    '',
     () => request({url: '/v1/categories/list'}),
    {
      onSuccess: (res) => {
       let response = res?.data?.map((value) => (
          <Category key={value.id} value={value} />
        ));
       setList(response || []);
      }, 
    }
  );



  return (
    <Container>
      <div className='title center'>Categories</div>
      <div className='description center'>
        Siz orzu qilgan , siz izlagan shinam va arzonuylar
      </div>
      <Wrapper>
        <AliceCarousel arrow={false} ref={slider} autoWidth items={list} />
      </Wrapper>
    
    </Container>
  )
}

export default Recommended 