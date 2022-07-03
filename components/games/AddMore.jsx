import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";
import Gallery from "./Gallery";
import SwiperEffectCube from "../swipers/SwiperEffectCube";

const AddMore = () => {
  const { showComp } = useContext(userContext);

  return (
    <>
      <Box sx={ showComp ? styles.container : styles.none}>
        <SectionHeader title={"Add more"} />
        <Grid container>
          <Grid
            sx={{
              ...styles.item,
              ...styles.centerContent,
              flexDirection: "column",
              gap: 4,
            }}
            item
            md={3}
          >
            <Box sx={{ ...styles.store }}></Box>
            <Box sx={styles.suggestion}>
            <Typography variant="h3" fontSize={18} color="#fff" fontWeight={'bold'}>
              Advanced play with X-box Gold
            </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              ...styles.item,
              flexDirection: "column",
              ...styles.centerContent,
              alignItems: "center",
              justifyContent:'center',
              gap: 2,
              padding: "0 10px",
            }}
            item
            md={5}
          >
          <SwiperEffectCube/>
          <Box sx={styles.suggestion}>
            <Typography variant="h3" fontSize={18} color="#fff" fontWeight={'bold'}>
              Explore Into the Garden of Eden
            </Typography>
          </Box>

          </Grid>
          <Grid
            sx={{
              ...styles.item,
              ...styles.centerContent,
              flexDirection: "column",
              gap: 4,
            }}
            item
            md={4}
          >
            <Box sx={{ ...styles.store, background:'url("cod-cold-war.jpg")' }}></Box>
            <Box sx={styles.suggestion}>
            <Typography variant="h3" fontSize={18} color="#fff" fontWeight={'bold'}>
              Winter is coming!..
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddMore;

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
    height: "350px",
    width: "300px",
    borderRadius: "5px",
    background: 'url("add2.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  centerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  countdown: {
    border: "1px solid yellow",
    height: "240px",
    width: "50%",
    borderRadius: "5px",
  },
  season: {
    border: "1px solid yellow",
    height: "calc(350px / 2)",
    width: "300px",
    borderRadius: "5px",
  },
  blockDivider: {
    border: "1px solid blue",
    height: "150px",
    width: "100%",
    display: "flex",
    padding: "0 30px",
    gap: 2,
    // marginTop:'15px'
  },
  test: {
    border: "1px solid #fff",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
  },
  suggestion: {
    height: "50px",
    width: "300px",
    border: "2px dashed #007900",
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  },
};
