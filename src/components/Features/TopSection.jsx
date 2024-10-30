import React from "react";
import { heroLinks, features } from "../../constants/data";
import { Link } from "react-router-dom";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import image1 from "../../assets/Built-in Templates.gif";
import image2 from "../../assets/preview.gif";
import image3 from "../../assets/collaboration.webp";
import image4 from "../../assets/dashboard.avif";

const TopSection = () => {
  return (
    <div className="top-wrapper">
      <div className="text-center">
        <h2 className="dark:bg-neutral-900 text-indigo-500 py-1 px-2 text-3xl sm:text-5xl font-medium uppercase rounded-full light: border light: border-neutral-500 light: bg-white dark:border-0">
          Features
        </h2>
        <span className="text-sm lg:text-3xl mt-10 lg:mt-20 tracking-wide">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
            Your Codes
          </span>
        </span>
      </div>
      <div className="Features">
        <div className="Drag-and-Drop flex flex-col ">
          {features.map((feature, id) => (
            <div
              key={feature.id}
              className={`flex items-center my-4 ml-4 w-full ${
                id % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } flex-wrap md:flex-nowrap`}
            >
              {feature.text === "Drag-and-Drop Interface" && (
                <video
                  autoPlay
                  loop
                  muted
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2"
                >
                  <source src={video2} type="video/mp4" />
                  현재 브라우저는 영상 재생을 지원하지 않습니다.
                </video>
              )}
              {feature.text === "Multi-Platform Compatibility" && (
                <video
                  autoPlay
                  loop
                  muted
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2 "
                >
                  <source src={video1} type="video/mp4" />
                  현재 브라우저는 영상 재생을 지원하지 않습니다.
                </video>
              )}
              {feature.text === "Built-in Templates" && (
                <img
                  src={image1}
                  alt=""
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2 "
                />
              )}
              {feature.text === "Real-Time Preview" && (
                <img
                  src={image2}
                  alt=""
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2 "
                />
              )}
              {feature.text === "Collaboration Tools" && (
                <img
                  src={image3}
                  alt=""
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2"
                />
              )}
              {feature.text === "Analytics Dashboard" && (
                <img
                  src={image4}
                  alt=""
                  className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-indigo-400 mr-6 md:my-4 mx-2"
                />
              )}
              <div className="flex flex-col">
                <div className="w-full h-full text-indigo-700 mt-6">
                  {feature.icon}
                </div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 md-20 text-neutral-500 ">
                  {feature.description}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos voluptate itaque repellendus natus voluptatibus
                  animi cum laboriosam molestiae quis, harum quas aspernatur
                  modi accusamus! Omnis officiis iusto quas dolore veniam?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
