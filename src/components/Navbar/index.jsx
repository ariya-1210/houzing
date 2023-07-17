import React from 'react'
import { Container, Logo, Section, Wrapper } from './style'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section><Logo/><h3>Houzing</h3></Section>
        <Section>1</Section>
        <Section>1</Section>
      </Wrapper>
    </Container>
  )
}

export default Navbar
