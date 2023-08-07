import React from 'react'
import { Container, Icon, Wrapper } from './style'

const Input = ({width,height,type,children,ph,onChange,name,value,defaultValue,logo}) => {
  return (
    <Wrapper>
      <Icon>{logo}</Icon>
    <Container logo onChange={onChange} width={width} type={type} height={height} placeholder={ph} value={value} defaultValue={defaultValue} name={name}/>
        {children}
        
       
    </Wrapper>
  )
}

export default Input
