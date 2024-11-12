import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

export default function App() {
  const [prevShowCanvas, setprevShowCanvas] = useState(false);
  const showRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setprevShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            backgroundColor: "#fd2c2a",
            color: "white",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power4.inOut",

            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "black",
            backgroundColor: "white",
            ease: "power2.inOut",
          });
        }
        return !prevShowCanvas;
      });
    };

    const headingElement = showRef.current;
    headingElement.addEventListener("click", handleClick);
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing block fixed top-[-50px] left-[-50px] rounded-full w-5 h-5"
      ></span>
      <div className="relative overflow-hidden min-h-screen">
        <div className="relative w-full max-h-screen">
          {prevShowCanvas &&
            data[0].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <div className="relative z-[1] w-full h-screen">
            <nav className="w-full p-6 z-50 bg-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <h1 className=" text-[1.5vw] font-bold">Six Teen Studios</h1>
                <ul className="flex gap-8 ">
                  {["Home", "About", "Work", "Contact"].map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="p-4 w-full">
              <div className="ml-60 w-[20%] flex flex-col gap-5">
                <p className="text-[2vw]">
                  At SixTeenStudio, we build immersive digital experiences for
                  brands with a purpose.
                </p>
                <p>
                  We're a boutique production studio focused on design, motion,
                  and creative technology, constantly reimagining what digital
                  craft can do for present-time ads and campaigns.
                </p>
                <p>Scroll</p>
              </div>
              <div className="w-full p-4">
                <p
                  ref={showRef}
                  className="headingElement text-[11vw] text-center leading-none"
                >
                  SIX TEEN STUDIOS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full max-h-screen">
          {prevShowCanvas &&
            data[1].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <div className="mt-20 p-4 w-full h-screen">
            <img
              src="./images/music.jpg"
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="relative w-full max-h-screen">
          {prevShowCanvas &&
            data[2].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <div className="p-4 mt-20">
            <h2 className="text-3xl font-bold mb-4">Music Studio Services</h2>
            <ul className="list-disc pl-6">
              <li>Professional Recording Sessions</li>
              <li>Mixing and Mastering</li>
              <li>Music Production</li>
              <li>Vocal Coaching</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full max-h-screen">
          {prevShowCanvas &&
            data[3].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <div className="p-8 mt-20 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[40%] mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Studio Equipment
              </h2>
              <ul className="list-disc pl-6">
                <li>High-end Microphones</li>
                <li>Pro Tools HD</li>
                <li>Analog and Digital Mixing Consoles</li>
                <li>Acoustic Treatment</li>
              </ul>
            </div>
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <img
                src="./images/music_equipments.png"
                alt="Studio Equipment"
                className="w-full max-w-[20vw] h-auto rounded-full border-2 bg-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full max-h-screen">
          {prevShowCanvas &&
            data[4].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
          <div className="p-8 mt-20 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[40%] mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Music Genres We Specialize In
              </h2>
              <ul className="list-disc pl-6">
                <li>Pop</li>
                <li>Rock</li>
                <li>Hip-Hop</li>
                <li>Electronic</li>
                <li>Classical</li>
              </ul>
            </div>
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <img
                src="./images/music_genres.jpg"
                alt="Music Genres"
                className="w-full max-w-[20vw] h-auto rounded-full border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
