import React, {useState} from 'react';
import { Container, Section, Wrapper } from './style';
import {Input, Button} from '../Generic'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {useHttp} from '../../hooks/useHttp';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';


export const AddNew = () => {
  const {id} = useParams();
  console.log(id);
const [data, setData] = useState({

})

  const { request } = useHttp();


  useQuery(
    'getSingle Item',
     ()=>{
   return id && request({ url: `/v1/houses/${id.replace(':', '')}`, token: true });
  }, 
   {
    onSuccess: (res)=>{
        setData(res?.data)
   }, 
   }
  );

  const navigate = useNavigate()

   const [center, setCenter] = useState({
    lat: 40.997415,
    lng: 71.511772
  })
  const containerStyle = {
    width: '100%',
    height: '600px'
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4'
  })


  const onClickMap = (e)=>{

  setCenter({
    lat: e?.latLng?.lat(), 
    lng: e?.latLng?.lng(), 
  })
}
  
  const { mutate } = useMutation(()=>
  request({
    url: '/v1/houses', 
    method: 'POST', 
    token: true,
    body:{
      address: 'Namangan Square',
      attachments: [
        {
          imgPath: 'https://namangansquare.com/wp-content/uploads/2020/05/nsq-apartments-img-80.jpg'
        }
      ],
      categoryId: 0,
      city: 'Namangan',
      componentsDto: {
        additional: 'string',
        airCondition: true,
        courtyard: true,
        furniture: true,
        gasStove: true,
        internet: true,
        tv: true
      },
      country: 'Uzbekistan',
      description: 'yular',
      favorite: true,
      homeAmenitiesDto: {
        additional: 'string',
        busStop: true,
        garden: true,
        market: true,
        park: true,
        parking: true,
        school: true,
        stadium: true,
        subway: true,
        superMarket: true
      },
      houseDetails: {
        area: 10,
        bath: 20,
        beds: 20,
        garage: 10,
        room: 10,
        yearBuilt: 2021
      },
      locations: {
        latitude: center?.lat,
        longitude: center?.lng
      },
      name: 'string',
      price: 0,
      region: 'Namangan',
      salePrice: 0,
      status: true,
      zipCode: '123456'
    
  }}))
  const {mutate: update} = useMutation((id)=>{
    return id && request({url: `/v1/houses/${id.replace(':', '')}`, method: 'PUT', token: true, body: data}) 
  })

const onSubmit = ()=>{
  if (id) {
    update(id, {
      onSuccess: res =>{
      if (res?.success) {
        message.info('update')
        navigate('/myproperties')
      }
      }
    })
  }else{
    mutate('',{
      onSuccess:(res)=>{
      
       if (res?.success) {
         navigate('/myproperties')
       }
      }
    })
  }
}



const onChange = ({target:{name, value}})=>{
  setData({
    ...data,
    [name]: value

  })
}

  return (
    <Container>
      <Section>
        <div className='subtitle'>Contact Information</div>
        <Wrapper>
        <Input name='address' onChange={onChange} value={data?.address} placeholder={'Property Title'}/>
        <Input placeholder={'Category'}/>
        </Wrapper>
       <Wrapper>
        <Input placeholder={'Property Description'}/>
       </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Additional</div>
        <Wrapper>
          <Input value={data?.houseDetails?.bath} placeholder={'bath'} />
          <Input value={data?.houseDetails?.bed} placeholder={'bed'} />
          <Input value={data?.houseDetails?.garage} placeholder={'garage'} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={'year bild'} />
          <Input placeholder={'Home area'} />
          <Input placeholder={'Rooms'} />
        </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Price</div>
        <Wrapper>
          <Input placeholder={'Price'}/>
          <Input placeholder={' Sale Price'}/>
        </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Location</div>
        <Wrapper>
         <Input placeholder={'Region'}/>
         <Input placeholder={'Address'}/>
        </Wrapper>
        <Wrapper>
          { isLoaded && (
        <GoogleMap
        mapContainerStyle={containerStyle} 
        center={center}
         zoom={10}
  
        onClick={onClickMap}
        >
          <Marker position={center}/>
     
        </GoogleMap>
      )}
        </Wrapper>
      </Section>
      <Button onClick={onSubmit} mt={10} type={'primary'} width={'150px'}>Submit</Button>
    </Container>
  )
}

export default AddNew
