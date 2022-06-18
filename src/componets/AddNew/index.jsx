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
    id: 'add-houses',
    version: 'add-house',
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
      address: data?.address,
      attachments: [
        {
          imgPath: 'https://namangansquare.com/wp-content/uploads/2020/05/nsq-apartments-img-80.jpg'
        }
      ],
      categoryId: 0,
      city: data.city || '',
      componentsDto: {
        additional: 'string',
        airCondition: true,
        courtyard: true,
        furniture: true,
        gasStove: true,
        internet: true,
        tv: true
      },
      country: data?.country || '',
      description: data?.description || '',
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
        area: data?.area || 0,
        bath: data?.bath || 0,
        beds: data?.beds || 0,
        garage: data?.garage || 0,
        room: data?.room || 0,
        yearBuild: data?.yearBuild ||0
      },
      locations: {
        latitude: center?.lat,
        longitude: center?.lng
      },
      name: 'string',
      price: data?.price || 0,
      region: data?.region || ' ',
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
        <Input name='category' onChange={onChange} value={data?.category} placeholder={'Category'}/>
        </Wrapper>
       <Wrapper>
        <Input name='description' onChange={onChange} value={data?.description} placeholder={'Property Description'}/>
       </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Additional</div>
        <Wrapper>
          <Input name='bath' value={data?.houseDetails?.bath} placeholder={'bath'} />
          <Input name='bed' value={data?.houseDetails?.bed} placeholder={'bed'} />
          <Input name= 'garage' value={data?.houseDetails?.garage} placeholder={'garage'} />
        </Wrapper>
        <Wrapper>
          <Input name='yearBuild' onChange={onChange} value={data?.yearBuild} placeholder={'year bild'} />
          <Input placeholder={'Home area'} />
          <Input name='room' onChange={onChange} value={data?.room}  placeholder={'Rooms'} />
        </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Price</div>
        <Wrapper>
          <Input name='price' onChange={onChange} value={data?.price} placeholder={'Price'}/>
          <Input placeholder={' Sale Price'}/>
        </Wrapper>
      </Section>
      <Section>
        <div className='subtitle'>Location</div>
        <Wrapper>
         <Input name='region' onChange={onChange} value={data?.region} placeholder={'Region'}/>
         <Input name='address' onChange={onChange} value={data?.address}  placeholder={'Address'}/>
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
