import '../styles/globals.css'
import { userContext } from '../components/context/context'
import { useContext, useState } from 'react'
// import Layout from '../components/utils/Layout'


function MyApp({ Component, pageProps }) {

  const userName = 'schad BTB'
  const [darkTheme, setDarkTheme] = useState(false)
  const [background, setBackground] = useState('forza.jpg')
  const [showComp, setShowComp] = useState(false)
  const [openGame, setOpenGame] = useState(false)
  const [passedGameDetails, setPassedGameDetails] = useState({
    name: "",
    img: "",
    description: "",
    open: "",
    description: "",
    playable:""
  })

  return (
    <userContext.Provider value={{ userName, darkTheme, setDarkTheme, showComp, setShowComp, openGame, setOpenGame, passedGameDetails, setPassedGameDetails, background, setBackground }} >
      <Component {...pageProps} />
    </userContext.Provider>
  )
}

export default MyApp
