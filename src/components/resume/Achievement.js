import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">ACCOLADES</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Runner up in KICCS-D-HACK 23.5"
            subTitle="(Coding Competition in college)"
            // result="Success"
            des="Honored to receive the Runner-up award in the department-level of KICCS-D-HACK 23.6 from our esteemed HOD and Dean-AC . "
          />
          <ResumeCard
            title="3-Star at CODECHEF."
            subTitle="Competitive Programming"
            //result="Success"
            des="Achieved a 3-star rating on CodeChef! I'm grateful for the challenges, the knowledge gained, and the incredible community that has supported me along the way. "
          />
          <ResumeCard
            title="Solved 1000+ DSA problems."
            subTitle="On Different coding platforms."
            //result="Success"
            des="Successfully solved 500+ Data Structures and Algorithms problems!  It's been an incredible journey of continuous learning, problem-solving, and honing my coding skills. "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">EXTRACURRICULAR</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="LEAD ORGANIZER."
            subTitle="Web Development Bootcamp."
            //result="Success"
            des="• Organized and led a successful 1-week-long web development boot camp
            for 50+ participants. Topics covered included HTML, CSS, and JavaScript.
            • Received high praise from over 30 + participants for providing a valuable and
            engaging learning experience."
          />
          <ResumeCard
            title="SPEAKER/INSTRUCTOR."
            subTitle="Git/GitHub session at college."
            //result="Success"
            des=" Led a 2-day session on Git/GitHub, covering topics such as 1-version control,
            2-branching, 3-merging, and 4-collaboration, for a diverse audience of professionals
            from various industries."
          />
          <ResumeCard
            title="VICE PRESIDENT / DSA LEAD."
            subTitle="Newton school coding club (KIET)."
            //result="Success"
            des=" Served as the Vice President and DSA Lead for the NSCC KIET. In this role, I was
            responsible for organizing and leading technical events and workshops for the club.
            And also mentored and guided over 100+ students/members in their learning."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
