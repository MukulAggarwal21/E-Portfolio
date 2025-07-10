import React from "react";
import { BsGithub } from "react-icons/bs";
// import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import XIcon from '@mui/icons-material/X';
import { SiLeetcode } from "react-icons/si";

import { featuresData } from "../../data/data";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "4em" }}>
        <div className="flex gap-5 " >
          <a href="https://github.com/MukulAggarwal21" target="_blank" rel="noopener noreferrer"><span className="bannerIcon">
            <BsGithub />

          </span></a>
          <a href="https://www.linkedin.com/in/mukul-aggarwal-850368261/" target="_blank" rel="noopener noreferrer"><span className="bannerIcon">
            <FaLinkedin />
          </span></a>
          <a   href="https://leetcode.com/u/AGGARWAL_MUKUL21/" target="_blank" rel="noopener noreferrer"><span className="bannerIcon">
            <SiLeetcode />
          </span></a>
          <a href="https://x.com/MukulAggar91941" target="_blank" rel="noopener noreferrer"><span className="bannerIcon">
            {/* <FaSquareXTwitter /> */}
            <XIcon />

          </span></a>
          <a href="https://www.instagram.com/mukul_aggarwal21_/" target="_blank" rel="noopener noreferrer"><span className="bannerIcon">
            <FaInstagramSquare />
          </span></a>


        </div>
      </div>
    </section>
  );
};

export default Features;
