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
            subTitle="Kiet Group Of Institutions (2022 - Present)"
            result="8.1/10"
          // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="CBSE (XII)"
            subTitle="TRM PUBLIC SCHOOL (2021-2022)"
            result="89.8%"
          //des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="CBSE (X)"
            subTitle="TRM PUBLIC SCHOOL (2019 - 2020)"
            result="87.6%"
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
            title="AWS Academy Graduate - AWS Academy Cloud Foundations"
            subTitle="Issued December 01, 2024"
            result="Skills : AWS Architechture, Aws Cloud and AWS Services"
            des="Completed foundational training on AWS Cloud concepts, including core AWS services, cloud architecture, security, pricing, and support. Gained hands-on experience with AWS global infrastructure and best practices for deploying scalable, reliable cloud solutions."
          />
          <ResumeCard
            title="Microsoft Azure Certifications"
            subTitle="Issued December 26, 2024"
            result="Skills Gained : Azure Core Structure"
            des="Successfully completed training on the core architectural components of Microsoft Azure, including key concepts of regions, availability zones, resource groups, subscriptions, and Azure Resource Manager. Developed foundational knowledge in deploying, managing, and scaling Azure cloud solutions securely and efficiently.

"
          />
          <ResumeCard
            title="Git Essential Training "
            subTitle="Issued October 28, 2023"
            result="Skills Gained : Git, GitHub, Version Control"
            des="Completed comprehensive training covering core Git concepts including version control, branching, merging, and collaboration workflows. Gained hands-on experience in managing repositories and contributing to projects using Git efficiently.
"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education