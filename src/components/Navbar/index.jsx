import React from 'react'
import { Container, Logo, NavItem, Wrapper,Section } from './style'
import { navbar } from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../Generic/Button'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
        <Wrapper>
            <Section onClick={()=>navigate('/home')} bold logo><Logo/> Houzing</Section>
            <Section>
            {
                navbar.map(({path,title,hidden},index)=>{
                  return !hidden &&(
                    <NavItem 
                     key={index} to={path}>{title}</NavItem>
                  )
                })
              }
              

            </Section>
            <Section logo>
              <Button className='button' onClick={()=>navigate('signin')} type={'dark'}>Log In</Button>
            </Section>
        </Wrapper>
        <Outlet/>
    </Container>
  )
}

export default Navbar
