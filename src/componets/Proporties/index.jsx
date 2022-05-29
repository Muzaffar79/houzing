import React from 'react'
import { useState } from 'react'
import Filter from '../Filter/'
import Card from '../Card'
import { Container, Total, Wrapper } from './style'
import { useQuery } from 'react-query'
import { useLocation,useNavigate } from 'react-router-dom'

 

const {REACT_APP_BASE_URL: url} = process.env;

export const Proporties = () => {
      const [data, setData] = useState([])
      const {search} = useLocation();
       const navigate = useNavigate()

    useQuery(['get data', search],
    ()=>{
     return fetch(`${url}/v1/houses/list${search}`).then((res)=>res.json())
    }, {
        onSuccess: (res)=>{
          setData(res?.dataList[0] || []);  
        }
    })
   const onSelect =(id)=>{
    navigate(`/properties/:${id}`)
   }
  return (
    <Container>
          <Filter />
   <div className="title">Proporties</div>
   <div className='description center'>
       Siz orzu qilgan , siz izlagan shinam va arzonuylar  
      </div>  
      <Total className='description'>{data?.length} Total </Total>
        <Wrapper>
        {
          data?.map((value)=>{
              return <Card 
              key={value.id} 
              onClick={()=>onSelect(value.id)} 
              info={value}/>
              
          })  
        }
        </Wrapper>
    </Container>
  )
}
 export default Proporties