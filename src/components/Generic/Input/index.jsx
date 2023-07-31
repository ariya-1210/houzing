import React from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = ({
  height,
  width,
  onChange,
  placeholder,
  name,
  value,
  defoultValue,
  logo
}) => {
  return (
    <Wrapper>
      <Icon>{logo}</Icon>
    <Container 
    onChange={onChange} 
    height={height}
    width={width}
    placeholder={placeholder}
    value={value}
    defoultValue={defoultValue}
    name={name}
    logo={logo}
    />
    </Wrapper>
  )
}
export default Input
