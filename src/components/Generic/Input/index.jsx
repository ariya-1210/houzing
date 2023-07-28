import React from 'react'
import { Container } from './style'

export const Input = ({
  height,
  width,
  onChange,
  placeholder,
  name,
  value,
  defoultValue
}) => {
  return (
    <Container 
    onChange={onChange} 
    height={height}
    width={width}
    placeholder={placeholder}
    value={value}
    defoultValue={defoultValue}
    name={name}
    />
  )
}
export default Input
