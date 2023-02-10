import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout({countries}) {
  return (
    <>
    <Header/>
    <Outlet context={{countries}}/>
    <Footer/>
    </>
  )
}

export default Layout