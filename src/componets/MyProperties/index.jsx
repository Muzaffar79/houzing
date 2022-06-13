import React, {useState} from 'react'
import { useQuery } from 'react-query';
import { useHttp } from '../../hooks/useHttp'
import { Container, Section, Wrapper } from './style'
import Card from '../Card'
import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';


export const MyProperties = () => {
  const [data, setData]= useState([])
  const {request} = useHttp();
  const navigate = useNavigate();

   useQuery('getMyProperties',
 ()=>{
    return request({url:'/v1/houses/me', token: true });
  },
  {onSuccess: (res)=>
  setData(res?.data || [])
  }
  );
  

  return (
   <Wrapper>
    <Section>
    <div className="title">Properties</div>
    <Button onClick={()=>navigate('/properties/addnew')} type={'primary'} width={'131px'} >Add New</Button>
    </Section>
   <Container>
       {
      data?.map((value)=>{
        return <Card info={value}/>
      })}
    </Container>
   </Wrapper>
  );
};

export default MyProperties
