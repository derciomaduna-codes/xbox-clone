import '../styles/globals.css'
import { userContext } from '../components/context/context'
import  {useContext, useState} from 'react'


function MyApp({ Component, pageProps }) {
  
  const userName = useContext(userContext)
  const [darkTheme , setDarkTheme] = useState(false)
  const [enter , setEnter] = useState(false)

  return  (
  <userContext.Provider value={{userName:'schadrack' , darkTheme , setDarkTheme , enter , setEnter }} >
    <Component {...pageProps} />
  </userContext.Provider>
  )
}

export default MyApp
