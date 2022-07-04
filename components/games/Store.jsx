import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";

const Store = () => {
  const { showComp } = useContext(userContext);

  return (
    <>
      <Box sx={showComp ? styles.container : styles.none}>
        <SectionHeader title={"Store"} />
        <Grid container>
          <Grid sx={{ ...styles.item, ...styles.centerContent }} item md={3}>
            <Box className={'myGlower'} sx={{ ...styles.store, background:'url("store-2.jpg")', backgroundSize:'cover', backgroundPosition:'center' }}></Box>
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
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
                <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
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
            <Box className={'myGlower'} sx={{ ...styles.season, background:'url("season.png")', backgroundSize:'cover' }}></Box>
            <Box className={'myGlower'} sx={{ ...styles.season, background:'url("daily-deal.png")', backgroundSize:'cover' }}></Box>

            <Box sx={{ ...styles.blockDivider, flexDirection: "column" }}>
              <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
              <Box className={'myGlower'} sx={{ ...styles.test }}></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Store;

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
    height: "300px",
    width: "300px",
    borderRadius: "5px",
    backgroundBlendMode: "luminosity"
    
  },
  centerContent: {
    display: "flex",   
    justifyContent: "center",
  },
  countdown: {
    // border: "1px solid yellow",
    height: "370px",
    width: "100%",
    borderRadius: "5px",
    background:'url("countdown-banner.png")',
    backgroundSize: 'cover'   ,
    backgroundPosition: 'bottom'
     
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
  },
  test: {
    // border: "1px solid #fff",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
    background:'#292E28'
    
  },
};
