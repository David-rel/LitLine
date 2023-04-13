import '../styles/globals.css'
import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Lit Line</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="./static/favicon.ico" /> */}
      </Head>
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
