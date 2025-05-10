import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
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

      <div style={{display:"flex",justifyContent:"center",marginTop:"4em"}}>
          <div className="flex gap-5 " >
                  <a href="https://github.com/Shauryaa007"><span className="bannerIcon">
                    <BsGithub/>
                  </span></a>
                  <a href="https://leetcode.com/shauryaa007/"><span className="bannerIcon">
                    <SiLeetcode/>
                  </span></a>
                  <a href="https://auth.geeksforgeeks.org/user/lordvoldemortt"><span className="bannerIcon">
                    <SiGeeksforgeeks />
                  </span></a>
                  <a href="https://www.codechef.com/users/shauryaa_18"><span className="bannerIcon">
                    <SiCodechef />
                  </span></a>
                  <a href="https://codeforces.com/profile/LordVoldemort007"><span className="bannerIcon">
                    <SiCodeforces />
                  </span></a>
          </div>
        </div>
    </section>
  );
};

export default Features;
