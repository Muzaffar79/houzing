import React from 'react'
import { useState } from 'react'
// import Filter from '../Filter/'
import Card from '../Card'
import { Container, Total, Wrapper } from './style'
import { useQuery } from 'react-query'

const {REACT_APP_BASE_URL: url} = process.env;

export const Proporties = () => {
    const [data, setData] = useState([])

    useQuery('get data', ()=>{
     return fetch(`${url}/v1/houses/list`).then((res)=>res.json())
    }, {
        onSuccess: (res)=>{
          setData(res?.dataList[0]);  
        }
    })
    console.log(data);
  return (
    <Container>
          {/* <Filter /> */}
   <div className="title">Proporties</div>
   <div className='description center'>
       Siz orzu qilgan , siz izlagan shinam va arzonuylar  
      </div>  
      <Total className='description'>{data.length} Total </Total>
        <Wrapper>
        {
          data.map((value)=>{
              return <Card info={value}/>
          })  
        }
        </Wrapper>
    </Container>
  )
}
 export default Proporties