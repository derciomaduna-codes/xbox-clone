import Head from 'next/head'
import SectionHeader from '../components/utils/SectionHeader'
import { Box } from '@mui/system'
// import Game from '../components/Game'
// import ReactJkMusicPlayer from 'react-jinke-music-player'
import { useState, useEffect, useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { userContext } from '../components/context/context'
import game from '../components/json/games.json'
import RecentGames from '../components/games/recentGames'
import SwiperEffectCube from '../components/swipers/SwiperEffectCube'
import SwiperCoverFlow from '../components/swipers/SwiperCoverFlow'
import GameStart from '../components/utils/GameStart'
import Navbar from '../components/Navbar'

export default function Home() {

  let [loading, setLoading] = useState(true);

  const [background, setBackground] = useState('demon.png')

  const [xboxImage, setXboxImage] = useState(true)

  const { setShowNav, openGame, setOpenGame } = useContext(userContext)

  useEffect(() => {
    setTimeout(() => {
      setXboxImage(false)
      setShowNav(true)
      setLoading(false)

    }, 7000)

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
      //loading is set to false
      <Box sx={{ ...styles.container, background: `url(${background})` }}>
        <Navbar />
        <GameStart />
        <SectionHeader title={'All games'} />
        <Grid container sx={styles.content}>
          <Grid sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }} item md={12}>
            {/* this is a test */}
            <SwiperCoverFlow /> 
          </Grid>
        </Grid>

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
    border: '1px solid #fff',
    height: '400px'
  }
}


