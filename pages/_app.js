import '../styles/globals.css'
import { userContext } from '../components/context/context'
import { useContext, useState } from 'react'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

  const userName = useContext(userContext)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showNav, setShowNav] = useState(false)

  return (
    <userContext.Provider value={{ userName: 'schadrack', darkTheme, setDarkTheme, showNav, setShowNav }} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </userContext.Provider>
  )
}

export default MyApp
