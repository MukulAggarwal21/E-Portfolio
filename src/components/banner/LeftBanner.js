import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Youtuber.", "Software Engineer.", "DSA Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shaurya Awasthi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a  BTech 2024 graduate and an upcoming Advanced Associate Software Engineer @Accenture. With a strong foundation in DSA and a passion for coding, I aim to share valuable insights, tutorials, and experiences from my journey. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner