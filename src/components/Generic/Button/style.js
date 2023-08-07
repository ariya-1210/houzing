import styled from "styled-components";

const getType=({type})=>{
    switch(type){
        case 'dark':return{
            color: '#FFFFFF',
            background:'#0d263b',
            border:'1px solid #fff'
        }
        case 'light':return{
            color: '#0d263b',
            background:'#fff',
            border:'1px solid #e6e9ec'
        }
        case 'primary':return{
            color: '#fff',
            border:'1px solid #0061df',
            background:'#0061df'
        
        }
        default:return{
        color: '#FFFFFF',
        background:'#0d263b',
        border:'1px solid #fff'}
    }
}
const Container=styled.button`
width: ${({width})=>width?width:'120px'};
height: ${({height})=>height?height:'44px'};
display: flex;
justify-content: center;
align-items: center;
gap:5px;
border-radius: 2px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
${getType}
`


export {Container}