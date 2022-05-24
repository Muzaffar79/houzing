
import React from 'react'
import { Advandced, Container, Icon, Section, Wrapper } from './style'
import {Button, Input} from '../Generic'
import { Popover } from 'antd'
import { useNavigate} from 'react-router-dom'
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/usePerlace'



export const Filter = () => {
  const navigate = useNavigate();
  const query = useSearch();
 

  const onChange =({target})=>{
   const {value, name} = target;
   navigate(`${UseReplace(name, value)}`);
 
  }

const advandcedSearch =(
  <Advandced>
    <Advandced.Title>Address</Advandced.Title>
    <Section>
      <Input 
      onChange={onChange}
      name="country" 
      defaultValue={query.get('country')}
      placeholder={'Country'}/>
      <Input
      onChange={onChange} 
      name="region" 
      defaultValue={query.get('region')}
      placeholder={'Region'}/>
      <Input 
      onChange={onChange}
       name="city" 
       defaultValue={query.get('city')}
       placeholder={'City'}
       />
      <Input  placeholder={'Zip Code'}/>
    </Section>
    <Advandced.Title>Apartment info</Advandced.Title>
    <Section>
    <Input placeholder={'Rooms'}/>
    <Input placeholder={'Size'}/>
    <Input placeholder={'Sort'}/>
    </Section>
    <Advandced.Title>Price</Advandced.Title>
    <Section>
    <Input placeholder={'Min price'}/>
    <Input placeholder={'Max price'}/>
    </Section>
    <Section>
    <Button width='131px'  type='secondary'>
     Cancel</Button>
    <Button width='131px'  type='primary'>
     Search</Button>
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
