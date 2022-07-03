import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";

const XboxHome = () => {


const {showComp} = useContext(userContext)

  return (
     <Box sx={ showComp ? styles.container: styles.none}>

         <Grid container>
              <Grid sx={{...styles.item, ...styles.centerContent}} item md={3}>
                   <Box className={'myGlower'} sx={styles.settings}>
                     
                   </Box>
              </Grid>
              <Grid sx={{...styles.item, alignItems:'flex-end', gap:2}} item md={9}>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("game-pass.png")', backgroundSize:'cover'}}></Box>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("store.png")', backgroundSize:'cover'}}></Box>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("settings.png")', backgroundSize:'cover'}}></Box>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("idea.png")', backgroundSize:'cover'}}></Box>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("joystick.png")', backgroundSize:'cover'}}></Box>
                    <Box className={'myGlower'} sx={{...styles.blocks, background:'url("community.png")', backgroundSize:'cover'}}></Box>
              </Grid>
          </Grid>   

          <Grid container>
              <Grid sx={{...styles.item,...styles.centerContent, alignItems:'flex-end'}} item md={3}>
                  <Box className={'myGlower'} sx={{...styles.apps,background:'url("apps-games.webp")',backgroundSize:'cover', backgroundPosition:'bottom'}}></Box>
              </Grid>
              <Grid sx={{...styles.item, alignItems:'flex-end', gap:2}} item md={9}>
                  <Box className={'myGlower'} sx={{...styles.apps, flex:1, background:'url("message-2.png")',backgroundSize:'cover', backgroundPosition:'bottom'}}></Box>
                  <Box className={'myGlower'} sx={{...styles.apps, flex:1, background:'url("game-ad.webp")',backgroundSize:'cover'}}></Box>
                  <Box className={'myGlower'} sx={{...styles.apps, flex:1, background:'url("cod-cold-war.jpg")',backgroundSize:'cover'}}></Box>
                     
              </Grid>
          </Grid>  
     
     </Box>
  )
}

export default XboxHome


const styles = {
    container: {
      minHeight: "100vh",
      padding:'50px',
      display:'flex',
      flexDirection:'column',
      gap:5
    },
    none:{
      display:'none'
    },
    item:{
      // border:'1px solid red',
      minHeight:'300px',
      display: 'flex'
    },
   centerContent:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
   },
    settings:{
      // border:'1px solid yellow',
      height:'300px',
      width:'300px',
      borderRadius:'8px',
      background:`url("xbox-home1.png")`,
      backgroundSize:'cover',
      // backgroundPosition:''
    },

    blocks:{
      flex:1,
      height:'170px',
      // border:'1px solid pink',
      borderRadius:'5px'
    },
   apps:{
    // border:'1px solid orange',
    height:'170px',
    width:'300px',
    borderRadius:'5px'
  }


  };
  
  //css glow property
  //on hover