import React from 'react'
import { Container, Logo, Section, Wrapper,NavItem,Main  } from './style'
import navbar from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../Generic/Button'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Main>
      <Wrapper>
        <Section  onClick={()=>{navigate('/home')}} ><Logo/><h3>Houzing</h3></Section>
        <Section>
          {
            navbar.map(({path,title},index)=>{
              return(
                <NavItem className={({isActive})=>isActive && 'active'}
                 key={index} to={path} >{title}</NavItem>
              )
            })
          }
        </Section>
        <Section>
          <Button>Sign In</Button>
        </Section>
      </Wrapper>
             
      </Main>
      <Outlet/>
    </Container>
  )
}

export default Navbar
