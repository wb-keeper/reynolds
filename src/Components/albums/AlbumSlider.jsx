"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { useState } from "react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

const fetcher = (url) => fetch(url).then((res) => res.json());

function AlbumSlider(props) {
  const { thumbsSwiper, setThumbsSwiper } = useState(null);
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);
  if (error) return "Failed to fetch data";
  if (!data) return "Loading...";
  console.log(data);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        className="album-slider"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    src={album.img}
                    fill
                    priority
                    alt="album"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 w-full h-[500px]">
                  <div className="flex-1 flex flex-col xl:px-12">
                    {album.tracks?.map((track, index) => {
                      return (
                        <div
                          className="flex flex-1 w-full h-[500px]"
                          key={index}
                        >
                          <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                            <div className="text-accent text-sm xl:text-lg">
                              0{index + 1}
                            </div>
                            <div className="text-sm xl:text-base">
                              {track.name}
                            </div>
                          </div>
                          <div>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                maxWidth: "100%",
                              }}
                              src={track.src}
                              loop
                              preload="none"
                              color="#fff"
                              volume={40}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((thumb, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-[195px] h-[195px]">
                <Image
                  src={thumb.img}
                  fill
                  priority
                  className="object-contain"
                  alt="img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default AlbumSlider;
