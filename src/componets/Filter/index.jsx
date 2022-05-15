import React from 'react'
import { Advandced, Container, Icon, Section, Wrapper } from './style'
import {Button, Input} from '../Generic'
import { Popover } from 'antd'

export const Filter = () => {

const advandcedSearch =(
  <Advandced>
    <Advandced.Title>Address</Advandced.Title>
    <Section>
      <Input mr={20} placeholder={'Country'}/>
      <Input mr={20} placeholder={'Region'}/>
      <Input mr={20} placeholder={'City'}/>
      <Input mr={20} placeholder={'Zip Code'}/>
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
    <Button width='131px' ml={20} type='secondary'>
     Cancel</Button>
    <Button width='131px' ml={20} type='primary'>
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
