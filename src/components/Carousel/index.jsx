import React, { useRef } from 'react'
import { Arrow, Container, Image } from './style'
import { Carousel } from 'antd'
import Home1 from '../../assets/img/house1.webp'
import Home2 from '../../assets/img/house2.webp'

// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

export const CarouselCard = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const carousel=useRef()
    const onMove=({target:{dataset:{name}}})=>{
      if(name==='right') carousel.current.next()
      if(name==='left') carousel.current.prev()
    }

  return (
    <Container>
      
      <Carousel ref={carousel} afterChange={onChange}>
        <Image src={Home1} alt="#" />
        <Image src={Home2} alt="#" />
    </Carousel>

    <Arrow onClick={onMove} data-name='left' left/>
    <Arrow onClick={onMove} data-name='right'/>
    
    </Container>
  )
}

export default CarouselCard
