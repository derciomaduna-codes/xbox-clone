import React from 'react'
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { useState, useContext } from 'react'
import { userContext } from '../context/context';
import gameData from '../../components/json/games.json'



//this componet will be the one 

const GameStart = () => {

  const [playable , setPlayable] = useState(false)

  const { openGame, setOpenGame, passedGameDetails, setPassedGameDetails, setShowComp } = useContext(userContext)


  const showNavbar = () => {
    setShowComp(true)
    setOpenGame(false)
  }
  const playGame = ()=>{
    //when clicks the button should play the game : drawer that consist of the iframe consisting the games
    
      //if playable is true => show iframe, if false play video
  if(!playable){
    console.log('show video')
  }else{
    console.log('show iframe')

  }


  }



  return (

    <Box sx={openGame ? styles.container : styles.none}>

      <Box sx={styles.cover}>
        <Box sx={{ ...styles.item }}>
          <img style={styles.coverImage} src={passedGameDetails.open} width={'100%'} height={'100%'} />
        </Box>

        <Box sx={[styles.item, styles.right]}>
          <Box sx={styles.btnContainer}>
            <button style={styles.btn} onClick={() => showNavbar()}>
              <Typography variant="h3" fontSize={16} fontWeight="bold">X</Typography>
            </button>
          </Box>
          <Box sx={styles.titleContainer}>
            <Typography variant="h3" color="#fff" fontSize={24} fontWeight={'bold'}>
              {passedGameDetails.name}
            </Typography>
          </Box>
          <Box sx={styles.description}>
            <Typography variant="h3" color="#fff" fontSize={18}>
              {passedGameDetails.description}
              
            </Typography>
          </Box>
          <Box sx={styles.startContainer}>
             <button style={styles.btnStart}  onClick={playGame} >
             <Typography variant="h3" color="#fff" fontSize={14} fontWeight={'bold'}>
              {'Start Game'}
            </Typography>
             </button>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default GameStart



const styles = {

  container: {
    // border: '1px solid red',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    backdropFilter: 'blur(6px)',
    // background: 'red',
    zIndex: '10'
  },
  none: {
    display: 'none'
  },
  item: {
    height: '100%',
    width: '55%',
    // background:'red'
  },
  cover: {
    padding: '50px',
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  coverImage: {
    objectFit: 'cover',
    contentFit: 'all-around',
    objectPosition: 'center'
  },
  right: {
    background: 'rgba(0, 0 ,0 ,0.3)',
    width: '45%',
    padding: '20px',
    borderRadius: '0 20px  20px  0'
  }
  ,
  btn: {
    padding: '5px 10px',
    outline: 'none',
    wordBreak: 'break-all',
    cursor: 'pointer'

  },
  btnContainer: {
    // border:'1px solid red',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: "10px"
  },
  titleContainer: {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
  },
  description: {
    // border: '1px solid red',
    minHeight: '150px',
    padding:'40px 0' 
  },
  startContainer:{
    // border:'1px solid red',
    minHeight: '300px',
    display:'flex',
    alignItems:'flex-end'
  },
  btnStart:{
    padding: '10px',
    background: 'coral',
    outline:'none',
    cursor:'pointer',
    border:'none'
  }

}


