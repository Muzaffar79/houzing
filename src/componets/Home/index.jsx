import React from 'react'
import { Container } from './style'
import Filter from '../Filter'
import Carousel from './Carousel'
import Card from '../Card'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel/>
      <Card></Card>
    </Container>
  )
}

export default Home;
