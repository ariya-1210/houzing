import styled from "styled-components";
import {ReactComponent as bath} from '../../assets/icon/bath.svg'
import {ReactComponent as bed} from '../../assets/icon/bed.svg'
import {ReactComponent as car} from '../../assets/icon/car.svg'
import {ReactComponent as square} from '../../assets/icon/square.svg'


const Container=styled.div`
height: 430px;
width: 350px;
border:1px solid #E6E9EC;
margin: 20px;
border-radius: 5px;
`
const Image=styled.img`
width: 100%;
height: 220px;
`
const Content=styled.div`
padding:15px;
`
const Swagger=styled.div`
display: flex;
justify-content: space-between;
padding-top:${({footer})=>footer ? '0' : '15px'};

`
Swagger.Bath=styled(bath)`
`
Swagger.Bed=styled(bed)`
`
Swagger.Car=styled(car)`
`
Swagger.Square=styled(square)`
`
Swagger.Item=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Line=styled.div`
height: 2px;
background: #E6E9EC;
`

export{Container,Image,Content, Swagger, Line}