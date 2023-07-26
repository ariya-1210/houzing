import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logo} from "../../assets/icon/logo.svg"

const Container=styled.div`
/* 
min-width:1440px; */
`
const Main=styled.div`
background:var(--colorPrimary);
color:#fff;
`

const Wrapper=styled.div`
padding:var(--padding);
display:flex;
max-width:1440px;
justify-content: space-between;
align-items: center;
height:64;`

const Section=styled.div`
display:flex;
align-items: center;


`
const Logo=styled(logo)`
margin-right:12px;
`
const NavItem=styled(NavLink)`
margin-left:20px ;
color: #fff;
text-decoration:none;

:active{
    color:red;
}
`


export {Container, Wrapper,Section, Logo, NavItem,Main}