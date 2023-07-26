import styled from "styled-components"

const getType=({type})=>{
    switch(type){
        case 'dark':return{
            background:'transparent',
            border: '1px solid #fff',
            color:'#fff',
        }
        default :return{
            background:'transparent',
            border: '1px solid #fff',
            color:'#fff',
        }
    }
}

const Container=styled.button`
width:${({width})=>width ? width: '120px'};
height:${({height})=>height ? height: '44px'};
display:flex;
justify-content:center;
align-items:center;
border-radius:2px;
cursor:pointer;

${getType}

`
export {Container}