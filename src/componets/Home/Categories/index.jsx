import React, { useRef, useState } from 'react'
import {CategoryWrapper, Container, Deteils, Img, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import uy from '../../../assets/img/uy3.png'
import { useNavigate } from 'react-router-dom'
const { REACT_APP_BASE_URL: url } = process.env;


const Category = ({ value}) => {
    const navigate = useNavigate();
   const goto =()=>{
    navigate(`/properties?category_id=${value?.id}`)
   }

  return <CategoryWrapper onClick={goto}>
    <Img src={uy} alt='tet' />
    <Deteils>{value.name}</Deteils>
  </CategoryWrapper>
}

export const Recommended = () => {
  const [list, setList] = useState([])

  const slider = useRef();

  useQuery('', () => {
    return fetch(`${url}/v1/categories/list`,).then((res) => res.json());
  },
    {
      onSuccess: (res) => {
        let response = res?.data.map((value) => (

          <Category key={value.id} value={value}   />

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
        <AliceCarousel arrow={false} ref={slider} autoWidth items={list} />
      </Wrapper>
    
    </Container>
  )
}

export default Recommended 