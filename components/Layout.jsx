import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './FooterBanner'


const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>shopping</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
    </div>
  )
}

export default Layout