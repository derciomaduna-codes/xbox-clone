import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import games from "../json/games.json";
import { useState, useContext } from "react";
import SectionHeader from "../utils/SectionHeader";
import { userContext } from "../context/context";

const StaticGames = () => {
  const { showComp } = useContext(userContext);

  return (
    <Box sx={showComp ? styles.container : styles.none}>
      <Box sx={[styles.activeContainer]}>
        <Box sx={styles.settings}>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            icon
          </Box>
          <Box
            sx={{
              background: "#111",
              height: "20%",
              borderRadius: "0 0 10px 10px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            settings
          </Box>
        </Box>
      </Box>

      <Box sx={{ ...styles.gamesContainer }}>
        {games.map((game) => {
          if (game.status == "recent")
            return (
              <Box
                sx={{
                  ...styles.gameContainer,
                  ...styles.order,
                  "&:hover": {
                    transform: "scale(1)",
                    transition: "0.5s ease-in-out",
                  },
                }}
                key={game.id}
              >
                <img
                  src={game.img}
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </Box>
            );
        })}
        <Box
          sx={{
            ...styles.gameContainer,
            ...styles.order,
            background: "#980a0a",
            "&:hover": {
              transform: "scale(1)",
              transition: "0.5s ease-in-out",
            },
          }}

        >
          <img
            src={''}
            alt="img"
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover", borderRadius: "inherit" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StaticGames;

const styles = {
  container: {
    // border: "1px solid yellow",
    height: "350px",
    display: "flex",
    // padding:'0 50px',
    display: "flex",
    alignItems: "center",
  },
  none: {
    display: "none",
  },
  gameContainer: {
    // border: "1px solid orange",
    height: "200px",
    width: "200px",
    borderRadius: "10px",
  },
  activeContainer: {
    // background: "orange",
    height: "100%",
    width: "20%",
    padding: "25px 20px",
    display: "flex",
    alignItems: "flex-end",
  },
  order: {
    flex: "1",
  },
  settings: {
    // border: "1px solid red",
    height: "300px",
    width: "100%",
    borderRadius: "10px",
    background: "#980a0a",
    color: "#fff",
  },
  gamesContainer: {
    width: "80%",
    display: "flex",
    height: "100%",
    alignItems: "flex-end",
    // border: "1px solid yellow",
    gap: 2,
    padding: "25px 20px",
  },
};
