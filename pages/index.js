import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Box } from '@mui/system'
import Game from '../components/Game'
import { useState } from 'react'


export default function Home() {
  
  
  const [background, setBackground] = useState('demon.png')

  return (
    <Box sx={{
      ...styles.container,
      background: `url(${background})`
    }}>
      <Navbar />


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
    // background: `url(${background})`
  }
}