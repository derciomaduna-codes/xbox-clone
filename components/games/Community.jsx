import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";

const Community = () => {
  const { showComp } = useContext(userContext);

  return (
    <>
      <Box sx={showComp ? styles.container : styles.none}>
        <SectionHeader title={"Community"} />
        <Grid container>
          <Grid sx={{ ...styles.item, ...styles.centerContent }} item md={3}>
            <Box className={"myGlower"} sx={{ ...styles.store }}></Box>
          </Grid>

          <Grid
            sx={{
              ...styles.item,
              flexDirection: "column",
              ...styles.centerContent,
              alignItems: "center",
              gap: 2,
              padding: " 0 10px",
            }}
            item
            md={4.5}
          >
            <Box
              className={"myGlower"}
              sx={{
                ...styles.countdown,
                background: 'url("com-dl.jpg")',
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              className={"myGlower"}
              sx={{
                ...styles.countdown,
                background: 'url("ad-com.webp")',
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></Box>

            <Box sx={styles.blockDivider}>
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              ...styles.item,
              flexDirection: "column",
              ...styles.centerContent,
              alignItems: "flex-start",
              gap: 2,
              padding: " 0 10px",
            }}
            item
            md={4.5}
          >
            <Box
              className={"myGlower"}
              sx={{
                ...styles.countdown,
                background: 'url("com-2.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              className={"myGlower"}
              sx={{
                ...styles.countdown,
                background: 'url("com-3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box sx={styles.blockDivider}>
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  gap: 2,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
                <Box className={"myGlower"} sx={{ ...styles.test }}></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Community;

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
    background: 'url("community.png")',
    backgroundSize: "cover",
  },
  centerContent: {
    display: "flex",
    // alignItems:'center',
    justifyContent: "center",
  },
  countdown: {
    // border: "1px solid yellow",
    height: "240px",
    width: "100%",
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
};
