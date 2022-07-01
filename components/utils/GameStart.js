import React from 'react'
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { useState , useContext} from 'react'
import { userContext } from '../context/context';
import gameData from '../../components/json/games.json'



//this componet will be the one 

const GameStart = () => {

  const { openGame, setOpenGame, passedGameDetails, setPassedGameDetails } = useContext(userContext)



  return (

   <Box sx={openGame ? styles.container : styles.none}>
          <Grid container>
                 <Grid sx={{...styles.item}} item md={9}>
                            {/* <img src={passedGameDetails.open} width={200} height={200} />
                            <button onClick={()=> setOpenGame(false)}>Close game</button> */}
                 </Grid>
                 <Grid sx={{...styles.item}} item md={9}>
                          
                 </Grid>
          </Grid>
   </Box>
  )
}

export default GameStart



const styles = {
 
  container:{
        border:'1px solid red',
        height:'100vh',
        width:'100%',
        position:'absolute',
        background:'red',
        zIndex:'10'
  },
  none:{
     display:'none'
  },
  item:{
    height:'100%',
    boder:'1px solid red'
  }

}