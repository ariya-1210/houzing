import React, { useRef } from 'react'
import {  Blur, Container, Content, Image,Div } from './style'
import { Carousel } from 'antd'
import Home1 from '../../assets/img/house1.webp'
import Home2 from '../../assets/img/house2.webp'
import Button from '../Generic/Button'

export const CarouselCard = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const carousel=useRef()
  

  return (
    < Container>
      
      <Carousel ref={carousel} afterChange={onChange}>
        <Image src={Home1} alt="#" />
        <Image src={Home2} alt="#" />
    </Carousel>
    <Blur/>
    <Content>
      <Content.Title>
      Skyper Pool Partment
      </Content.Title>
    <Content.SubTitle>112 Glenwood Ave Hyde Park, Boston, MA</Content.SubTitle>  
    <Content.Price>$5,250 / mo</Content.Price>  
    <Div>
    < Button/> 
    </Div>
    </Content>
    </Container>
  )
}

export default CarouselCard
