import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
       



          <ResumeCard
            title="Full Stack Intern"
            subTitle="Agile Growth Tech - (Sep 2024 - Feb 2025)"
            result="Remote"
            des="I optimized scalable features to enhance portal performance and user engagement, refactored legacy code, and implemented responsive UI components for a seamless admin experience. I designed secure RESTful APIs and streamlined backend workflows for faster data handling. Additionally, I improved load times and responsiveness through frontend performance tuning and efficient state management, using React.js, Next.js, Node.js, Express.js, and JavaScript ES6+."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="TBI KIET (Oct 2024 - Jan 2025)"
            result="Remote"
            des="I designed and developed a comprehensive portal for 50+ incubated startups, streamlining document collection, resource management, and certification processes. I also implemented and managed the Redux store, enabling scalable and efficient state management to enhance data flow across the platform."
          />
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Talenrn (Sep 2023- March 2024"
            result="Remote"
            des="
           Developed a dynamic web solution with React.js and Tailwind CSS, collaborating with cross-functional teams to improve accessibility and performance through code optimization and responsive design."
          />
             <ResumeCard
            title="Administrator"
            subTitle=" CPByte, Kiet Group Of Institutions (May 2023 -Present)"
            result="Offline"
            des="Conducted a 7-week DSA training for prefinal year undergraduates, covering all essential concepts for placements.
            • Developed and delivered a detailed curriculum, ensuring alignment with academic and industry standards.
            • Collaborated with faculty and received commendation from the Head of Department for teaching effectiveness."
          />
          {/* <ResumeCard
            //title="Front-end Developer"
            //subTitle="Nike - (2020 - 2011)"
            result="coming soon"
            //des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
         */}
        </div>
        {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IIPC KIET | 120+ Hours Of Online Training"
            subTitle="1 July 2021- 30 July 2021"
            result="Remote"
            des="• Completed this online web development training program."/>
          <ResumeCard
           result="coming soon"
           />
          <ResumeCard
           result="coming soon"
           />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
