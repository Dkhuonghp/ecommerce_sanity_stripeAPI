import React from "react"
import { Layout } from "../components"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"


import '../styles/globals.css'
import '../sass/style.scss'

import '.././firebase/config'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
