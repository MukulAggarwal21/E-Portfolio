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
            title="DSA Trainer"
            subTitle="Department of Computer Science, Kiet Group Of Institutions - (Mar 2024 - May 2024)"
            result="Offline"
            des="Conducted a 7-week DSA training for prefinal year undergraduates, covering all essential concepts for placements.
            • Developed and delivered a detailed curriculum, ensuring alignment with academic and industry standards.
            • Collaborated with faculty and received commendation from the Head of Department for teaching effectiveness."
          />
        
        <ResumeCard
            title="DSA-Instructor"
            subTitle="SDFS Kiet Group Of Institutions, Ghaziabad, IN - (Nov 2023 - May 2024)"
            result="Offline"
            des="• Instructed and trained over 100 college juniors in Data Structures and Algorithms as a dedicated instructor.
            • Utilized interactive teaching methods to simplify complex DSA topics, creating a dynamic learning atmosphere for
            participants over a 6-month period in the CCIP program organized by the SDFS department of the college."
          />

        <ResumeCard
            title="React Developer"
            subTitle="Tech BRJ - (Jul 2023 - Aug 2023)"
            result="Remote"
            des="• During my internship, I gained the opportunity to Develop an exciting project of a real-time Feedback Form using React JS Within 2 weeks.
            •The main objective can be clarified as to allow users to provide feedback on of their experience 1 by 1 for our partner company"
          />
          
          <ResumeCard
            title="AMAZON | ML Summer School 2022"
            subTitle="1 July 2022- 30 July 2022"
            result="Remote"
            des="
            This 6-week program provided me with a Basic understanding of various ML
            techniques, including regression, classification, clustering, and deep learning"
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
