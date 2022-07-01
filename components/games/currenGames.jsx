import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import gameData from "../json/games.json";
import { useState } from "react";



const currentGames =   () => {
  console.log("");

const [currentState , setCurrentState] = useState('current')

  return (
    <Box sx={styles.gameContainer}>
      {gameData.map((game) => {
        if (game.status == currentState)
          return (
            <Box
              onClick={()=>setCurrentState('recent')}
              key={game.id}
              sx={{
                ...styles.game,
                // background: `url(${game.img})`,
                backgroundSize: "cover",
                "&:hover": {
                  height: "300px",
                  width: "350px",
                  transition: "1s ease-out",
                  border: "1px solid cyan",
                },
              }}
            >
              <img
                src={game.img}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: "inherit", objectFit:'cover' }}
              />

              {/* <Typography
                sx={{ position: "absolute" }}
                fontSize={20}
                fontWeight={"bold"}
                color={"#fff"}
              >
                {game.name}
              </Typography> */}
            </Box>
          );
      })}
    </Box>
  );
};




export default currentGames



const styles = {
  container: {
    height: "200px",
    width: "200px",
    // border: "1px solid red",
  },
  game: {
    height: "250px",
    width: "300px",
    background: "url(default.webp)",
    backgroundSize: "cover",
    display: "inline-block",
    margin: "20px",
    borderRadius: "15px",
    // display: 'flex',
    // alignItems:'center'
  },
  gameContainer: {
    // border:'1px solid red',
    // display:'flex',
    padding: "0 30px",
  },
};
