import '../styles/globals.css'
import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <div className='bg-green-100'>
      <Head>
        <title>Lit Line</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./static/icon.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
