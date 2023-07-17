import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import  navbar  from '../utils/navbar'

export const Root = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {
        navbar.map(({id,path,element})=>{
          return(
            <Route key={id} path={path} element={element}/>
          )
        })
      }
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Root