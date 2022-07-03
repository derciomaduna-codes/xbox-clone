import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import gameData from "../json/games.json";
import { useState } from "react";
import GameStart from "../utils/GameStart";
import SectionHeader from "../utils/SectionHeader";
import SwiperCoverFlow from "../swipers/SwiperCoverFlow";

const Gallery = () => {
  return (
    <Box>
      <GameStart />
      <SectionHeader title={"Gallery"} />
      <Grid container sx={styles.content}>
        <Grid item md={1}>
                <Box sx={{ height:'400px', width:'70%', background:'url("event3.jpg")', backgroundSize:'cover'}}>
                </Box>
        </Grid>
        <Grid sx={{ display: "flex", gap: 1, flexWrap: "wrap" }} item md={11}>
          <SwiperCoverFlow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallery;

const styles = {
  loadingIndicator: {
    display: "flex",
    height: "100px",
    // border: '1px solid red',
    alignItems: "center",
    gap: 0,
    marginTop: "40px",
  },
  content: {
    // border: '1px solid #fff',
    height: "500px",
  },
};
