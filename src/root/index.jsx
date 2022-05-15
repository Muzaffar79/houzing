import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../componets/Navbar'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <>
       <Routes>
       <Route path='/' element={<Navigate to={'/home'}/>}/>  
       <Route element={<Navbar />}>
         {navbar.map(({path, Element, id})=>{
           return <Route key={id} path={path} element={Element}/>
         })}
       </Route>
       </Routes> 
     </>
  )
}
