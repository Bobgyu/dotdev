import React from "react";
import { heroLinks } from "../../constants/data";
import { Link } from "react-router-dom";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper flex flex-col items-center mt-6">
      <h1 className="slogan lg:text-7xl sm:text-6xl text-4xl text-center dark:text-gray-300 text-neutral-700 tracking-wide">
        AceDot Build Tools
        {/* 이스테이프 문자 참조 https://taemssssss.tistory.com/23#google_vignette */}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          &nbsp; for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center leading-7 text-gray-400 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rem
        laborum, sit neque doloribus asperiores qui? Cupiditate, dignissimos
        odit doloremque nulla voluptatibus non. Itaque quod dolores nulla
        tenetur, et dolorum!
      </p>
      <div className="sub-links mt-10 flex gap-3">
        {heroLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="py-3 px-6 border border-gray-400"
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper flex flex-col md:flex-row mt-10 gap-2 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 my-auto md:my-4 mx-2"
        >
          >
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 my-auto md:my-4 mx-2"
        >
          >
          <source src={video2} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
