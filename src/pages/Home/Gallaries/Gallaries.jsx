import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Gallaries = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mb-5'>Photo Galleries</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992408.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.1.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/camping-tents-pine-trees-with-sunlight-pang-ung-lake-mae-hong-son-thailand_335224-931.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.1.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/professional-photographer-takes-photos-with-camera-tripod-rocky-peak-sunset_335224-431.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/silhouette-photographer-who-shoots-sunset-mountains_1150-7357.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-amazing-clouds-sky_181624-2044.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="" />

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallaries;