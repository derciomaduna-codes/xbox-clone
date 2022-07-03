import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";

const GamePass = () => {
  const { showComp } = useContext(userContext);

  return (
    <>
      <Box sx={showComp ? styles.container : styles.none}>
      <SectionHeader title={"Game Pass"} />
        <Grid container>
          <Grid sx={{ ...styles.item, ...styles.centerContent }} item md={3}>
            <Box className={'myGlower'} sx={{ ...styles.store }}></Box>
          </Grid>

          <Grid
            sx={{
              ...styles.item,
              flexDirection: "column",
              ...styles.centerContent,
              alignItems: "center",
              gap: 2,
            }}
            item
            md={6}
          >
            <Box className={'myGlower'} sx={{ ...styles.countdown }}></Box>

            <Box sx={styles.blockDivider}>
              <Box sx={{ width: "50%", gap:2,flexDirection: "column",display:'flex' }}>
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
              </Box>
              <Box sx={{ width: "50%" ,gap:2,flexDirection: "column",display:'flex'  }}>
                <Box className={'myGlower'} sx={{height:'120px',background:'url("game-ad.webp")', backgroundSize:'cover', backgroundPosition:'center' }}></Box>
             
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              ...styles.item,
              flexDirection: "column",
              ...styles.centerContent,
              alignItems: "center",
              gap: 2,
            }}
            item
            md={3}
          >
            <Box className={'myGlower'} sx={{ ...styles.season, background:'url("battle.png")', backgroundSize:'cover' }}></Box>
            <Box className={'myGlower'} sx={{ ...styles.season, background:'url("star.png")', backgroundSize:'cover' }}></Box>
            <Box className={'myGlower'} sx={{ ...styles.season, background:'url("week.png")', backgroundSize:'cover' }}></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GamePass;

const styles = {
  container: {
    minHeight: "100vh",
    padding: "50px",
  },
  none: {
    display: "none",
  },
  item: {
    // border: "1px solid red",
    minHeight: "300px",
  },
  store: {
    // border: "1px solid yellow",
    height: "300px",
    width: "300px",
    borderRadius: "5px",
    background:'url("game-pass2.png")',
    backgroundSize:'cover',
    backgroundPosition:'center',
  },
  centerContent: {
    display: "flex",
    // alignItems:'center',
    justifyContent: "center",
    
   
  },
  countdown: {
    // border: "1px solid yellow",
    height: "370px",
    width: "100%",
    borderRadius: "5px",
    background:'url("battle-game.webp")',
    backgroundSize:'cover',
    backgroundPosition:'center',
  },
  season: {
    // border: "1px solid yellow",
    height: "calc(350px / 2)",
    width: "300px",
    borderRadius: "5px",
  },
  blockDivider: {
    // border: "1px solid blue",
    height: "150px",
    width: "100%",
    display: "flex",
    padding: "0 30px",
    gap: 2,
    // marginTop:'15px'
  },
  test: {
    // border: "1px solid #fff",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
    background:'#222'
  },
};
