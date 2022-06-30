import Head from 'next/head'
import { Box } from '@mui/system'
// import Game from '../components/Game'
import GameRecent from '../components/Game'
import { useState, useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import { userContext } from '../components/context/context'

export default function Home() {

  let [loading, setLoading] = useState(true);

  const [background, setBackground] = useState('demon.png')

  const [xboxImage, setXboxImage] = useState(true)
  
  const { setShowNav}= useContext(userContext)

  useEffect(() => {
    setTimeout(() => {
      setXboxImage(false)
      setShowNav(true)
      setLoading(false)
    }, 5000)

  }, [])


  return (


    xboxImage ?

      <Box sx={{ ...styles.xboxIntro }}>
        <Typography color="#fff" variant="h3">X Box Live</Typography>
        <Typography color="#fff" variant="h3" fontSize={13}>...loading</Typography>
      </Box> 
      :

      <Box sx={{
        ...styles.container,background: `url(${background})`
      }}>
      
        {/* <GameRecent /> */}

      </Box>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: 'url("forza.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    // background: `url('deon')`
  },

  xboxIntro: {
    height: '100vh',
    width: '100%',
    background: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex:"2"
   
  }
}


