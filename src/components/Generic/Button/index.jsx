import React from 'react'
import { Container } from './style'

const Button = ({width,height,type,children,onClick}) => {
  return (
    <Container onClick={onClick} width={width} type={type} height={height}>{children || 'Generic Button'}</Container>
  )
}

export default Button