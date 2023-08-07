import React from 'react'

import PropertiesContext from './properties'


const RootContext = ({children}) => {
  return (
    <>
      <PropertiesContext>
      {children}
      </PropertiesContext>
       
      
      
    </>
  )
}

export default RootContext
