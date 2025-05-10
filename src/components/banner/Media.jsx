import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaReact, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
// import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/MukulAggarwal21https://github.com/MukulAggarwal21"><span className="bannerIcon">
            <BsGithub />
          </span></a>

          <a href="https://www.linkedin.com/in/mukul-aggarwal-850368261/"><span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>
          <a href="https://www.instagram.com/mukul_aggarwal21_/"><span className="bannerIcon">
            <FaInstagram />
          </span></a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            {/* <RiHtml5Fill /> */}
            <IoLogoNodejs />

          </span>
          <span className="bannerIcon">
            <IoLogoJavascript />

          </span>
          <span className="bannerIcon">
            <SiNextdotjs />

          </span>
        </div>
      </div>
    </div>
  )
}

export default Media