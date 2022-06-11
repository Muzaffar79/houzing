import React, {useState} from 'react'
import { useQuery } from 'react-query'

import { useParams } from 'react-router-dom'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { Container } from './style'


export const SelectedHouse = () => {
  const[state, setState] = useState({})
const {id} = useParams()



const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 41.311081,
  lng: 69.240562
};

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

const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
})
  return (
    <Container>
      { isLoaded && (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      )}
    
    </Container>
  )
}

export default SelectedHouse;
