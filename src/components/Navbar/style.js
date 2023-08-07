import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo1.svg'
import { NavLink } from "react-router-dom";

const Container=styled.div`
background: var(--colorPrimary);
color: #fff;
margin-bottom:10px;

`
const Wrapper=styled.div`
padding: var(--padding);
display: flex;
justify-content: space-between;
height: 64px;
margin: 0 220px;
/* width: 100%; */
`
const Section=styled.div`
margin-right: 20px;
display: flex;
justify-content: center;
align-items: center;
font-weight:${({bold})=>bold&&600};
cursor:${({logo})=>logo&&'pointer'};
`
const Logo=styled(logo)`
margin-left: 20px;
margin-right: 5px;
`
const NavItem=styled(NavLink)`
color: white;
text-decoration: none;
margin-left: 100px;
:active{
    color: #000;
}
`


export {Container,Wrapper,Section,Logo,NavItem}