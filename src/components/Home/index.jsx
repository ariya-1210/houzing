import React from 'react'
import { Container } from './style'
import CarouselCard from '../Carousel'
import HouseCard from '../HouseCard'

const Home = () => {
  return (
    <Container>
      <CarouselCard/>  
      <HouseCard/>
    </Container>
  )
}

export default Home
