import React, { useState } from 'react'
import { Container, Search, Setting, Houses, Wrapper, Box, Content } from './style'
import Input from '../Generic/Input'
import Button from '../Generic/Button'
import { Dropdown } from 'antd'
import { click } from '@testing-library/user-event/dist/click'


const Filter = () => {
const [open,setOpen]=useState(false)
const onOpenChange=()=>{
  setOpen(!open)
}
  const items = [
    {
      key: '1',
      label: (
        <Box>
          <div className="subtitle">Address</div>
          <Content>
            <Input ph={'Country'}/>
            <Input ph={'Region'}/>
            <Input ph={'City'}/>
            <Input ph={'Zip_Code'}/>
          </Content>
          <div className="subtitle">Apartment Info</div>
          <Content>
          <Input ph={'Rooms'}/>
            <Input ph={'Size'}/>
            <Input ph={'Sorts'}/>
            
          </Content>
          <div className="subtitle">Price</div>
          <Content>
            <Input ph={'Min_Price'}/>
            <Input ph={'Max_Price'}/>
            
          </Content>
        </Box>
      ),
    }
  ];
  return (
    <Container>
      <Wrapper>
      <Input logo={<Houses/>} height='44px' width='830px' ph='Enter an adress, neighborhood,city, or ZIP code'/>
      <Dropdown
      menu={{
        items
      }}
      trigger={'click'}
      onOpenChange={onOpenChange}
      open={open}
      placement="bottomRight"
      arrow
    >
      <div><Button type={'light'} width={'131px'}><Setting/>Advanced</Button></div>
      
      
    </Dropdown>
      
      <Button type={'primary'} width={'180px'}><Search/>Search</Button>
      </Wrapper>
    </Container>
  )
}

export default Filter
