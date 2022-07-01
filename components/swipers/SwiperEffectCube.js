import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper";

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
                pagination={true}
                // navigation={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={styles}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" width="90px" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" width="90px" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" width="90px" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
                </SwiperSlide>
            </Swiper>
        </>
    );
}


const styles = {
    swiperContainer: {
        width: '500px'
    },
    swiperSlide: {

    }
}