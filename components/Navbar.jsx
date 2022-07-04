import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { userContext } from "./context/context";
import { useContext } from "react";
import Link from "next/link";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Battery50Icon from "@mui/icons-material/Battery50";
import Time from "../components/utils/Time";

const Navbar = () => {
  const { userName, darkTheme, setDarkTheme, setShowComp, showComp } =
    useContext(userContext);

  return (
    <Grid sx={showComp ? styles.container : styles.none} container>
      <Grid sx={{ ...styles.item }} item md={3} sm={3} xs={12}>
        <Box sx={styles.user}>
          <Typography sx={{ fontWeight: "bold" }} color={"#fff"}>
            {userName[0].toUpperCase()}
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" , color:'#fff', fontSize:'14px',gap:1, display:'flex', flexDirection:'column' }}>
          <Box>{userName}</Box>
          {/* <Box>P.Box 2190</Box> */}
        </Box>
      </Grid>
      {/* <Grid
        sx={{ ...styles.item, justifyContent: "space-around" 
        item
        md={6}
        sm={6}
        xs={12}
      >
        <Box sx={styles.navLink}>
          <Typography fontWeight="bold" fontSize={16} color={"#fff"}>
            <Link onClick={() => setShowNav(false)} href="/">
              Home
            </Link>
          </Typography>
        </Box>
        <Box sx={styles.navLink}>
          <Typography fontWeight="bold" fontSize={16} color={"#fff"}>
            <Link href="/">Mixer</Link>
          </Typography>
        </Box>
        <Box sx={styles.navLink}>
          <Typography fontWeight="bold" fontSize={16} color={"#fff"}>
            <Link href="/">Community</Link>
          </Typography>
        </Box>
        <Box sx={styles.navLink}>
          <Typography fontWeight="bold" fontSize={16} color={"#fff"}>
            <Link href="/">Game Pass</Link>
          </Typography>
        </Box>
        <Box sx={styles.navLink}>
          <Typography fontWeight="bold" fontSize={16} color={"#fff"}>
            <Link href="/store">Store</Link>
          </Typography>
        </Box>
      </Grid> */}
      <Grid
        sx={{ ...styles.item, justifyContent: "flex-end" }}
        item
        md={9}
        sm={3}
        xs={12}
      >
        <Box>
          <HeadsetMicIcon sx={{ color: "#FFF" }} />
          <Battery50Icon sx={{ color: "#FFF" }} />
        </Box>
        <Typography variant="h3" fontSize={13} color={"#fff"}>
          <Time />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;

const styles = {
  container: {
    // border:'1px solid red',
    height: "100px",
    // background: "rgba(0,0,0,0.1)",
    // display: 'none',
    padding: "0 100px",
    // position:'fixed',
    // top:0
  },
  user: {
    borderRadius: "60px",
    height: "60px",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#15350d",
  },
  item: {
    // border:'1px solid #fff' ,
    height: "100%",
    display: "flex",
    alignItems: "center",
    // padding:2
  },
  navLink: {
    // border:'1px solid #fff' ,
    padding: "0 10px",
    cursor: "pointer",
  },
  none: {
    display: "none",
  },
};
