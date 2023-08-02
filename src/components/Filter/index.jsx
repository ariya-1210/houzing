import React from 'react'
import { Container, Content, Icon, Wrapper } from './style'
import { Button, Input } from '../Generic'
import { Dropdown } from 'antd'

export const Filter = () => {
  const items = [
  {
    key: '1',
    label: (
      <Wrapper>
        <Content>2143241654</Content>
      </Wrapper>
    ),
  }
];
  return (
    <Container>
      <Input logo={<h4><Icon.Houses/></h4>} height={'44px'} width={'830px'}
      placeholder={'Enter ypur address, neighborhood, city, or ZIP code'}/>
      <Dropdown
        menu={{items,}}
        placement="bottomRight"
        arrow
      >
        <div>

        <Button width={'130px'} type={'light'}>
          <Icon.Setting/>Advanced</Button>
        </div>
      
      </Dropdown>
      
      <Button width={'130px'} type={'primary'} ><Icon.Search/>Search</Button>
    </Container>
  )
}

export default Filter
