
import React,{useState} from 'react'
import { Advandced, Container, Icon, Section, Wrapper } from './style'
import {Button, Input} from '../Generic'
import { Popover } from 'antd'
import { useNavigate} from 'react-router-dom'
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/usePerlace'
import { useQuery } from 'react-query'


export const Filter = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate();
  const query = useSearch();
 
  const [state, setState] = useState({
    country: query.get('country'),
    city: query.get('city'),
    region: query.get('region'),
    zipCode: query.get('zipCode'),
    maxPrice: query.get('maxPrice'),
    minPrice: query.get('minPrice'),
    size: query.get('size'),
    sort: query.get('sort'),
    room: query.get('room'),
   
  });
  const { REACT_APP_BASE_URL: url } = process.env;

  useQuery(
    '', () => {
    return fetch(`${url}/v1/categories/list`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json());
  },
    {
      onSuccess: (res) => {
     
        setList(res?.dataList || [])
 
      }
    }
  );
  

  const onChange =({target})=>{
   const {value, name} = target;
   navigate(`${UseReplace(name, value)}`);
   setState({...state, [name]: value});
    
  };

  const onSelect =({target})=>{
    navigate(`${UseReplace("category_id", target.value)}`);
  }
  const onClear =()=>{
  setState({
  country: "",
city: "",
region: "",
zipCode: "",
maxPrice: "",
minPrice: "",
size: "",
sort: "",
room: "",
  });
  navigate (`/properties`)
};

const advandcedSearch =(
  <Advandced>
    <Advandced.Title>Address</Advandced.Title>
    <Section>
      <Input 
      onChange={onChange}
      name="country" 
      value={state.country}
      placeholder={'Country'}/>
      <Input
      onChange={onChange} 
      name="region" 
      value={state.region}
      placeholder={'Region'}/>
      <Input 
      onChange={onChange}
       name="city" 
       value={state.city}
       placeholder={'City'}
       />
      <Input name="zipCode" value={state.zipCode} placeholder={'Zip Code'}/>
    </Section>
    <Advandced.Title>Apartment info</Advandced.Title>
    <Section>
    <Input  value={state.room} placeholder={'Room'}/>
    <Input  value={state.size} placeholder={'Size'}/>
    <Input  value={state.sort} placeholder={'Sort'}/>
    </Section>
    <Advandced.Title>Price</Advandced.Title>
    <Section>
    <Input  value={state.minPrice} placeholder={'Min price'}/>
    <Input value={state.maxPrice} placeholder={'Max price'}/>
    <select name="" id="" defaultValue={query.get('category_id')} onChange={onSelect}>
      {
        list.map((value, index)=>{
          return <option key={index} value={index + 1}>{value}</option>
        })
      }
    </select>
    </Section>
    <Section>
     <Button width='131px'  type='primary' onClick={onClear}>
     Clear</Button>
    </Section>
  </Advandced>
  )

  return (
    <Container>
    <Wrapper>
      <Input 
      pl='42px'
      placeholder={'Enter an address, neighborhood, city, or ZIP code'}>
      <Icon.Home/>
      </Input>
     <Popover placement='bottomRight' content={advandcedSearch} trigger={'click'}>
      <Button width='131px' ml={20} type='secondary'>
        <Icon.Setting/>Advanced</Button>
     </Popover>
      <Button width='131px' ml={20} type='primary'>
      <Icon.Search/> Search</Button>
    </Wrapper>
     </Container>
  )
}

export default Filter;
