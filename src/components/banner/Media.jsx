import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaReact, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiHtml5Fill } from "react-icons/ri";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/Shauryaa007"><span className="bannerIcon">
                    <BsGithub/>
                  </span></a>
                  <a href="https://www.youtube.com/@Shauryaaa007"><span className="bannerIcon">
                  <FaYoutube />
                  </span></a>
                  <a href="https://www.linkedin.com/in/shaurya007/"><span className="bannerIcon">
                    <FaLinkedinIn />
                  </span></a>
                  <a href="https://www.instagram.com/shauryaa.cpp/"><span className="bannerIcon">
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
              <RiHtml5Fill />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media