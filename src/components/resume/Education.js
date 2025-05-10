import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="Kiet Group Of Institutions (2020 - 2024)"
            result="8.56/10"
           // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="CBSE (XII)"
            subTitle="ELPIS GLOBAL SCHOOL (2018 - 2019)"
            result="90.2/100"
            //des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="CBSE (X)"
            subTitle="ELPIS GLOBAL SCHOOL (2016 - 2017)"
            result="10/10"
            //des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certified Courses</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development with HTML,
            CSS, and JavaScript "
            subTitle="Issued September 8, 2021"
            result="Skills Gained : HTML5 CSS JavaScript"
            des="successfully completed and received a passing grade in CAD101EN: Introduction to Cloud Development with HTML, CSS, and JavaScript
            a course of study offered by IBM, an online learning initiative of IBM."
          />
          <ResumeCard
            title="Data Structures on Coursera"
            subTitle="University of California San Diego"
            result="Skills Gained : Data Structures and Algorithms"
            des="SHAURYA AWASTHI's account is verified. Coursera certifies their successful completion of Data Structures"
          />
          <ResumeCard
            title="Amazon ML Summer School"
            subTitle="Amazon - (2022)"
            result="Skills Gained : Basics of Machine Learning"
            des="A great learning experience attending Amazon ML Summer School 2022. Grateful to Amazon for departing such great knowledge to students. Looking forward to more such opportunities...
"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education