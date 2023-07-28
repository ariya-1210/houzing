import React from 'react'
import { Container } from './style'
import { Button, Input } from '../Generic'

export const Filter = () => {
  return (
    <Container>
      <Input placeholder={'Enter ypur address, neighborhood, city, or ZIP code'} height={'44px'} width={'830px'}/>
      <Button width={'130px'} type={'light'}>Advanced</Button>
      <Button width={'130px'} type={'primary'} >Search</Button>
    </Container>
  )
}

export default Filter
