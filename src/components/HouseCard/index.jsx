import React from 'react'
import { Container, Image,Content, Swagger,Line} from './style'
import image from '../../assets/img/uy1.png'


export const HouseCard = ({data}) => {
const {
   address,
   salePrice,
   price,
   attachment,
   houseDetails,
   description,
   country,
   city,
}=data
  return (
    < Container>
      <Image src={attachment[0].imgPath
       || image} alt="#" />
      <Content>
        <div className="subtitle">{city}, {country}, {description} </div>
        <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Swagger>
          <Swagger.Item>
            <Swagger.Bath/>
            <div className="info"> {houseDetails.bath  || 0}  Bath</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Bed/>
            <div className="info"> {houseDetails.bad  || 0}  Bad</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Car/>
            <div className="info"> {houseDetails.garage || 0}  Garage</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Square/>
            <div className="info"> {houseDetails.ruler  || 0} 200 5q Ft</div>
          </Swagger.Item>
        </Swagger>
      </Content>
      <Line/>
      <Content>
        <Swagger footer>
          <Swagger.Item>
          <div className="info">{salePrice}/mo</div>
          <div className="subtitle">{price}/mo</div>
          </Swagger.Item>
        </Swagger>
      </Content>
    </Container>
  )
}

export default HouseCard
