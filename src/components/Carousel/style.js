import styled from "styled-components";

const Container=styled.div`
height: 571px;
position: relative;
margin-top: 10px;
`

const Blur =styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
background-color: rgba(0,0,0,0.5);
`
const Content=styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
`
Content.Title=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;`

Content.SubTitle=styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`
Content.Price=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
`
const Div=styled.div`

`

const Image=styled.img`
  width:100%;
 height:571px;`
export{Container, Image, Blur, Content, Div}