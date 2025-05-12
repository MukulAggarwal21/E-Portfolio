import React from "react";
import { BsGithub } from "react-icons/bs";
// import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import XIcon from '@mui/icons-material/X';

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
          <a href="https://github.com/MukulAggarwal21"><span className="bannerIcon">
            <BsGithub />

          </span></a>
          <a href="https://www.linkedin.com/in/mukul-aggarwal-850368261/"><span className="bannerIcon">
            <FaLinkedin />
          </span></a>
          <a href="https://x.com/MukulAggar91941"><span className="bannerIcon">
            {/* <FaSquareXTwitter /> */}
            <XIcon />

          </span></a>
          <a href="hhttps://www.instagram.com/mukul_aggarwal21_/"><span className="bannerIcon">
            <FaInstagramSquare />
          </span></a>


        </div>
      </div>
    </section>
  );
};

export default Features;
