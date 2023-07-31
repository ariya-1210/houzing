import React from 'react'
import { Container, Icon } from './style'
import { Button, Input } from '../Generic'

export const Filter = () => {
  return (
    <Container>
      <Input logo={<h4><Icon.Houses/></h4>} placeholder={'Enter ypur address, neighborhood, city, or ZIP code'} 
      height={'44px'} width={'830px'}/>
      <Button width={'130px'} type={'light'}><Icon.Setting/>Advanced</Button>
      <Button width={'130px'} type={'primary'} ><Icon.Search/>Search</Button>
    </Container>
  )
}

export default Filter
