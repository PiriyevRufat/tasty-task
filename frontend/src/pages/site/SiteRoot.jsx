import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'
import Header from '../../layout/site/Header/Header' 

const SiteRoot = () => {
  return (
    <Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
    </Fragment>
  )
}

export default SiteRoot
