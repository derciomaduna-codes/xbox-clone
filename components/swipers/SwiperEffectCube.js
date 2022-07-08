import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import games from '../../components/json/games.json'
import { Typography } from "@mui/material";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper";

export default function SwiperEffectCube() {
    return (
        <>
            <Swiper

                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                style={styles.swiperContainer}
                // pagination={true}
                // navigation={true}
                autoplay={true}
                modules={[EffectCube,Autoplay]}
                className="mySwiper"
            >
                {games.map(game => (
                    <SwiperSlide key={game.id} style={styles.swiperSlide}>
                        <img style={{ objectFit: 'cover', objectPosition:'center' }} width="100%" height="300px" src={game.img} />
                        {/* <Typography color="#fff" fontWeight={'bold'}>{game.name}</Typography> */}
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}


const styles = {
    swiperContainer: {
        width: '400px'
    },
    swiperSlide: {

    }
}
