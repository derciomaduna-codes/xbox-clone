import { Box } from '@mui/system'
import { useState, useEffect, useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { userContext } from '../components/context/context'
import Navbar from '../components/Navbar'
import Gallery from '../components/games/Gallery'
import StaticGames from '../components/games/StaticGames'
import ColumnTwo from '../components/games/ColumnTwo'
import XboxHome from '../components/games/XboxHome'
import Store from '../components/games/Store'
import GamePass from '../components/games/GamePass'
import Community from '../components/games/Community'
import AddMore from '../components/games/AddMore'
import SuggestedApps from '../components/games/SugestedApps'
import Events from '../components/games/Events'


export default function Home() {

  let [loading, setLoading] = useState(true);


  const [xboxImage, setXboxImage] = useState(true)

  const { setShowComp, openGame, setOpenGame , background , setBackground } = useContext(userContext)

  useEffect(() => {

    setTimeout(() => {
      setXboxImage(false)
      setShowComp(true)
      setLoading(false)
     
    }, 1000)

  }, [])


  return (
    xboxImage ?
      <Box sx={{ ...styles.xboxIntro }}>
        <Box>
          <img src="run.gif" alt="character-gif" height="150px" />
        </Box>
        <Box>
          <img src="logo.png" alt="logo" height="150px" />
        </Box>
        <Box sx={{ ...styles.loadingIndicator }}>
          <img src="xbox-ball.png" alt="logo" height="30px" className='box' />
          <Typography variant="h3" fontWeight={'bold'} fontSize={16} color="#fff" letterSpacing={'2px'}>...loading</Typography>
        </Box>
      </Box>
      :
      //when loading is done
      <Box onScroll={(e)=> console.log('scrolled at index')} sx={{ ...styles.container, 
      // background: `url(${background})` 
      }}>
      
        <Navbar />
        <XboxHome/>
        <Store/>
        <GamePass/>
        <Community/>
        <Events/>
        <SuggestedApps/>
        <Gallery/>
        <AddMore/>
        {/* <StaticGames/> */}
        {/* <ColumnTwo/> */}

         
      </Box>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: 'rgb(6 60 0)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // paddingTop: '100px',
    // border: '1px solid #fff'

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
    zIndex: "2",
    background: '#107C0F'
    // background:'url(xbox-background.png)',
    // backgroundSize: 'contain',


  },
  loadingIndicator: {
    display: 'flex',
    height: '100px',
    // border: '1px solid red',
    alignItems: 'center',
    gap: 0,
    marginTop: '40px'

  },
  content: {
    // border: '1px solid #fff',
    height: '400px'
  }
}


//how to use the window.onscroll event in react
//get different pictures