// import { motion } from "framer-motion";
// import React from "react";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-12 font-titleFont flex gap-20"
//     >
//       <div>
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
//           <h2 className="text-4xl font-bold">ACCOLADES</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Secured 3rd Position in GDSC Hackathon."
//             subTitle="Hackathon - Gurugram."
//             // result="Success"
//             des="I led my team to secure 3rd place out of 100+ teams in the GDSC Hackathon, where we developed a real-time gas leakage detection system that seamlessly merged hardware innovation with software precision."
//           />
//           <ResumeCard
//             title="Secured 4th Position in TRIKON1.0"
//             subTitle="Hackathon - Delhi NCR"
//             //result="Success"
//             des="Participated in TRIKON1.0 — a great experience filled with learning and collaboration. It was an amazing opportunity to explore new ideas, gain insights, and connect with brilliant minds. Wrapped up with lots of goodies and valuable connections.
//  "
//           />
//           <ResumeCard
//             title="Runner up in Innotech Hackathon."
//             subTitle="Hackathon - KIET."
//             //result="Success"
//             des="Leading my tech team at Innotech Fest was an amazing experience! We showcased our project, connected with others, and gained valuable insights, leaving a lasting impact on my college journey, with goodies and resources & a lot of Connections.

// "
//           />
//         </div>
//       </div>
//       <div>
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
//           <h2 className="text-4xl font-bold">EXTRACURRICULAR</h2>
//         </div>
//         <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="LEAD ORGANIZER."
//             subTitle="Web Development Bootcamp."
//             //result="Success"
//             des="• Organized and led a successful 1-week-long web development boot camp
//             for 50+ participants. Topics covered included HTML, CSS, JavaScript and React.
//             • Received high praise from over 30 + participants for providing a valuable and
//             engaging learning experience."
//           />
//           <ResumeCard
//             title="SPEAKER/INSTRUCTOR."
//             subTitle="Git/GitHub session at college."
//             //result="Success"
//             des=" Led a 2-day session on Git/GitHub, covering topics such as 1-version control,
//             2-branching, 3-merging, and 4-collaboration, for a diverse audience of professionals
//             from various industries."
//           />
//           <ResumeCard
//             title="Administrator "
//             subTitle="CPByte Coding Club (KIET)."
//             //result="Success"
//             des=" Served as the Administrator  and DSA Lead for the CPByte KIET. In this role, I was
//             responsible for organizing and leading technical events and workshops for the club.
//             And also mentored and guided over 100+ students/members in their learning."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Achievement;


// import { motion } from "framer-motion";
// import React from "react";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-8 md:py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
//     >
//       <div className="flex-1">
//         <div className="py-6 md:py-12 font-titleFont flex flex-col gap-2 md:gap-4">
//           <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2022 - Present</p>
//           <h2 className="text-2xl md:text-4xl font-bold">ACCOLADES</h2>
//         </div>
//         <div className="mt-6 md:mt-14 w-full h-auto md:h-[1000px] border-l-[3px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 md:gap-10">
//           <ResumeCard
//             title="Secured 3rd Position in GDSC Hackathon."
//             subTitle="Hackathon - Gurugram."
//             des="I led my team to secure 3rd place out of 100+ teams in the GDSC Hackathon, where we developed a real-time gas leakage detection system that seamlessly merged hardware innovation with software precision."
//           />
//           <ResumeCard
//             title="Secured 4th Position in TRIKON1.0"
//             subTitle="Hackathon - Delhi NCR"
//             des="Participated in TRIKON1.0 — a great experience filled with learning and collaboration. It was an amazing opportunity to explore new ideas, gain insights, and connect with brilliant minds. Wrapped up with lots of goodies and valuable connections."
//           />
//           <ResumeCard
//             title="Runner up in Innotech Hackathon."
//             subTitle="Hackathon - KIET."
//             des="Leading my tech team at Innotech Fest was an amazing experience! We showcased our project, connected with others, and gained valuable insights, leaving a lasting impact on my college journey, with goodies and resources & a lot of Connections."
//           />
//         </div>
//       </div>
//       <div className="flex-1 mt-10 lg:mt-0">
//         <div className="py-6 md:py-12 font-titleFont flex flex-col gap-2 md:gap-4">
//           <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2022 - Present</p>
//           <h2 className="text-2xl md:text-4xl font-bold">EXTRACURRICULAR</h2>
//         </div>
//         <div className="mt-6 md:mt-14 w-full h-auto md:h-[1000px] border-l-[3px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 md:gap-10">
//           <ResumeCard
//             title="LEAD ORGANIZER."
//             subTitle="Web Development Bootcamp."
//             des="• Organized and led a successful 1-week-long web development boot camp
//             for 50+ participants. Topics covered included HTML, CSS, JavaScript and React.
//             • Received high praise from over 30 + participants for providing a valuable and
//             engaging learning experience."
//           />
//           <ResumeCard
//             title="SPEAKER/INSTRUCTOR."
//             subTitle="Git/GitHub session at college."
//             des=" Led a 2-day session on Git/GitHub, covering topics such as 1-version control,
//             2-branching, 3-merging, and 4-collaboration, for a diverse audience of professionals
//             from various industries."
//           />
//           <ResumeCard
//             title="Administrator "
//             subTitle="CPByte Coding Club (KIET)."
//             des=" Served as the Administrator  and DSA Lead for the CPByte KIET. In this role, I was
//             responsible for organizing and leading technical events and workshops for the club.
//             And also mentored and guided over 100+ students/members in their learning."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Achievement;


import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-8 md:py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Accolades Section */}
      <div className="flex-1">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-2 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2022 - Present</p>
          <h2 className="text-2xl md:text-4xl font-bold">ACCOLADES</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full h-auto md:h-[1000px] border-l-[3px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 md:gap-10">
          <ResumeCard
            title="Secured 3rd Position in GDSC Hackathon."
            subTitle="Hackathon - Gurugram."
            des="I led my team to secure 3rd place out of 100+ teams in the GDSC Hackathon, where we developed a real-time gas leakage detection system that seamlessly merged hardware innovation with software precision."
          />
          <ResumeCard
            title="Secured 4th Position in TRIKON1.0"
            subTitle="Hackathon - Delhi NCR"
            des="Participated in TRIKON1.0 — a great experience filled with learning and collaboration. It was an amazing opportunity to explore new ideas, gain insights, and connect with brilliant minds. Wrapped up with lots of goodies and valuable connections."
          />
          <ResumeCard
            title="Runner up in Innotech Hackathon."
            subTitle="Hackathon - KIET."
            des="Leading my tech team at Innotech Fest was an amazing experience! We showcased our project, connected with others, and gained valuable insights, leaving a lasting impact on my college journey, with goodies and resources & a lot of Connections."
          />
        </div>
      </div>
      {/* Extracurricular Section */}
      <div className="flex-1 mt-10 lg:mt-0">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-2 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2022 - Present</p>
          <h2 className="text-2xl md:text-4xl font-bold">EXTRACURRICULAR</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full h-auto md:h-[1000px] border-l-[3px] md:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 md:gap-10">
          <ResumeCard
            title="LEAD ORGANIZER."
            subTitle="Web Development Bootcamp."
            des="• Organized and led a successful 1-week-long web development boot camp for 50+ participants. Topics covered included HTML, CSS, JavaScript and React. • Received high praise from over 30+ participants for providing a valuable and engaging learning experience."
          />
          <ResumeCard
            title="SPEAKER."
            subTitle="Git/GitHub session at college."
            // des="Served as the Administrator and DSA Lead for the CPByte KIET. In this role, I was responsible for organizing and leading technical events and workshops for the club. Also mentored and guided over 100+ students/members in their learning."
          des="Led a 2-day session on Git/GitHub, covering topics such as version control, branching, merging, and collaboration, for a diverse audience of professionals from various industries."
          />
          <ResumeCard
            title="Administrator "
            subTitle="CPByte Coding Club (KIET)."
            des="Served as the Administrator and DSA Lead for the CPByte KIET. In this role, I was responsible for organizing and leading technical events and workshops for the club. Also mentored and guided over 100+ students/members in their learning."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;