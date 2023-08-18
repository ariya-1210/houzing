import React from 'react'
import { Container, Image,Content, Swagger,Line} from './style'
import image from '../../assets/img/uy1.png'


export const HouseCard = ({url, title, info}) => {

  return (
    < Container>
      <Image src={url || image} alt="#" />
      <Content>
        <div className="subtitle">{title || 'New Apartment Nice Wiew'}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Swagger>
          <Swagger.Item>
            <Swagger.Bath/>
            <div className="info">5 Bath</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Bed/>
            <div className="info">4 Bath</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Car/>
            <div className="info">1 Garage</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Square/>
            <div className="info">1200 5q Ft</div>
          </Swagger.Item>
        </Swagger>
      </Content>
      <Line/>
      <Content>
        <Swagger footer>
          <Swagger.Item>
          <div className="info">$2,800/mo</div>
          <div className="subtitle">$7,500/mo</div>
          </Swagger.Item>
        </Swagger>
      </Content>
    </Container>
  )
}

export default HouseCard
