import React, { useRef, useState, useContext } from "react";
import { Typography } from "@mui/material";
import games from '../../components/json/games.json'
import GameStart from "../utils/GameStart";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { userContext } from "../context/context";

export default function SwiperCoverFlow() {

  //  const [showOpenImg , setShowOpenImg] = useState(false)


  const { openGame, setOpenGame, passedGameDetails, setPassedGameDetails,setShowComp  } = useContext(userContext)

  const showGameStart = (game) => {

    setOpenGame(true)
     setShowComp(false)
     
    setPassedGameDetails({
      name: game.name,
      img: game.img,
      open: game.open,
      description:game.description
    })

  }


  return (
    <>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={styles.container}
      >

        {games.map(game => (

          <SwiperSlide onClick={() => showGameStart(game)} key={game.id} style={styles.swiperSlide}>
            <img style={{ objectFit: 'contain' }} width="100%" height="300px" src={game.img} />
            <Typography color="#fff" fontWeight={'bold'}>{game.name}</Typography>
          </SwiperSlide>
        ))}

      </Swiper>

    </>
  );
}


const styles = {
  container: {
    width: '100%',
    zIndex: '1'
    // border: '1px solid red'
  },
  swiperSlide: {
    // border: '1px solid blue',
    width: '300px',
    height: '350px'

  }
}