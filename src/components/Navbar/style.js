import styled from "styled-components";
import {ReactComponent as logo} from "../../assets/icon/logo.svg"

const Container=styled.div`
background:var(--colorPrimary);
color:#fff;


`
const Wrapper=styled.div`
padding:var(--padding);
display:flex;

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

export {Container, Wrapper,Section, Logo}