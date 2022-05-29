import React, { useRef, useState } from 'react'
import {CategoryWrapper, Container, Deteils, Img, Wrapper } from './sstyle'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import uy from '../../../assets/img/uy3.png'
import { useNavigate } from 'react-router-dom'
const { REACT_APP_BASE_URL: url } = process.env;


const Category = ({ title, id }) => {
    const navigate = useNavigate();
   const goto =()=>{
    navigate(`/properties?category_id=${id}`)
   }

  return <CategoryWrapper onClick={goto}>
    <Img src={uy} alt='tet' />
    <Deteils>{title}</Deteils>
  </CategoryWrapper>
}

export const Recommended = () => {
  const [list, setList] = useState([])

  const slider = useRef();

  useQuery('', () => {
    return fetch(`${url}/v1/categories`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json());
  },
    {
      onSuccess: (res) => {
        let response = res?.dataList?.[0].map((value, index) => (

          <Category title={value} id={index + 1}  />

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