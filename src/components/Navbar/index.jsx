import React from 'react'
import { Container, Logo, Section, Wrapper,NavItem  } from './style'
import navbar from '../../utils/navbar'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={()=>{<navigate to='./home'/>}}><Logo/><h3>Houzing</h3></Section>
        <Section>
          {
            navbar.map(({path,title},index)=>{
              return(
                <NavItem
                // style={({isActive,isPending})=>{
                //   return{
                //     color:isPending ? "red" : "",
                //   }
                // }}

                
                 key={index} to={path} >{title}</NavItem>
              )
            })
          }
        </Section>
        <Section>
          <button>Sign In</button>
        </Section>
      </Wrapper>
    </Container>
  )
}

export default Navbar
