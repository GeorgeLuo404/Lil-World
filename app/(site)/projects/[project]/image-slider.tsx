"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageSlider({ images, alt }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="rounded-lg overflow-hidden mb-6"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
