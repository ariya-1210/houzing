import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Logo, Section, Wrapper } from './style'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section><Logo/><h3>Houzing</h3></Section>
        <Section>
          <NavLink to={'/home'} >Home</NavLink>
          <NavLink to={'/properties'}  >Properties</NavLink>
        </Section>
        <Section>1</Section>
      </Wrapper>
    </Container>
  )
}

export default Navbar
