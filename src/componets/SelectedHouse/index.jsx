import React, {useState} from 'react'
import { useQuery } from 'react-query'

import { useParams } from 'react-router-dom'


import { Container } from './style'


export const SelectedHouse = () => {
  const[state, setState] = useState({})
const {id} = useParams()
const {REACT_APP_BASE_URL: url} = process.env;
useQuery('get data',()=>{
  return fetch(`${url}/v1/houses/${id.replace(':', '')}`,{
    method: 'GET',
    headers:{
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  }).then(res=>res.json());
},{
  onSuccess: (res)=>{
  setState(res?.data)
  },
  keepPreviousData: true,
  refetchOnWindowFocus: false
})
  return (
    <Container>
      <h1>{state?.description}</h1>
      {
        state?.attachments?.map((value)=>{
          return(
            <div>
              <img src={value?.imgPath} alt="" />
            </div>
          )
        })
      }
    </Container>
  )
}

export default SelectedHouse;
