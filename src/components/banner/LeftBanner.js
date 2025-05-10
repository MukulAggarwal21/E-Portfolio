import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Open Source Contributor.", "Freelancer.", "Tech Enthusiast."],
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
          Hi, I'm <span className="text-designColor capitalize">Mukul Aggarwal</span>
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
          As a Full-Stack Developer, I specialize in React.js, Next.js, JavaScript, Node.js, and Tailwind CSS to create intuitive and responsive applications. I ensure optimized and efficient code for scalable solutions.        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner