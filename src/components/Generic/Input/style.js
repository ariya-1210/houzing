import styled from "styled-components";


const Container=styled.input`
height: ${({height})=>height?height:'44px'};
width: ${({width})=>width?width:'100%'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
outline: none;
border: 1px solid #e6e9ec;
font-weight: 400;
font-size: 14px;
padding-left: ${({logo})=>logo? '40px' : '10px'};
:active{
    transform: scale(0.97);
}

`

const Wrapper=styled.div`
width: fit-content;
display: flex;
align-items: center;
position: relative;
`
const Icon=styled.div`
position: absolute;
margin-left: 10px;
display: flex;
justify-content: center;
align-items: center;
`

// const IconHome=styled(home)`
// display: ${({logo})=>logo?'block':'none'};
// margin-right: 10px;
// `


export {Container, Wrapper, Icon}