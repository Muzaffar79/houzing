import React from 'react'
import { Container } from './style'
import Filter from '../Filter'
import Carousel from './Carousel'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel/>
    </Container>
  )
}

export default Home;
