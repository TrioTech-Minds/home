"use client";

import Image from "next/image";
import Shape3 from './assets/shape-03.svg';
import gif from './assets/Twyn.gif';
import image from './assets/shape01.png';
import image2 from './assets/shape02.svg';
import sideImage from './assets/sideImage.jpeg';
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" style={{background:"#FAFAFA"}}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Welcome To <br />
               {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:z-0 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                <span style={{position:'relative'}}>
                  
                TrioTech Minds
                </span>
                </span>
              </h1>
              <p>
              Empowering your vision with cutting-edge mobile apps, robust backend solutions, dynamic websites, and AI innovations—crafted to elevate your business into the future.
              </p>
              
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* <Image
                  src={image}
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src={image2}
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src={Shape3}
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    src={gif}
                    alt="Hero"
                    fill
                  />
                  {/* <video
                  src={gif.src}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
