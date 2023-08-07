import styled from "styled-components";
import {ReactComponent as arrow} from '../../assets/icon/arrow.svg'


const Container=styled.div`
height: 571px;
position: relative;
margin-top: 10px;

`

const Arrow=styled(arrow)`
width: 45px;
height: 45px;
border-radius: 50%;
background: rgba(0,0,0,0.5);
cursor: pointer;
position: absolute;
top: 50%;
transition: .3s;
right: ${({left})=>!left && '20px'};
transform: ${({left})=>left ? 'rotate(0deg)' : 'rotate(180deg)'};
:hover{
    background: rgba(0,0,0,0.2);
}
`
const Image=styled.img`
width: 1440px;
height: 571px;
`

export {Container,Arrow,Image}