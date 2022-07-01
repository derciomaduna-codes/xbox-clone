import '../styles/globals.css'
import { userContext } from '../components/context/context'
import { useContext, useState } from 'react'
// import Layout from '../components/utils/Layout'


function MyApp({ Component, pageProps }) {

  const userName = useContext(userContext)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [openGame, setOpenGame] = useState(false)
  const [passedGameDetails , setPassedGameDetails] = useState({
      name:"",
      img:"",
      description:"",
      cover:""
  })

  return (
    <userContext.Provider value={{ userName: 'schadrack', darkTheme, setDarkTheme, showNav, setShowNav, openGame, setOpenGame, passedGameDetails ,setPassedGameDetails }} >
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </userContext.Provider>
  )
}

export default MyApp
